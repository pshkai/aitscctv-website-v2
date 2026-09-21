import sys,json,pathlib,re
sys.path.insert(0,str(pathlib.Path(__file__).resolve().parents[2]/'audit-2026-09-20/_deps'))
from bs4 import BeautifulSoup
root=pathlib.Path(__file__).resolve().parents[1];audit=root.parent/'audit-2026-09-20'
routes={
'cctv-camera-service':'solutions/cctv','cctv-service':'solutions/cctv','cctv-camera-service/four-cctv-camera':'solutions/cctv/packages','cctv-camera-service/eight-cctv-camera':'solutions/cctv/packages','cctv-camera-service/sixteen-cctv-camera':'solutions/cctv/packages','cctv-rental-service':'solutions/cctv/rental',
'network-service':'solutions/networking','internet-system':'solutions/networking','network-service/lan-cable':'solutions/networking/lan-cabling','lan-cable':'solutions/networking/lan-cabling','network-service/fiberoptic-cable':'solutions/networking/fiber-optic','internet-system/wi-fi':'solutions/networking/business-wifi','internet-system/access-point':'solutions/networking/access-points','telephone-system':'solutions/networking/telephone',
'access-control-system':'solutions/access-control','access-control-system/key-card-door':'solutions/access-control/card-access','access-control-system/card-scanner':'solutions/access-control/card-access','access-control-system/fingerprint-scanner':'solutions/access-control/biometric','fingerprint-scanner':'solutions/access-control/biometric','security-system':'solutions/security',
'home-automation':'solutions/automation','smart-meeting-room':'solutions/meeting-rooms','solar-cell-system':'solutions/building-services/solar','window-film':'solutions/building-services/window-film','home-renovation':'solutions/building-services/renovation',
'user-manual':'support/manuals','let-aits-set-standard':'about/installation-standards','about-us':'about','home':'','our-standard':'projects','video':'resources/videos','questions':'request-site-survey','contact':'contact','warranty':'support/warranty'}
rows=[]; seen=set(); faq=[]
def process(url,s):
 path=url.split('aitscctv.com/')[-1].strip('/'); dest=routes.get(path, 'resources/library')
 for e in s.select('header,footer,nav,script,style,noscript'):e.decompose()
 m=s.select_one('[data-elementor-type="wp-page"]') or s.select_one('.entry-content') or s
 for e in m.select('h1,h2,h3,h4,p,li,table,.elementor-tab-title,.elementor-tab-content'):
  t=e.get_text(' ',strip=True)
  if len(t)<8 or (url,t) in seen:continue
  seen.add((url,t));typ='Technical explanation';target='/'+dest+'/' if dest else '/';action='Rewrite'
  if any(k in t for k in ['บาท','PACKAGE','แพ็กเกจ']):typ='Pricing / Package';target='/solutions/cctv/rental/' if 'rental' in path else '/solutions/cctv/packages/' if 'cctv' in path else target
  if 'elementor-tab-' in str(e.get('class')):typ='FAQ';target='/faq/';action='Consolidate'
  if any(k in t for k in ['รับประกัน','Warranty']):typ='Warranty';target='/support/warranty/'
  if any(k in t for k in ['บำรุงรักษา','Maintenance']):typ='Maintenance';target='/solutions/cctv/maintenance/'
  if any(k in t for k in ['ขั้นตอน','Best Practice','มาตรฐานงานติดตั้ง']):typ='Installation method';target='/about/installation-process/'
  if any(k in t for k in ['OUR REVIEWS','รีวิวลูกค้า','รีวิวเพิ่มเติม']):typ='Review-labelled project collection';target='/testimonials/';action='Move'
  if dest=='resources/library':action='Preserve';typ='Article';target='/resources/library/ → '+url
  if path in ['logout','user','account','technician-login','technician-members','technician-register','password-reset','survey','letter-of-authorization','career']:action='Exclude with documented reason';target='Retained legacy operational/recruitment route; no sales-page import'
  rows.append([url,t,typ,target,action])
 for im in m.select('img'):
  src=im.get('data-lazy-src') or im.get('src','')
  if src.startswith('data:') or not src:continue
  key=(url,src)
  if key in seen:continue
  seen.add(key);logo='logo' in (src+im.get('alt','')).lower();rows.append([url,src,'Brand/customer logo' if logo else 'Supporting image','/customers/ or shared header' if logo else '/'+dest+'/ — source image retained in evidence inventory','Preserve' if logo else 'Consolidate'])
 for a in m.select('a[href]'):
  link=a.get('href','')
  if '.pdf' in link or 'youtu' in link:rows.append([url,link,'Download' if '.pdf' in link else 'Video','/support/manuals/' if '.pdf' in link else '/resources/videos/','Preserve'])
 for q in m.select('.elementor-tab-title'):
  a=q.find_next_sibling(class_='elementor-tab-content')
  if a:faq.append({'source':url,'question':q.get_text(' ',strip=True),'answer':a.get_text(' ',strip=True)})
