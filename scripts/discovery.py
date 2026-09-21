import json, pathlib, urllib.request
ROOT=pathlib.Path(__file__).resolve().parents[1]
AUDIT=ROOT.parent/'audit-2026-09-20'
inventory=json.loads((AUDIT/'sitemap-urls.json').read_text(encoding='utf-8-sig'))
groups={
 'solutions/cctv':['cctv-service','cctv-camera-service','cctv-camera-service/four-cctv-camera','cctv-camera-service/eight-cctv-camera','cctv-camera-service/sixteen-cctv-camera','cctv-rental-service'],
 'solutions/networking':['network-service','network-service/lan-cable','network-service/fiberoptic-cable','internet-system','internet-system/wi-fi','internet-system/access-point','telephone-system','lan-cable'],
 'solutions/access-control':['access-control-system','access-control-system/key-card-door','access-control-system/card-scanner','access-control-system/fingerprint-scanner','fingerprint-scanner','security-system'],
 'solutions/automation':['home-automation'], 'solutions/meeting-rooms':['smart-meeting-room'],
 'solutions/building-services':['solar-cell-system','window-film','home-renovation'],
 'about':['about-us'], 'about/installation-standards':['let-aits-set-standard'],
 'projects':['our-standard','video'], 'resources':['blog'], 'support':['user-manual','warranty'],
 'contact':['line'], 'request-site-survey':['questions'],
 'projects/university-network':['access-point-for-university'], 'projects/cctv-upgrade':['upgrade-cctv'], 'projects/industrial-access':['access-control'],
 'industries/offices':['office-cctv'], 'industries/factories':['smart-factory'],
 'resources/cctv-planning':['cctv-installation','install-cctv','installation-of-cctv'],
 'resources/camera-selection':['ai-cctv','ai-cctv-2'],
 'resources/access-planning':['access-control-system-1'],
 'resources/automation-planning':['smart-home','smart-home-9','smart-energy-optimization','smart-energy-optimization-2'],
}
mapping={('/'+old+'/'):'/'+new+'/' for new,olds in groups.items() for old in olds}
utility=['account','login','logout','user','password-reset','technician-login','technician-register','technician-members','survey','letter-of-authorization']
rows=[]
urls=sorted(set(sum(inventory.values(),[])+['https://aitscctv.com'+x for x in mapping]))
for url in urls:
 from urllib.parse import urlparse
 path=urlparse(url).path
 if path in mapping: dest=mapping[path]; action='Merge' if len(groups[dest.strip('/')])>1 else 'Rewrite'; status=301; reason='Reviewed topic consolidated into a matching bilingual destination; stale prices and absolute claims omitted.'
 elif path.strip('/') in utility: dest=path; action='Utility / Noindex'; status='retain-legacy'; reason='Keep operational WordPress route behind the launch reverse proxy; exclude from marketing sitemap. No local authentication replacement.'
 elif path in ['/','/contact/']: dest=path; action='Preserve'; status=200; reason='Preserve destination with rewritten content and complete language counterpart.'
 elif path=='/career/': dest=path; action='Archive'; status='retain-legacy'; reason='Retain existing recruitment page on legacy origin; not part of the sales navigation.'
 else: dest=path; action='Archive'; status='retain-legacy'; reason='Preserve existing editorial/archive URL on legacy origin; not imported without a page-level review. No blanket redirect or deletion.'
 rows.append(dict(oldUrl=url,newDestination=dest,status=status,action=action,reason=reason))
(ROOT/'redirect-map.json').write_text(json.dumps([x for x in rows if x['status']==301],ensure_ascii=False,indent=2),encoding='utf-8')
(ROOT/'content-inventory.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2),encoding='utf-8')
table='\n'.join('| '+ ' | '.join([r['oldUrl'],r['newDestination'],r['action'],r['reason']])+' |' for r in rows)
(ROOT/'CONTENT-MIGRATION.md').write_text('# Content migration\n\nDecision inventory created before components, 20 September 2026. Sources: the public AITS site and the complete audit/Evidence Index. All discovered sitemap entries are accounted for; only individually reviewed content is imported. Archive means retained on the legacy origin, not deleted. No production changes were made.\n\n## Architecture and safe facts\n\nThai remains at the root; English uses /en/ with equivalent topic routes. Five core solution families, secondary building services, three environments, three documented cases and six focused guides. Preserve the public founding year 2005, company identity, address and contact channels. Describe survey, design, cabling, installation, configuration, testing, documentation and handover where supported. University scope supports Wi-Fi 6, CAT6, PoE, SSID/VLAN, labels, LAN testing and IT guidance. The access-control case only establishes a fingerprint reader and magnetic lock; do not invent its tests, handover or outcomes.\n\n## Omitted material\n\nNo 2023/2024 prices, sales rankings, certifications, nationwide guarantees, response SLAs, perfect coverage, 100% stability, anonymous testimonials or invented project metrics. Camera counts are planning variables, not current packages. Warranty wording distinguishes the published CCTV terms from contract-specific coverage. AI and energy content becomes qualified planning guidance, without savings or predictive guarantees. Office CCTV and Smart Factory are educational material, not fabricated delivered projects.\n\n## Route decisions\n\n| Existing URL | New destination | Action | Notes |\n| --- | --- | --- | --- |\n'+table+'\n',encoding='utf-8')
print(f'Inventoried {len(rows)} URLs; {len(mapping)} reviewed migration routes.')
