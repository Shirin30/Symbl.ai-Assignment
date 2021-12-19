import requests
url = 'http://localhost:5000/api/data'
res = requests.get(url)
print(res.json()['data'])

datalist = res.json()['data']
newlist = sorted(datalist, key=lambda d: d['id']) 
for item in newlist:
    print('item id : ', item['id'])
    print('item name : ',item['name'])
