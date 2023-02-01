from skyfield import api
from skyfield import almanac
from zoneinfo import ZoneInfo
from datetime import datetime

EPH_VERSION = "de421.bsp"
TZ = ZoneInfo('America/Chicago')


def main():

    eph = api.load(EPH_VERSION)
    ts = api.load.timescale()

    local_time = datetime.now(TZ)
    tt = ts.from_datetime(local_time)

    phase = almanac.moon_phase(eph, tt)
    print(f'Moon Phase: {phase.degrees:.1f} @ {local_time}')

if __name__ == "__main__":
    main()
