import re

def find_agosto_section(fn):
    with open(fn, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()
    
    m = re.search(r'(<!--[^\n]*FIN DE SEMANA LARGO DE AGOSTO[^\n]*-->.*?<div[^>]*id="feriado-agosto-section"[^>]*>.*?</div>\s*</div>\s*</div>)', content, re.DOTALL)
    if m:
        print(f"=== {fn} ===")
        print(f"Match length: {len(m.group(1))}")
        print(m.group(1)[:200])
        print("...")
        print(m.group(1)[-200:])
    else:
        print(f"=== {fn} === Not matched directly")

find_agosto_section('index.html')
find_agosto_section('ofertas.html')