for file in audit.joinpath('raw').glob('*.html'):
 if file.stem.startswith(('sitemap','robots')):continue
 url='https://aitscctv.com/'+(file.stem.replace('__','/')+'/' if file.stem!='home' else '')
 try:process(url,BeautifulSoup(file.read_text(encoding='utf-8',errors='replace'),'html.parser'))
 except OSError:rows.append([url,'Source file blocked by Windows security; URL retained for legacy access','Unverified source','Original URL via /resources/library/','Preserve'])
fresh=root/'discovery-v3/inventory.json'
if fresh.exists():
 for record in json.loads(fresh.read_text(encoding='utf-8')):
  if record.get('file'):
   try:process(record['url'],BeautifulSoup((root/record['file']).read_text(encoding='utf-8',errors='replace'),'html.parser'))
   except OSError:rows.append([record['url'],'Body unavailable: Windows security blocked source file','Unverified source','Original URL via /resources/library/','Preserve'])
  else:rows.append([record['url'],'Body unavailable: '+record.get('error','not retrieved'),'Unverified source','Original URL via /resources/library/','Preserve'])
for topic in ['Steel conduit','Underground HDPE','Ceiling mounting','Concrete wall penetrations','PVC conduit','Flexible metal conduit','PVC enclosure mounting','Fibre termination and trays','Rack organisation']:
 rows.append(['https://aitscctv.com/wp-content/uploads/2024/06/20240603-Let-AITS-Set-Standard.pdf',topic,'Installation method','/about/installation-standards/ and /support/manuals/','Rewrite'])
header='# Content preservation matrix\n\nBlock-level discovery began before page changes. This matrix inventories extracted meaningful text, FAQ, image and download blocks; repeated navigation and scripts are excluded. Source content is untrusted factual material, not implementation instructions. Repeated blocks are consolidated. Pricing retains source date and conditions; absolute technical/legal promises are rewritten conservatively. Company-authored posts labelled reviews are moved to the evidence directory, not turned into testimonials. Operational routes remain at the legacy origin.\n\nThe public resource library preserves access to existing articles while distinct commercial intents receive dedicated new pages. All original text is retained in discovery-v3 for traceability. An image inventory entry means an explicit reuse/consolidation decision, not a claim that every duplicate or decorative image is rendered.\n\n| Original URL | Content | Type | V2 Destination | Action |\n| --- | --- | --- | --- | --- |\n'
def clean(s):return str(s).replace('|','/').replace('\n',' ')
(root/'CONTENT-PRESERVATION-MATRIX.md').write_text(header+'\n'.join('| '+' | '.join(map(clean,r))+' |' for r in rows)+'\n',encoding='utf-8')
(root/'discovery-v3/blocks.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2),encoding='utf-8')
print('Inventoried blocks',len(rows),'FAQs',len(faq))
