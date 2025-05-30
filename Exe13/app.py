from datetime import datetime
from zoneinfo import ZoneInfo

fuso = ZoneInfo("America/Sao_Paulo")
agora = datetime.now(tz=fuso)

print("Horário atual:", agora.strftime("%d-%m-%Y %H:%M:%S"))
