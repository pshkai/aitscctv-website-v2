import sys,json,pathlib,subprocess,concurrent.futures,re,hashlib
sys.path.insert(0,str(pathlib.Path(__file__).resolve().parents[2]/'audit-2026-09-20/_deps'))
from bs4 import BeautifulSoup
root=pathlib.Path(__file__).resolve().parents[1]
out=root/'discovery-v3';out.mkdir(exist_ok=True);(out/'raw').mkdir(exist_ok=True)
inventory=json.loads((root.parent/'audit-2026-09-20/sitemap-urls.json').read_text(encoding='utf-8-sig'))
urls=list(dict.fromkeys(inventory['page']+inventory['post']+['https://aitscctv.com/blog/']))
def collect(url):
 file=out/'raw'/(hashlib.sha256(url.encode()).hexdigest()[:16]+'.html')
 if not file.exists():
  p=subprocess.run(['curl.exe','-sS','-L','--max-time','45','-A','Mozilla/5.0',url,'-o',str(file)],capture_output=True)
  if p.returncode:return {'url':url,'error':p.stderr.decode(errors='replace')}
 try: html=file.read_text(encoding='utf-8',errors='replace')
 except OSError as e: return {'url':url,'error':str(e)}
 soup=BeautifulSoup(html,'html.parser')
 main=soup.select_one('.entry-content') or soup.select_one('main') or soup
 blocks=[]
 for el in main.select('h1,h2,h3,h4,p,li,table,summary'):
  text=el.get_text(' ',strip=True)
  if text and len(text)>5:blocks.append({'tag':el.name,'text':text})
 images=[{'src':x.get('data-lazy-src') or x.get('src'),'alt':x.get('alt','')} for x in main.select('img')]
 links=[{'href':a.get('href'),'text':a.get_text(' ',strip=True)} for a in main.select('a[href]')]
 return {'url':url,'title':soup.title.get_text() if soup.title else '', 'blocks':blocks,'images':images,'links':links,'file':str(file.relative_to(root))}
rows=[]
with concurrent.futures.ThreadPoolExecutor(max_workers=4) as pool:
 for i,r in enumerate(pool.map(collect,urls)):
  rows.append(r)
  if i%20==0:print(i+1,len(urls),flush=True);(out/'inventory.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2),encoding='utf-8')
(out/'inventory.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2),encoding='utf-8')
print('Complete',len(rows),flush=True)
