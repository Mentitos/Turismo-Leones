with open('index.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, l in enumerate(lines):
    if 'id="feriado-agosto-section"' in l:
        print("--- index.html lines around feriado-agosto-section ---")
        for j in range(max(0, i-5), min(len(lines), i+110)):
            if 'DESTINOS DE INVIERNO EN AÉREO' in lines[j] or 'invierno' in lines[j].lower() and 'season-section' in lines[j]:
                print(f"Line {j+1}: {lines[j].strip()}")
                break
            if j < i + 15 or j > i + 95:
                print(f"Line {j+1}: {lines[j].rstrip()}")
        break
