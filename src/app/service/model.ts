export class Contacts{
id:number;
dentname:string;
email:string;
mobile:string;
tel:string;
provname:string;
provcode:string;
job:string;
password:string;
lineid:string;
facebook:string;
hosmain:string;
isconfirm:string;
confirmdate:string;
isclinic:string;
posid:string;
ishead:number;
dentistnum:string;
tuntanum:string;
assistnum:string;
vichakannum:string;
pvname:string;
position:string;
dateupdate:string;
}
export class Order{
    hcode:string;
orderstatus='1';
dateorder:string;
ordernum=0;
mid=0;
userorder=0;
oid:number;
orderusername:string;
provideusername:string;
dateprovide:string;
providenum:number;
munit:string;
numinstock:number;

}
export class Product{
mid:number;
mname:string;
munit:string;
hcode:string;
numnow:number;
tag:string;
catid:number;
}
export class Hosuser{
userid:number;
hcode:string;
username:string;
password:string;
}
export class Categories{
catid:number;
catname:string;
}

export class MainproductDt{
mid:number;
catid:number;
mcode:string;
mname:string;
munit:string;
prunit60:number;
usage57:number;
usage58:number;
usage59:number;
numnow:number;
tag:string;
prunit61:number;
lastupdate:string;
hcode:string;
genname:string;
nummin:number;
stockvalue:number;
pricen59:number;
pricen60:number;
historical59:number;
historicalvalue59:number;

}
export class Mainstockin{
lotid:number;
hcode:string;
mid:number;
datestockin:string;
supid:number;
numstockin:number;
pricen:number;
pricelot:number;
notelot:string;
numnow:number;
numlotnow:number;
expire:number;
stockvaluein:number;
stocknumin:number;
}
export class Mainstockout{
soid:number;
lotnumber:string;
username:string;
datestockout:string;
lastupdate:string;
numstockout:number;
mid:number;
hcode:string;
receiver:number;
stockvalueout:number;
stocknumout:number;
}
export class Supplier{
supid:number;
supname:string;
tel:string;
email:string;
address:string;

}
export class Hoslatlon { 
    hname: string;
    lon: number;
    lat: number;
}
export class User { 
    rcname: string;
    rcid: number;
    rctype: string;
}