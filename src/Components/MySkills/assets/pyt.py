string = "import android from './assets/android.svg'"

import os
x = os.listdir()

names = []
for i in x:
    if (i[:2] == 'ad' ): continue
    name = i[:i.index('.')]
    names.append(name)
    # print(f"import {name} from './assets/{i}'")
for name in names:
    print(f"['{name}', {name}],")