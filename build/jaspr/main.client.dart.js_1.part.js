((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={ub:function ub(){},
zP(){throw B.d(B.a4("Cannot modify constant Set"))},
AJ(d){var w,v
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(d))return null
w=parseFloat(d)
if(isNaN(w)){v=C.a.bx(d)
if(v==="NaN"||v==="+NaN"||v==="-NaN")return w
return null}return w},
AH(){if(!!self.location)return self.location.href
return null},
AM(d,e,f,g,h,i,j,k,l){var w,v,u,t=e-1
if(d<100){d+=400
t-=4800}w=C.d.bB(k,1000)
v=Date.UTC(d,t,f,g,h,i,j+C.d.aF(k-w,1000))
u=!0
if(!isNaN(v))if(!(v<-864e13))if(!(v>864e13))u=v===864e13&&w!==0
if(u)return null
return v},
bE(d){if(d.date===void 0)d.date=new Date(d.a)
return d.date},
ky(d){return d.c?A.bE(d).getUTCFullYear()+0:A.bE(d).getFullYear()+0},
wB(d){return d.c?A.bE(d).getUTCMonth()+1:A.bE(d).getMonth()+1},
wx(d){return d.c?A.bE(d).getUTCDate()+0:A.bE(d).getDate()+0},
wy(d){return d.c?A.bE(d).getUTCHours()+0:A.bE(d).getHours()+0},
wA(d){return d.c?A.bE(d).getUTCMinutes()+0:A.bE(d).getMinutes()+0},
wC(d){return d.c?A.bE(d).getUTCSeconds()+0:A.bE(d).getSeconds()+0},
wz(d){return d.c?A.bE(d).getUTCMilliseconds()+0:A.bE(d).getMilliseconds()+0},
fZ:function fZ(){},
h_:function h_(d,e,f){this.a=d
this.b=e
this.$ti=f},
jY:function jY(){},
eR:function eR(d,e){this.a=d
this.$ti=e},
rg(){var w=new A.rf()
return w.b=w},
rf:function rf(){this.b=null},
mb(d,e,f){var w,v,u,t
if(e===0){w=f.c
if(w!=null)w.bG(null)
else{w=f.a
w===$&&B.B()
w.aq()}return}else if(e===1){w=f.c
if(w!=null){v=B.G(d)
u=B.a_(d)
w.a1(new B.ac(v,u))}else{w=B.G(d)
v=B.a_(d)
u=f.a
u===$&&B.B()
if(u.b>=4)B.a0(u.cI())
t=B.tr(w,v)
u.e0(t.a,t.b)
f.a.aq()}return}x.lD.a(e)
if(d instanceof A.ib){if(f.c!=null){e.$2(2,null)
return}w=d.b
if(w===0){w=d.a
v=f.a
v===$&&B.B()
w=B.f(v).c.a(f.$ti.c.a(w))
if(v.b>=4)B.a0(v.cI())
v.e2(w)
B.d8(new A.tc(f,e))
return}else if(w===1){w=f.$ti.h("aF<1>").a(x.fw.a(d.a))
v=f.a
v===$&&B.B()
v.lC(w,!1).ab(new A.td(f,e),x.P)
return}}B.xD(d,e)},
D7(d){var w=d.a
w===$&&B.B()
return new A.dE(w,B.f(w).h("dE<1>"))},
Bp(d,e){var w=new A.lr(e.h("lr<0>"))
w.jG(d,e)
return w},
CX(d,e){return A.Bp(d,e)},
F1(d){return new A.ib(d,1)},
By(d){return new A.ib(d,0)},
Ac(d,e){var w=new B.z($.D,e.h("z<0>"))
A.l8(C.J,new A.o9(d,w))
return w},
w8(d,e){var w=new B.z($.D,e.h("z<0>"))
B.d8(new A.o8(d,w))
return w},
w7(d,e,f){var w=new B.z($.D,f.h("z<0>"))
A.l8(d,new A.o7(e,w,f))
return w},
o3(d,e){d.ko()},
Ab(d,e){var w,v,u,t=B.a([],e.h("x<i9<0>>"))
for(w=d.length,v=e.h("i9<0>"),u=0;u<d.length;d.length===w||(0,B.P)(d),++u)t.push(new A.i9(d[u],v))
if(t.length===0)return B.h9(B.a([],e.h("x<0>")),e.h("n<0>"))
w=new B.z($.D,e.h("z<n<0>>"))
A.Bs(t,new A.o6(new A.iG(w,e.h("iG<n<0>>")),t,e))
return w},
CZ(d){return d!=null},
Bs(d,e){var w,v={},u=v.a=v.b=0,t=new A.rm(v,d,e)
for(w=d.length;u<d.length;d.length===w||(0,B.P)(d),++u)d[u].lp(t)},
vd(d){var w,v,u
if(d==null)return
try{d.$0()}catch(u){w=B.G(u)
v=B.a_(u)
B.dM(B.aa(w),x.l.a(v))}},
Bk(d){return new A.r1(d)},
Bq(d,e){if(e==null)e=A.Dj()
if(x.f.b(e))return d.du(e,x.z,x.K,x.l)
if(x.i6.b(e))return x.mq.a(e)
throw B.d(B.a5("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
D_(d,e){B.dM(B.aa(d),x.l.a(e))},
l8(d,e){var w=$.D
if(w===C.i)return B.uT(d,x.M.a(e))
return B.uT(d,x.M.a(w.eE(e)))},
tc:function tc(d,e){this.a=d
this.b=e},
td:function td(d,e){this.a=d
this.b=e},
lr:function lr(d){var _=this
_.a=$
_.b=!1
_.c=null
_.$ti=d},
r7:function r7(d){this.a=d},
r8:function r8(d){this.a=d},
r9:function r9(d){this.a=d},
ra:function ra(d,e){this.a=d
this.b=e},
rb:function rb(d,e){this.a=d
this.b=e},
r6:function r6(d){this.a=d},
ib:function ib(d,e){this.a=d
this.b=e},
o9:function o9(d,e){this.a=d
this.b=e},
o8:function o8(d,e){this.a=d
this.b=e},
o7:function o7(d,e,f){this.a=d
this.b=e
this.c=f},
o6:function o6(d,e,f){this.a=d
this.b=e
this.c=f},
hw:function hw(d,e,f){this.c=d
this.d=e
this.$ti=f},
i9:function i9(d,e){var _=this
_.a=d
_.c=_.b=null
_.$ti=e},
rn:function rn(d,e){this.a=d
this.b=e},
ro:function ro(d,e){this.a=d
this.b=e},
rm:function rm(d,e,f){this.a=d
this.b=e
this.c=f},
iG:function iG(d,e){this.a=d
this.$ti=e},
e9:function e9(){},
fv:function fv(){},
rU:function rU(d){this.a=d},
rT:function rT(d){this.a=d},
ls:function ls(){},
dA:function dA(d,e,f,g,h){var _=this
_.a=null
_.b=0
_.c=null
_.d=d
_.e=e
_.f=f
_.r=g
_.$ti=h},
dE:function dE(d,e){this.a=d
this.$ti=e},
ee:function ee(d,e,f,g,h,i,j){var _=this
_.w=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i
_.r=_.f=null
_.$ti=j},
ln:function ln(){},
r1:function r1(d){this.a=d},
r0:function r0(d){this.a=d},
bM:function bM(d,e,f,g){var _=this
_.c=d
_.a=e
_.b=f
_.$ti=g},
fj:function fj(){},
rd:function rd(d,e,f){this.a=d
this.b=e
this.c=f},
rc:function rc(d){this.a=d},
iE:function iE(){},
cU:function cU(){},
ef:function ef(d,e){this.b=d
this.a=null
this.$ti=e},
i3:function i3(d,e){this.b=d
this.c=e
this.a=null},
lC:function lC(){},
bL:function bL(d){var _=this
_.a=0
_.c=_.b=null
_.$ti=d},
rO:function rO(d,e){this.a=d
this.b=e},
fk:function fk(d,e){var _=this
_.a=1
_.b=d
_.c=null
_.$ti=e},
i7:function i7(d){this.$ti=d},
wa(d,e,f){var w=B.eQ(e,f)
w.ly(d)
return w},
BC(d,e){return new A.ep(d,d.a,d.c,e.h("ep<0>"))},
Az(d){return 8},
eY:function eY(d){var _=this
_.b=_.a=0
_.c=null
_.$ti=d},
ep:function ep(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=null
_.d=f
_.e=!1
_.$ti=g},
cp:function cp(){},
cV:function cV(){},
eg:function eg(d,e,f){var _=this
_.c=d
_.d=e
_.b=_.a=null
_.$ti=f},
i5:function i5(d){this.b=this.a=null
this.$ti=d},
dU:function dU(d,e){this.a=d
this.b=0
this.$ti=e},
i4:function i4(d,e,f){var _=this
_.a=d
_.b=e
_.c=null
_.$ti=f},
eZ:function eZ(d,e){var _=this
_.a=d
_.d=_.c=_.b=0
_.$ti=e},
ie:function ie(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=null
_.$ti=h},
w2(d){return D.bb.k(0,d.toLowerCase())},
mW:function mW(){},
lv:function lv(d,e){this.a=d
this.b=e
this.c=0},
uV(){var w,v,u=A.AH()
if(u==null)throw B.d(B.a4("'Uri.base' is not supported"))
w=$.x0
if(w!=null&&u===$.x_)return w
v=B.aH(u)
$.x0=v
$.x_=u
return v},
zQ(d,e){var w=A.AM(d,e,1,0,0,0,0,0,!0)
return new A.bz(w==null?new A.nE(d,e,1,0,0,0,0,0).$0():w,0,!0)},
zS(d,e,f){var w="microsecond"
if(e<0||e>999)throw B.d(B.aj(e,0,999,w,null))
if(d<-864e13||d>864e13)throw B.d(B.aj(d,-864e13,864e13,"millisecondsSinceEpoch",null))
if(d===864e13&&e!==0)throw B.d(B.cj(e,w,"Time including microseconds is outside valid range"))
B.ew(f,"isUtc",x.y)
return d},
w1(d){var w=Math.abs(d),v=d<0?"-":""
if(w>=1000)return""+d
if(w>=100)return v+"0"+w
if(w>=10)return v+"00"+w
return v+"000"+w},
zR(d){var w=Math.abs(d),v=d<0?"-":"+"
if(w>=1e5)return v+w
return v+"0"+w},
nF(d){if(d>=100)return""+d
if(d>=10)return"0"+d
return"00"+d},
cF(d){if(d>=10)return""+d
return"0"+d},
nN(d,e){return new B.b1(1e6*e+864e8*d)},
aQ(d){var w=null
return new B.f4(w,w,!1,w,w,d)},
wZ(d){var w,v=null,u=new B.as(""),t=B.a([-1],x.lC)
A.Bf(v,v,v,u,t)
C.b.m(t,u.a.length)
u.a+=","
A.Be(256,C.m.bm(d),u)
w=u.a
return new B.ld(w.charCodeAt(0)==0?w:w,t,v).gby()},
aT(d,e,f,g){var w,v,u,t,s,r,q,p,o=null
g=g==null?"":B.t2(g,0,g.length)
w=B.xs(o,0,0)
d=B.xp(d,0,d==null?0:d.length,!1)
v=B.xr(o,0,0,o)
u=B.xo(o,0,0)
t=B.t1(o,g)
s=g==="file"
if(d==null)r=w.length!==0||t!=null||s
else r=!1
if(r)d=""
r=d==null
q=!r
e=B.xq(e,0,e==null?0:e.length,f,g,q)
p=g.length===0
if(p&&r&&!C.a.G(e,"/"))e=B.v6(e,!p||q)
else e=B.eu(e)
return B.iQ(g,w,r&&C.a.G(e,"//")?"":d,t,e,v,u)},
xk(d,e){return e?A.C3(d,!1):A.C2(d,!1)},
C2(d,e){var w=null,v=B.a(d.split("/"),x.s)
if(C.a.G(d,"/"))return A.aT(w,w,v,"file")
else return A.aT(w,w,v,w)},
C3(d,e){var w,v,u,t,s,r="\\",q=null,p="file"
if(C.a.G(d,"\\\\?\\"))if(C.a.O(d,"UNC\\",4))d=C.a.aS(d,0,7,r)
else{d=C.a.K(d,4)
w=d.length
v=!0
if(w>=3){if(1>=w)return B.b(d,1)
if(d.charCodeAt(1)===58){if(2>=w)return B.b(d,2)
w=d.charCodeAt(2)!==92}else w=v}else w=v
if(w)throw B.d(B.cj(d,"path","Windows paths with \\\\?\\ prefix must be absolute"))}else d=B.bh(d,"/",r)
w=d.length
if(w>1&&d.charCodeAt(1)===58){if(0>=w)return B.b(d,0)
B.BY(d.charCodeAt(0),!0)
if(w!==2){if(2>=w)return B.b(d,2)
w=d.charCodeAt(2)!==92}else w=!0
if(w)throw B.d(B.cj(d,"path","Windows paths with drive letter must be absolute"))
u=B.a(d.split(r),x.s)
B.t_(u,!0,1)
return A.aT(q,q,u,p)}if(C.a.G(d,r))if(C.a.O(d,r,1)){t=C.a.aN(d,r,2)
w=t<0
s=w?C.a.K(d,2):C.a.p(d,2,t)
u=B.a((w?"":C.a.K(d,t+1)).split(r),x.s)
B.t_(u,!0,0)
return A.aT(s,q,u,p)}else{u=B.a(d.split(r),x.s)
B.t_(u,!0,0)
return A.aT(q,q,u,p)}else{u=B.a(d.split(r),x.s)
B.t_(u,!0,0)
return A.aT(q,q,u,q)}},
Bf(d,e,f,g,h){g.a=g.a},
Be(d,e,f){var w,v,u,t,s,r="0123456789ABCDEF"
for(w=e.length,v=0,u=0;u<w;++u){t=e[u]
v|=t
if(t<128&&("\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\u03f6\x00\u0404\u03f4 \u03f4\u03f6\u01f6\u01f6\u03f6\u03fc\u01f4\u03ff\u03ff\u0584\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u05d4\u01f4\x00\u01f4\x00\u0504\u05c4\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0400\x00\u0400\u0200\u03f7\u0200\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u03ff\u0200\u0200\u0200\u03f7\x00".charCodeAt(t)&d)!==0){s=B.be(t)
f.a+=s}else{s=B.be(37)
f.a+=s
s=t>>>4
if(!(s<16))return B.b(r,s)
s=B.be(r.charCodeAt(s))
f.a+=s
s=B.be(r.charCodeAt(t&15))
f.a+=s}}if((v&4294967040)!==0)for(u=0;u<w;++u){t=e[u]
if(t>255)throw B.d(B.cj(t,"non-byte value",null))}},
nE:function nE(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
bz:function bz(d,e,f){this.a=d
this.b=e
this.c=f},
kr:function kr(d){this.a=d},
Ci(d,e,f,g,h){x.gY.a(d)
B.ax(h)
if(h>=3)return d.$3(e,f,g)
if(h===2)return d.$2(e,f)
if(h===1)return d.$1(e)
return d.$0()},
xV(d){return d==null||B.ts(d)||typeof d=="number"||typeof d=="string"||x.jx.b(d)||x.ev.b(d)||x.nn.b(d)||x.m6.b(d)||x.hM.b(d)||x.bW.b(d)||x.mC.b(d)||x.pk.b(d)||x.kI.b(d)||x.lo.b(d)||x.fW.b(d)},
vo(d){if(A.xV(d))return d
return new A.u3(new B.ia(x.mp)).$1(d)},
vq(d,e){var w=new B.z($.D,e.h("z<0>")),v=new B.bv(w,e.h("bv<0>"))
d.then(B.ch(new A.ud(v,e),1),B.ch(new A.ue(v),1))
return w},
u3:function u3(d){this.a=d},
ud:function ud(d,e){this.a=d
this.b=e},
ue:function ue(d){this.a=d},
yo(d,e,f){B.vg(f,x.cZ,"T","max")
return Math.max(f.a(d),f.a(e))},
rH:function rH(d){this.a=d},
a1:function a1(){},
mY:function mY(d){this.a=d},
mZ:function mZ(d,e){this.a=d
this.b=e},
n_:function n_(d){this.a=d},
zC(){return new A.cD(null)},
cD:function cD(d){this.a=d},
ja:function ja(){this.c=this.a=null},
mF:function mF(){},
mG:function mG(){},
eH:function eH(d,e,f){this.c=d
this.d=e
this.a=f},
mV:function mV(d){this.a=d},
eL:function eL(d,e){this.c=d
this.a=e},
jH:function jH(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
kk:function kk(d,e,f){this.c=d
this.d=e
this.a=f},
a2:function a2(d,e,f){this.c=d
this.d=e
this.a=f},
dx:function dx(d,e,f){this.c=d
this.d=e
this.a=f},
jC:function jC(d){this.a=d},
ny:function ny(d){this.a=d},
nz:function nz(d){this.a=d},
wc(d){switch(d){case"en":return"images/flags/us.svg"
case"vi":return"images/flags/vn.svg"
case"ja":return"images/flags/jp.svg"
case"ko":return"images/flags/kr.svg"
default:return"images/flags/default.svg"}},
e_:function e_(d){this.a=d},
jT:function jT(d){var _=this
_.d=d
_.e=!1
_.c=_.a=_.f=null},
oo:function oo(d){this.a=d},
on:function on(d){this.a=d},
oi:function oi(){},
og:function og(d){this.a=d},
oh:function oh(d){this.a=d},
om:function om(d){this.a=d},
oj:function oj(d,e,f){this.a=d
this.b=e
this.c=f},
ok:function ok(){},
of:function of(d){this.a=d},
ol:function ol(d){this.a=d},
oe:function oe(d){this.a=d},
by:function by(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
jr:function jr(){this.d=!1
this.c=this.a=null},
n1:function n1(d){this.a=d},
n0:function n0(d){this.a=d},
js:function js(d){this.a=d},
n2:function n2(d){this.a=d},
eK:function eK(d){this.a=d},
jA:function jA(){var _=this
_.r=_.f=_.e=_.d=$
_.w=!1
_.c=_.a=_.x=null},
np:function np(d){this.a=d},
nq:function nq(d){this.a=d},
nr:function nr(d){this.a=d},
no:function no(d){this.a=d},
ns:function ns(d){this.a=d},
nt:function nt(d){this.a=d},
nn:function nn(d){this.a=d},
nm:function nm(d,e){this.a=d
this.b=e},
nj:function nj(d){this.a=d},
ni:function ni(d,e){this.a=d
this.b=e},
nv:function nv(d){this.a=d},
nu:function nu(d,e){this.a=d
this.b=e},
nl:function nl(d){this.a=d},
nk:function nk(d,e){this.a=d
this.b=e},
nh:function nh(d){this.a=d},
nf:function nf(d){this.a=d},
ng:function ng(d){this.a=d},
ne:function ne(d){this.a=d},
jD:function jD(d){this.a=d},
nD:function nD(){},
h8:function h8(d){this.a=d},
jQ:function jQ(d){this.a=d},
jS:function jS(d){this.a=d},
od:function od(){},
oT(d,e,f,g,h,i,j,k,l){return new A.k2(d,f,l,h,k,g,i,null)},
k2:function k2(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.x=h
_.y=i
_.Q=j
_.a=k},
ki:function ki(d){this.a=d},
cO:function cO(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
kt:function kt(d){this.a=d},
kA:function kA(d){this.a=d},
fe:function fe(d){this.a=d},
l7:function l7(){this.d=!1
this.c=this.a=null},
qG:function qG(d){this.a=d},
qF:function qF(d){this.a=d},
wk(){var w,v,u
try{w=B.r(B.o(B.o(b.G.window).navigator).language).toLowerCase()
if(J.up(w,"vi"))return"vi"
if(J.up(w,"ja"))return"ja"
if(J.up(w,"ko"))return"ko"
return"en"}catch(u){v=B.G(u)
B.bp("Error detecting client language: "+B.m(v))
return"en"}},
wn(d,e){var w,v,u,t,s=$.vu()
if(!s){B.bp("Skipping saveLanguage due to no cookie consent")
return}try{w=new A.bz(Date.now(),0,!1).fJ(A.nN(365,0).a).iK()
v="lang="+d+"; expires="+w.iH()+"; path=/"
B.o(b.G.document).cookie=v}catch(t){u=B.G(t)
B.bp("Error saving language to cookie: "+B.m(u))}},
As(){var w,v,u,t,s,r,q,p,o=$.vu()
if(!o){B.bp("No cookie consent or not client, skipping cookie read")
return null}try{o=x.s
w=B.a(B.r(B.o(b.G.document).cookie).split(";"),o)
for(s=w,r=s.length,q=0;q<s.length;s.length===r||(0,B.P)(s),++q){v=s[q]
u=B.a(J.vN(v).split("="),o)
if(J.dd(u,0)==="lang"&&J.aM(u)>1){o=J.dd(u,1)
return o}}}catch(p){t=B.G(p)
B.bp("Error reading language from cookie: "+B.m(t))}return null},
wo(d,e){var w,v,u,t,s,r,q,p,o=""+d
B.bp("setCookieConsent called with consent: "+o)
$.Aq=d
s=$.ul().gdh()
r=A.hC(e,!1)
q=x.b
s=q.a(A.aW.prototype.gu.call(r)).d.ds(s,x.mr)
s.cH(s.$ti.c.a(d))
try{w=new A.bz(Date.now(),0,!1).fJ(A.nN(365,0).a).iK()
v="cookie_consent="+o+"; expires="+w.iH()+"; path=/"
o=b.G
B.o(o.document).cookie=v
s=x.kP
if(!d){B.bp("Clearing language cookie due to Decline")
B.o(o.document).cookie="lang=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/"
o=$.bi().gdh()
r=A.hC(e,!1)
s=q.a(A.aW.prototype.gu.call(r)).d.ds(o,s)
s.cH(s.$ti.c.a("en"))}else{u=A.wk()
A.wn(u,e)
o=$.bi().gdh()
r=A.hC(e,!1)
s=q.a(A.aW.prototype.gu.call(r)).d.ds(o,s)
s.cH(s.$ti.c.a(u))}}catch(p){t=B.G(p)
B.bp("Error saving cookie consent or language: "+B.m(t))}},
Ar(){var w,v,u,t,s,r,q,p,o
try{s=x.s
w=B.a(B.r(B.o(b.G.document).cookie).split(";"),s)
for(r=w,q=r.length,p=0;p<r.length;r.length===q||(0,B.P)(r),++p){v=r[p]
u=B.a(J.vN(v).split("="),s)
if(J.dd(u,0)==="cookie_consent"&&J.aM(u)>1){s=J.dd(u,1)
return s==="true"}}}catch(o){t=B.G(o)
B.bp("Error reading cookie consent: "+B.m(t))}return!1},
wm(){var w,v,u,t,s,r,q,p,o,n,m,l='key,en,vi,ko,ja,Note\nheader_home,Home,Trang ch\u1ee7,\ud648\ud398\uc774\uc9c0,\u30db\u30fc\u30e0,\nheader_about,About Us,V\u1ec1 ch\xfang t\xf4i,\ud68c\uc0ac \uc18c\uac1c,\u79c1\u305f\u3061\u306b\u3064\u3044\u3066,\nheader_services,Services,D\u1ecbch v\u1ee5,\uc11c\ube44\uc2a4,\u30b5\u30fc\u30d3\u30b9,\nheader_contact,Contact,Li\xean h\u1ec7,\uc5f0\ub77d\ucc98,\u304a\u554f\u3044\u5408\u308f\u305b,\nheader_careers,Careers,Tuy\u1ec3n d\u1ee5ng,\ucc44\uc6a9,\u63a1\u7528\u60c5\u5831,\nheader_home_page_title,Innovating the Future with Cross Tech & Edu,\u0110\u1ed5i m\u1edbi t\u01b0\u01a1ng lai c\xf9ng Cross Tech & Edu,\ud06c\ub85c\uc2a4 \uae30\uc220\uacfc \uad50\uc721\uc73c\ub85c \ubbf8\ub798\ub97c \ud601\uc2e0\ud558\ub2e4,\u30af\u30ed\u30b9\u30c6\u30c3\u30af\u3068\u6559\u80b2\u3067\u672a\u6765\u3092\u9769\u65b0\u3059\u308b,\nheader_home_page_subtitle,We accompany businesses with advanced solutions for sustainable development in the digital world,Ch\xfang t\xf4i \u0111\u1ed3ng h\xe0nh c\xf9ng doanh nghi\u1ec7p v\u1edbi c\xe1c gi\u1ea3i ph\xe1p ti\xean ti\u1ebfn \u0111\u1ec3 ph\xe1t tri\u1ec3n b\u1ec1n v\u1eefng trong th\u1ebf gi\u1edbi s\u1ed1,\uc6b0\ub9ac\ub294 \ub514\uc9c0\ud138 \uc138\uacc4\uc5d0\uc11c \uc9c0\uc18d \uac00\ub2a5\ud55c \ubc1c\uc804\uc744 \uc704\ud55c \ucca8\ub2e8 \uc194\ub8e8\uc158\uc73c\ub85c \uae30\uc5c5\uacfc \ud568\uaed8\ud569\ub2c8\ub2e4,\u79c1\u305f\u3061\u306f\u30c7\u30b8\u30bf\u30eb\u793e\u4f1a\u3067\u6301\u7d9a\u53ef\u80fd\u306a\u767a\u5c55\u3092\u5b9f\u73fe\u3059\u308b\u305f\u3081\u3001\u5148\u9032\u7684\u306a\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u3067\u4f01\u696d\u3068\u5171\u306b\u6b69\u3093\u3067\u3044\u307e\u3059,\nheader_home_page_button,Discover Our Solutions,Kh\xe1m ph\xe1 Gi\u1ea3i ph\xe1p c\u1ee7a Ch\xfang t\xf4i,\uc6b0\ub9ac\uc758 \uc194\ub8e8\uc158\uc744 \ud655\uc778\ud558\uc138\uc694,\u79c1\u305f\u3061\u306e\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u3092\u63a2\u308b,\nprocess_consultation_title,Consulting,T\u01b0 v\u1ea5n,\ucee8\uc124\ud305,\u30b3\u30f3\u30b5\u30eb\u30c6\u30a3\u30f3\u30b0,\nprocess_consultation_content,"We offer in-depth consulting services to clearly identify needs, optimize solutions, and guide appropriate technology choices for your software development project.","Ch\xfang t\xf4i cung c\u1ea5p d\u1ecbch v\u1ee5 t\u01b0 v\u1ea5n chuy\xean s\xe2u, gi\xfap x\xe1c \u0111\u1ecbnh r\xf5 nhu c\u1ea7u, t\u1ed1i \u01b0u gi\u1ea3i ph\xe1p v\xe0 \u0111\u1ecbnh h\u01b0\u1edbng c\xf4ng ngh\u1ec7 ph\xf9 h\u1ee3p cho d\u1ef1 \xe1n ph\xe1t tri\u1ec3n ph\u1ea7n m\u1ec1m c\u1ee7a b\u1ea1n.","\uc6b0\ub9ac\ub294 \uadc0\ud558\uc758 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uac1c\ubc1c \ud504\ub85c\uc81d\ud2b8\uc5d0 \uc801\ud569\ud55c \uae30\uc220 \ubc29\ud5a5\uc744 \uc81c\uc2dc\ud558\uace0, \uc694\uad6c \uc0ac\ud56d\uc744 \uba85\ud655\ud788 \ud558\uba70, \uc194\ub8e8\uc158\uc744 \ucd5c\uc801\ud654\ud558\ub294 \uc2ec\uce35 \ucee8\uc124\ud305 \uc11c\ube44\uc2a4\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4.",\u79c1\u305f\u3061\u306f\u3001\u30cb\u30fc\u30ba\u3092\u660e\u78ba\u306b\u3057\u3001\u6700\u9069\u306a\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u3092\u63d0\u6848\u3057\u3001\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u958b\u767a\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u9069\u3057\u305f\u6280\u8853\u306e\u65b9\u5411\u6027\u3092\u5c0e\u304f\u3001\u5c02\u9580\u7684\u306a\u30b3\u30f3\u30b5\u30eb\u30c6\u30a3\u30f3\u30b0\u30b5\u30fc\u30d3\u30b9\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002,\nprocess_research_title,Business Analysis,Ph\xe2n t\xedch nghi\u1ec7p v\u1ee5,\uc5c5\ubb34 \ubd84\uc11d,\u696d\u52d9\u5206\u6790,\nprocess_research_content,We accompany you in detailed business analysis to understand the processes and identify core requirements for the platform.,"Ch\xfang t\xf4i \u0111\u1ed3ng h\xe0nh c\xf9ng c\xe1c b\u1ea1n \u0111\u1ec3 ph\xe2n t\xedch nghi\u1ec7p v\u1ee5 m\u1ed9t c\xe1ch chi ti\u1ebft nh\u1eb1m hi\u1ec3u r\xf5 quy tr\xecnh, x\xe1c \u0111\u1ecbnh y\xeau c\u1ea7u c\u1ed1t l\xf5i cho n\u1ec1n t\u1ea3ng.",\uc6b0\ub9ac\ub294 \uc5ec\ub7ec\ubd84\uacfc \ud568\uaed8 \uc5c5\ubb34\ub97c \uc138\ubd80\uc801\uc73c\ub85c \ubd84\uc11d\ud558\uc5ec \ud504\ub85c\uc138\uc2a4\ub97c \uc774\ud574\ud558\uace0 \ud50c\ub7ab\ud3fc\uc758 \ud575\uc2ec \uc694\uad6c\uc0ac\ud56d\uc744 \uc2dd\ubcc4\ud569\ub2c8\ub2e4.,\u79c1\u305f\u3061\u306f\u7686\u69d8\u3068\u5171\u306b\u696d\u52d9\u3092\u8a73\u7d30\u306b\u5206\u6790\u3057\u3001\u30d7\u30ed\u30bb\u30b9\u3092\u7406\u89e3\u3057\u3066\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306b\u5fc5\u8981\u306a\u6838\u5fc3\u8981\u4ef6\u3092\u7279\u5b9a\u3057\u307e\u3059\u3002,\nprocess_implementation_title,Solution Proposal,\u0110\u1ec1 xu\u1ea5t gi\u1ea3i ph\xe1p,\uc194\ub8e8\uc158 \uc81c\uc548,\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u63d0\u6848,\nprocess_implementation_content,Our team executes strategies accurately to ensure all elements are implemented for optimal results.,"\u0110\u1ed9i ng\u0169 c\u1ee7a ch\xfang t\xf4i th\u1ef1c hi\u1ec7n chi\u1ebfn l\u01b0\u1ee3c m\u1ed9t c\xe1ch ch\xednh x\xe1c, \u0111\u1ea3m b\u1ea3o m\u1ecdi y\u1ebfu t\u1ed1 \u0111\u01b0\u1ee3c tri\u1ec3n khai \u0111\u1ec3 \u0111\u1ea1t k\u1ebft qu\u1ea3 t\u1ed1i \u01b0u.",\uc6b0\ub9ac \ud300\uc740 \uc804\ub7b5\uc744 \uc815\ud655\ud558\uac8c \uc2e4\ud589\ud558\uc5ec \ubaa8\ub4e0 \uc694\uc18c\uac00 \ucd5c\uc801\uc758 \uacb0\uacfc\ub97c \ub0bc \uc218 \uc788\ub3c4\ub85d \uad6c\ud604\ud569\ub2c8\ub2e4.,\u79c1\u305f\u3061\u306e\u30c1\u30fc\u30e0\u306f\u6226\u7565\u3092\u6b63\u78ba\u306b\u5b9f\u884c\u3057\u3001\u3059\u3079\u3066\u306e\u8981\u7d20\u304c\u6700\u9069\u306a\u7d50\u679c\u3092\u5f97\u308b\u305f\u3081\u306b\u5c55\u958b\u3055\u308c\u308b\u3088\u3046\u306b\u3057\u307e\u3059\u3002,\nprocess_monitoring_title,Prototype Design,T\u1ea1o thi\u1ebft k\u1ebf m\u1eabu,\uc2dc\uc548 \ub514\uc790\uc778,\u30d7\u30ed\u30c8\u30bf\u30a4\u30d7\u8a2d\u8a08,\nprocess_monitoring_content,"We create intuitive mockups that simulate real user experiences, helping clients visualize the product and refine requirements before development.","Ch\xfang t\xf4i thi\u1ebft k\u1ebf m\u1eabu tr\u1ef1c quan, m\xf4 ph\u1ecfng tr\u1ea3i nghi\u1ec7m ng\u01b0\u1eddi d\xf9ng th\u1ef1c t\u1ebf, gi\xfap kh\xe1ch h\xe0ng d\u1ec5 h\xecnh dung s\u1ea3n ph\u1ea9m v\xe0 tinh ch\u1ec9nh y\xeau c\u1ea7u tr\u01b0\u1edbc khi b\u01b0\u1edbc v\xe0o giai \u0111o\u1ea1n ph\xe1t tri\u1ec3n ph\u1ea7n m\u1ec1m.",\uc6b0\ub9ac\ub294 \uc2e4\uc81c \uc0ac\uc6a9\uc790 \uacbd\ud5d8\uc744 \uc2dc\ubbac\ub808\uc774\uc158\ud55c \uc9c1\uad00\uc801\uc778 \uc2dc\uc548\uc744 \uc124\uacc4\ud558\uc5ec \uace0\uac1d\uc774 \uc81c\ud488\uc744 \uc2dc\uac01\ud654\ud558\uace0 \uc694\uad6c\uc0ac\ud56d\uc744 \uc870\uc815\ud560 \uc218 \uc788\ub3c4\ub85d \ub3d5\uc2b5\ub2c8\ub2e4.,\u79c1\u305f\u3061\u306f\u76f4\u611f\u7684\u306a\u30e2\u30c3\u30af\u30a2\u30c3\u30d7\u3092\u4f5c\u6210\u3057\u3001\u5b9f\u969b\u306e\u30e6\u30fc\u30b6\u30fc\u4f53\u9a13\u3092\u30b7\u30df\u30e5\u30ec\u30fc\u30c8\u3057\u3066\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304c\u88fd\u54c1\u3092\u8996\u899a\u5316\u3057\u3001\u8981\u4ef6\u3092\u8abf\u6574\u3067\u304d\u308b\u3088\u3046\u652f\u63f4\u3057\u307e\u3059\u3002,\nprocess_reporting_title,Product Development,Ph\xe1t tri\u1ec3n s\u1ea3n ph\u1ea9m,\uc81c\ud488 \uac1c\ubc1c,\u88fd\u54c1\u958b\u767a,\nprocess_reporting_content,"We develop mobile and web software following standard processes, ensuring code quality, progress, and scalability.","Ch\xfang t\xf4i tri\u1ec3n khai ph\xe1t tri\u1ec3n ph\u1ea7n m\u1ec1m mobile v\xe0 web theo quy tr\xecnh chu\u1ea9n, \u0111\u1ea3m b\u1ea3o ch\u1ea5t l\u01b0\u1ee3ng m\xe3 ngu\u1ed3n, ti\u1ebfn \u0111\u1ed9 v\xe0 kh\u1ea3 n\u0103ng m\u1edf r\u1ed9ng c\u1ee7a s\u1ea3n ph\u1ea9m.","\uc6b0\ub9ac\ub294 \ud45c\uc900 \ud504\ub85c\uc138\uc2a4\uc5d0 \ub530\ub77c \ubaa8\ubc14\uc77c \ubc0f \uc6f9 \uc18c\ud504\ud2b8\uc6e8\uc5b4\ub97c \uac1c\ubc1c\ud558\uba70, \ucf54\ub4dc \ud488\uc9c8\uacfc \uc77c\uc815, \ud655\uc7a5\uc131\uc744 \ubcf4\uc7a5\ud569\ub2c8\ub2e4.",\u79c1\u305f\u3061\u306f\u6a19\u6e96\u7684\u306a\u30d7\u30ed\u30bb\u30b9\u306b\u5f93\u3063\u3066\u30e2\u30d0\u30a4\u30eb\u304a\u3088\u3073\u30a6\u30a7\u30d6\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u3092\u958b\u767a\u3057\u3001\u30b3\u30fc\u30c9\u54c1\u8cea\u3001\u9032\u6357\u3001\u304a\u3088\u3073\u62e1\u5f35\u6027\u3092\u78ba\u4fdd\u3057\u307e\u3059\u3002,\nprocess_improvement_title,Monitoring and Improvement,Theo d\xf5i v\xe0 c\u1ea3i ti\u1ebfn,\ubaa8\ub2c8\ud130\ub9c1 \ubc0f \uac1c\uc120,\u76e3\u8996\u3068\u6539\u5584,\nprocess_improvement_content,"We continuously monitor system performance and user feedback to promptly improve, upgrade, and ensure stable operation that meets real-world needs.","Ch\xfang t\xf4i li\xean t\u1ee5c theo d\xf5i hi\u1ec7u su\u1ea5t h\u1ec7 th\u1ed1ng v\xe0 ph\u1ea3n h\u1ed3i ng\u01b0\u1eddi d\xf9ng \u0111\u1ec3 k\u1ecbp th\u1eddi c\u1ea3i ti\u1ebfn, n\xe2ng c\u1ea5p ph\u1ea7n m\u1ec1m, c\u1eadp nh\u1eadt c\xf4ng ngh\u1ec7, \u0111\u1ea3m b\u1ea3o v\u1eadn h\xe0nh \u1ed5n \u0111\u1ecbnh v\xe0 \u0111\xe1p \u1ee9ng nhu c\u1ea7u th\u1ef1c ti\u1ec5n.",\uc6b0\ub9ac\ub294 \uc2dc\uc2a4\ud15c \uc131\ub2a5\uacfc \uc0ac\uc6a9\uc790 \ud53c\ub4dc\ubc31\uc744 \uc9c0\uc18d\uc801\uc73c\ub85c \ubaa8\ub2c8\ud130\ub9c1\ud558\uc5ec \uc18c\ud504\ud2b8\uc6e8\uc5b4\ub97c \uac1c\uc120\ud558\uace0 \uc548\uc815\uc801\uc778 \uc6b4\uc601\uc744 \ubcf4\uc7a5\ud569\ub2c8\ub2e4.,\u79c1\u305f\u3061\u306f\u30b7\u30b9\u30c6\u30e0\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u3068\u30e6\u30fc\u30b6\u30fc\u306e\u30d5\u30a3\u30fc\u30c9\u30d0\u30c3\u30af\u3092\u7d99\u7d9a\u7684\u306b\u76e3\u8996\u3057\u3001\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u3092\u8fc5\u901f\u306b\u6539\u5584\u30fb\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3057\u3066\u5b89\u5b9a\u3057\u305f\u904b\u7528\u3092\u4fdd\u8a3c\u3057\u307e\u3059\u3002,\nstep7_label,Reporting and Communication,B\xe1o c\xe1o v\xe0 trao \u0111\u1ed5i,\ubcf4\uace0 \ubc0f \ucee4\ubba4\ub2c8\ucf00\uc774\uc158,\u5831\u544a\u3068\u30b3\u30df\u30e5\u30cb\u30b1\u30fc\u30b7\u30e7\u30f3,\nstep7_content,"We organize internal meetings to review the development process and hold regular, transparent reviews with clients to ensure alignment and timely adjustments according to project goals.","Ch\xfang t\xf4i t\u1ed5 ch\u1ee9c c\xe1c cu\u1ed9c h\u1ecdp n\u1ed9i b\u1ed9 nh\xecn l\u1ea1i qu\xe1 tr\xecnh ph\xe1t tri\u1ec3n, review v\u1edbi kh\xe1ch h\xe0ng \u0111\u1ecbnh k\u1ef3, m\u1ed9t c\xe1ch minh b\u1ea1ch, nh\u1eb1m \u0111\u1ea3m b\u1ea3o s\u1ef1 th\u1ed1ng nh\u1ea5t v\xe0 \u0111i\u1ec1u ch\u1ec9nh k\u1ecbp th\u1eddi theo m\u1ee5c ti\xeau d\u1ef1 \xe1n.",\uc6b0\ub9ac\ub294 \ub0b4\ubd80 \ud68c\uc758\ub97c \uc870\uc9c1\ud558\uc5ec \uac1c\ubc1c \uacfc\uc815\uc744 \ub418\ub3cc\uc544\ubcf4\uace0 \uace0\uac1d\uacfc\uc758 \uc815\uae30\uc801\uc778 \ub9ac\ubdf0\ub97c \ud22c\uba85\ud558\uac8c \uc9c4\ud589\ud558\uc5ec \ud504\ub85c\uc81d\ud2b8 \ubaa9\ud45c\uc5d0 \ub530\ub77c \uc77c\uad00\uc131\uacfc \uc801\uc2dc\uc5d0 \uc870\uc815\uc774 \uc774\ub8e8\uc5b4\uc9c0\ub3c4\ub85d \ud569\ub2c8\ub2e4.,\u79c1\u305f\u3061\u306f\u958b\u767a\u30d7\u30ed\u30bb\u30b9\u3092\u632f\u308a\u8fd4\u308b\u793e\u5185\u4f1a\u8b70\u3084\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3068\u306e\u5b9a\u671f\u7684\u304b\u3064\u900f\u660e\u306a\u30ec\u30d3\u30e5\u30fc\u3092\u5b9f\u65bd\u3057\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u76ee\u6a19\u306b\u6cbf\u3063\u305f\u4e00\u8cab\u6027\u3068\u8fc5\u901f\u306a\u8abf\u6574\u3092\u78ba\u4fdd\u3057\u307e\u3059\u3002,\nstep8_label,Continuous Product Release,Ph\xe1t h\xe0nh s\u1ea3n ph\u1ea9m li\xean t\u1ee5c,\uc9c0\uc18d\uc801\uc778 \uc81c\ud488 \ubc30\ud3ec,\u7d99\u7d9a\u7684\u306a\u88fd\u54c1\u30ea\u30ea\u30fc\u30b9,\nstep8_content,"We apply continuous deployment methods to update software quickly, minimize risks, and accelerate delivery to users.","Ch\xfang t\xf4i \xe1p d\u1ee5ng ph\u01b0\u01a1ng ph\xe1p tri\u1ec3n khai li\xean t\u1ee5c \u0111\u1ec3 c\u1eadp nh\u1eadt ph\u1ea7n m\u1ec1m nhanh ch\xf3ng, gi\u1ea3m thi\u1ec3u r\u1ee7i ro v\xe0 t\u0103ng t\u1ed1c \u0111\u1ed9 \u0111\u01b0a s\u1ea3n ph\u1ea9m \u0111\u1ebfn tay ng\u01b0\u1eddi d\xf9ng.",\uc6b0\ub9ac\ub294 \uc18c\ud504\ud2b8\uc6e8\uc5b4\ub97c \ube60\ub974\uac8c \uc5c5\ub370\uc774\ud2b8\ud558\uace0 \uc704\ud5d8\uc744 \ucd5c\uc18c\ud654\ud558\uba70 \uc81c\ud488 \ucd9c\uc2dc \uc18d\ub3c4\ub97c \ub192\uc774\uae30 \uc704\ud574 \uc9c0\uc18d\uc801\uc778 \ubc30\ud3ec \ubc29\uc2dd\uc744 \uc801\uc6a9\ud569\ub2c8\ub2e4.,\u79c1\u305f\u3061\u306f\u7d99\u7d9a\u7684\u30c7\u30d7\u30ed\u30a4\u624b\u6cd5\u3092\u5c0e\u5165\u3057\u3001\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u3092\u8fc5\u901f\u306b\u66f4\u65b0\u3057\u3001\u30ea\u30b9\u30af\u3092\u6700\u5c0f\u9650\u306b\u6291\u3048\u3001\u30e6\u30fc\u30b6\u30fc\u3078\u306e\u63d0\u4f9b\u3092\u52a0\u901f\u3055\u305b\u307e\u3059\u3002,\nour_service_seo_title,Mobile App Development,Ph\xe1t tri\u1ec3n \u1ee9ng d\u1ee5ng mobile,\ubaa8\ubc14\uc77c \uc571 \uac1c\ubc1c,\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u958b\u767a,\nour_service_seo_content,"Flutter, React, Swift, Kotlin","Flutter, React, Swift, Kotlin","Flutter, React, Swift, Kotlin",Flutter\u3001React\u3001Swift\u3001Kotlin,\nour_service_ppc_title,Web App Development,Ph\xe1t tri\u1ec3n \u1ee9ng d\u1ee5ng web,\uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uac1c\ubc1c,\u30a6\u30a7\u30d6\u30a2\u30d7\u30ea\u958b\u767a,\nour_service_ppc_content,"Flutter, React, NodeJs, PHP...","Flutter, React, NodeJs, PHP...","Flutter, React, NodeJs, PHP...",Flutter\u3001React\u3001NodeJs\u3001PHP...,\nour_service_smm_title,IT Human Resource Provider,Cung \u1ee9ng nh\xe2n l\u1ef1c IT,IT \uc778\ub825 \uacf5\uae09,IT\u4eba\u6750\u63d0\u4f9b,\nour_service_smm_content,Onsite model in Hanoi,H\xecnh th\u1ee9c onsite t\u1ea1i H\xe0 N\u1ed9i,\ud558\ub178\uc774 \ud604\uc7a5 \ud30c\uacac \ubc29\uc2dd,\u30cf\u30ce\u30a4\u3067\u306e\u30aa\u30f3\u30b5\u30a4\u30c8\u5f62\u5f0f,\nour_service_email_title,Human Resource Training,\u0110\xe0o t\u1ea1o nh\xe2n l\u1ef1c,\uc778\uc801 \uc790\uc6d0 \uad50\uc721,\u4eba\u6750\u80b2\u6210,\nour_service_email_content,"Coding, English, Presentation, Leadership...","Coding, English, Presentation, Leadership,...","\ucf54\ub529, \uc601\uc5b4, \ud504\ub808\uc820\ud14c\uc774\uc158, \ub9ac\ub354\uc2ed...",\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u3001\u82f1\u8a9e\u3001\u30d7\u30ec\u30bc\u30f3\u30c6\u30fc\u30b7\u30e7\u30f3\u3001\u30ea\u30fc\u30c0\u30fc\u30b7\u30c3\u30d7...,\nteam_member1_name,Quyen Anh Nguyen (Brian),Nguy\u1ec5n Quy\u1ec1n Anh (Brian),Nguy\u1ec5n Quy\u1ec1n Anh (Brian),Nguy\u1ec5n Quy\u1ec1n Anh (Brian),\nteam_member1_position,CEO and Founder,Gi\xe1m \u0111\u1ed1c \u0110i\u1ec1u h\xe0nh v\xe0 Nh\xe0 s\xe1ng l\u1eadp,CEO \ubc0f \ucc3d\ub9bd\uc790,CEO\u517c\u5275\u696d\u8005,\nteam_member1_content,"Graduated from Hanoi University of Science and Technology in Advanced programs, 10 years of experience in IT industry as full stack developer and work with multinational customers.","T\u1ed1t nghi\u1ec7p \u0110H B\xe1ch Khoa ch\u01b0\u01a1ng tr\xecnh ti\xean ti\u1ebfn, c\xf3 10 n\u0103m kinh nghi\u1ec7m trong ng\xe0nh IT v\xe0 l\xe0m vi\u1ec7c v\u1edbi c\xe1c kh\xe1ch h\xe0ng \u0111a qu\u1ed1c gia","\ud558\ub178\uc774 \uacfc\ud559 \uae30\uc220 \ub300\ud559\uad50 \uace0\uae09 \ud504\ub85c\uadf8\ub7a8 \uc878\uc5c5, IT \uc5c5\uacc4\uc5d0\uc11c \ud480\uc2a4\ud0dd \uac1c\ubc1c\uc790\ub85c 10\ub144 \uacbd\ub825 \ubc0f \ub2e4\uad6d\uc801 \uace0\uac1d\uacfc \ud611\uc5c5.",\u30cf\u30ce\u30a4\u5de5\u79d1\u5927\u5b66\u306e\u9ad8\u5ea6\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u5352\u696d\u3001\u30d5\u30eb\u30b9\u30bf\u30c3\u30af\u958b\u767a\u8005\u3068\u3057\u3066IT\u696d\u754c\u306710\u5e74\u306e\u7d4c\u9a13\u3092\u6301\u3061\u3001\u591a\u56fd\u7c4d\u306e\u9867\u5ba2\u3068\u5354\u529b\u3002,\nteam_member1_avatar,,,,,\nteam_member1_site,https://boxingnguyen.github.io/,https://boxingnguyen.github.io/,https://boxingnguyen.github.io/,https://boxingnguyen.github.io/,link website/ linkedin...\nteam_member2_name,Viet Tran,Viet Tran,Viet Tran,Viet Tran,\nteam_member2_position,CCO and co-founder,Gi\xe1m \u0111\u1ed1c Kinh doanh v\xe0 \u0111\u1ed3ng s\xe1ng l\u1eadp,\ucd5c\uace0\uc0ac\uc5c5\ucc45\uc784\uc790(CBO) \ubc0f \uacf5\ub3d9 \ucc3d\ub9bd\uc790,\u6700\u9ad8\u696d\u52d9\u8cac\u4efb\u8005\uff08CBO\uff09\u517c\u5171\u540c\u5275\u696d\u8005,\nteam_member2_content,"Master of Public Policy Fulbright University, expert on business and investment strategy","Th\u1ea1c s\u1ef9 ch\xednh s\xe1ch c\xf4ng \u0110H Full Brigh, chuy\xean gia v\u1ec1 chi\u1ebfn l\u01b0\u1ee3c kinh doanh v\xe0 \u0111\u1ea7u t\u01b0","\ud480\ube0c\ub77c\uc774\ud2b8 \ub300\ud559\uad50 \uacf5\uacf5\uc815\ucc45 \uc11d\uc0ac, \ube44\uc988\ub2c8\uc2a4 \uc804\ub7b5 \ubc0f \ud22c\uc790 \uc804\ubb38\uac00",\u30d5\u30eb\u30d6\u30e9\u30a4\u30c8\u5927\u5b66\u3067\u516c\u5171\u653f\u7b56\u306e\u4fee\u58eb\u53f7\u53d6\u5f97\u3001\u30d3\u30b8\u30cd\u30b9\u6226\u7565\u3068\u6295\u8cc7\u306e\u5c02\u9580\u5bb6,\nteam_member2_avatar,,,,,\nteam_member2_site,,,,,\nteam_member3_name,Ph\xf9ng Quang Huy,Ph\xf9ng Quang Huy,Ph\xf9ng Quang Huy,Ph\xf9ng Quang Huy,\nteam_member3_position,CTO,Gi\xe1m \u0111\u1ed1c c\xf4ng ngh\u1ec7,\ucd5c\uace0\uae30\uc220\ucc45\uc784\uc790(CTO),\u6700\u9ad8\u6280\u8853\u8cac\u4efb\u8005\uff08CTO\uff09,\nteam_member3_content,Specializes in web development and analytics with 12 years of experience,Chuy\xean v\u1ec1 ph\xe1t tri\u1ec3n web v\xe0 ph\xe2n t\xedch v\u1edbi 12 n\u0103m kinh nghi\u1ec7m,"\uc6f9 \uac1c\ubc1c \ubc0f \ubd84\uc11d \uc804\ubb38, 12\ub144 \uacbd\ub825 \ubcf4\uc720",\u30a6\u30a7\u30d6\u958b\u767a\u3068\u5206\u6790\u306e\u5c02\u9580\u5bb6\u3067\u300112\u5e74\u306e\u7d4c\u9a13\u3092\u6301\u3064,\nteam_member3_avatar,,,,,\nteam_member3_site,,,,,\nteam_member4_name,Bui Bao Phong,B\xf9i B\u1ea3o Phong,Bui Bao Phong,Bui Bao Phong,\nteam_member4_position,Full stack developer,Full stack developer,\ud480\uc2a4\ud0dd \uac1c\ubc1c\uc790,\u30d5\u30eb\u30b9\u30bf\u30c3\u30af\u958b\u767a\u8005,\nteam_member4_content,1 year of experience in web & mobile app development,1 n\u0103m kinh nghi\u1ec7m v\u1ec1 ph\xe1t tri\u1ec3n \u1ee9ng d\u1ee5ng web v\xe0 di \u0111\u1ed9ng,\ubaa8\ubc14\uc77c \uc571 \uac1c\ubc1c \uacbd\ub825 1\ub144,\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u958b\u767a\u306e\u7d4c\u9a131\u5e74,\nteam_member4_avatar,,,,,\nteam_member4_site,,,,,\nteam_member5_name,Tung Tran,T\xf9ng Tr\u1ea7n,Tung Tran,Tung Tran,\nteam_member5_position,Full stack developer,Full stack developer,\ud480\uc2a4\ud0dd \uac1c\ubc1c\uc790,\u30d5\u30eb\u30b9\u30bf\u30c3\u30af\u958b\u767a\u8005,\nteam_member5_content,3 years of experience in web & mobile app development,3 n\u0103m kinh nghi\u1ec7m v\u1ec1 ph\xe1t tri\u1ec3n \u1ee9ng d\u1ee5ng web v\xe0 di \u0111\u1ed9ng,\uc6f9 \ubc0f \ubaa8\ubc14\uc77c \uc571 \uac1c\ubc1c\uc5d0\uc11c 3\ub144\uc758 \uacbd\ud5d8,Web\u30fb\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u958b\u767a\u306e3\u5e74\u9593\u306e\u7d4c\u9a13,\nteam_member6_name,Le Viet Hung,L\xea Vi\u1ec7t H\xf9ng,Le Viet Hung,Le Viet Hung,\nteam_member6_position,Mobile app developer,Mobile app developer,\ubaa8\ubc14\uc77c \uc571 \uac1c\ubc1c\uc790,\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u958b\u767a\u8005,\nteam_member6_content,2 years of experience in web & mobile app development,2 n\u0103m kinh nghi\u1ec7m v\u1ec1 ph\xe1t tri\u1ec3n \u1ee9ng d\u1ee5ng web v\xe0 di \u0111\u1ed9ng,\uc6f9 \ubc0f \ubaa8\ubc14\uc77c \uc571 \uac1c\ubc1c\uc5d0\uc11c 2\ub144\uc758 \uacbd\ud5d8,Web\u30fb\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u958b\u767a\u306e2\u5e74\u9593\u306e\u7d4c\u9a13,\nteam_see_all_team,View Full Team,Xem to\xe0n b\u1ed9 \u0111\u1ed9i ng\u0169,\uc804\uccb4 \ud300 \ubcf4\uae30,\u30c1\u30fc\u30e0\u5168\u54e1\u3092\u898b\u308b,\nfooter_company_name,Cross Tech & Edu,Cross Tech & Edu,Cross Tech & Edu,Cross Tech & Edu,\nfooter_about_us,About Us,V\u1ec1 ch\xfang t\xf4i,\ud68c\uc0ac \uc18c\uac1c,\u79c1\u305f\u3061\u306b\u3064\u3044\u3066,\nfooter_services,Services,D\u1ecbch v\u1ee5,\uc11c\ube44\uc2a4,\u30b5\u30fc\u30d3\u30b9,\nfooter_user_case,Use Cases,Tr\u01b0\u1eddng h\u1ee3p s\u1eed d\u1ee5ng,\uc0ac\uc6a9 \uc0ac\ub840,\u30e6\u30fc\u30b9\u30b1\u30fc\u30b9,\nfooter_pricing,Pricing,B\u1ea3ng gi\xe1,\uac00\uaca9\ud45c,\u6599\u91d1\u8868,\nfooter_contact_us,Contact,Li\xean h\u1ec7,\uc5f0\ub77d\ucc98,\u304a\u554f\u3044\u5408\u308f\u305b,\nfooter_email_label,Email: crosstechedu@gmail.com,Email: crosstechedu@gmail.com,\uc774\uba54\uc77c: crosstechedu@gmail.com,\u30e1\u30fc\u30eb: crosstechedu@gmail.com,\nfooter_phone_label,Phone: 0338305895,\u0110i\u1ec7n tho\u1ea1i: 0338305895,\uc804\ud654\ubc88\ud638: 0338305895,\u96fb\u8a71\u756a\u53f7: 0338305895,\nfooter_address_label,"Address: No. 24 - K7, Ciputra Urban Area, Phu Thuong Ward, Tay Ho District, Hanoi City, Vietnam","\u0110\u1ecba ch\u1ec9: S\u1ed1 24 - K7, Khu \u0111\xf4 th\u1ecb Ciputra, Ph\u01b0\u1eddng Ph\xfa Th\u01b0\u1ee3ng, Qu\u1eadn T\xe2y H\u1ed3, Th\xe0nh ph\u1ed1 H\xe0 N\u1ed9i, Vi\u1ec7t Nam","\uc8fc\uc18c: \ubca0\ud2b8\ub0a8 \ud558\ub178\uc774\uc2dc \ub5a0\uc774\ud638\uad70 \ud478\ud2b8\uc5c9\ub3d9, \uc528\ud478\ud2b8\ub77c \ub3c4\uc2dc\uad6c\uc5ed K7 - 24\ubc88\uc9c0",\u4f4f\u6240: \u30d9\u30c8\u30ca\u30e0\u3001\u30cf\u30ce\u30a4\u5e02\u3001\u30bf\u30a4\u30db\u30fc\u533a\u3001\u30d5\u30fc\u30c8\u30a5\u30aa\u30f3\u574a\u3001\u30b7\u30d7\u30c1\u30e3\u30fc\u90fd\u5e02\u533a K7-24\u756a\u5730,\nfooter_subscribe_to_news,Subscribe to Newsletter,\u0110\u0103ng k\xfd nh\u1eadn tin t\u1ee9c,\ub274\uc2a4\ub808\ud130 \uad6c\ub3c5 \uc2e0\uccad,\u30cb\u30e5\u30fc\u30b9\u30ec\u30bf\u30fc\u3092\u8cfc\u8aad\u3059\u308b,\nfooter_copyright,\xa9 2024 Crosstechedu. All rights reserved.,\xa9 2024 Crosstechedu. M\u1ecdi quy\u1ec1n \u0111\u01b0\u1ee3c b\u1ea3o l\u01b0u.,\xa9 2024 Crosstechedu. \ubaa8\ub4e0 \uad8c\ub9ac \ubcf4\uc720.,\xa9 2024 Crosstechedu. \u7121\u65ad\u8ee2\u8f09\u3092\u7981\u3058\u307e\u3059\u3002,\nfooter_privacy_policy,Privacy Policy,Ch\xednh s\xe1ch b\u1ea3o m\u1eadt,\uac1c\uc778\uc815\ubcf4 \ubcf4\ud638\uc815\ucc45,\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fc,\ncta_title,Let\'s create something magical,H\xe3y c\xf9ng t\u1ea1o n\xean \u0111i\u1ec1u k\u1ef3 di\u1ec7u,\ud568\uaed8 \ub180\ub77c\uc6b4 \uc77c\uc744 \ub9cc\ub4e4\uc5b4 \ubd05\uc2dc\ub2e4,\u4e00\u7dd2\u306b\u7d20\u6674\u3089\u3057\u3044\u3082\u306e\u3092\u5275\u308a\u307e\u3057\u3087\u3046,\ncta_description,Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.,Li\xean h\u1ec7 v\u1edbi ch\xfang t\xf4i ngay h\xf4m nay \u0111\u1ec3 t\xecm hi\u1ec3u th\xeam v\u1ec1 c\xe1ch d\u1ecbch v\u1ee5 ti\u1ebfp th\u1ecb s\u1ed1 c\u1ee7a ch\xfang t\xf4i c\xf3 th\u1ec3 gi\xfap doanh nghi\u1ec7p c\u1ee7a b\u1ea1n ph\xe1t tri\u1ec3n v\xe0 th\xe0nh c\xf4ng tr\u1ef1c tuy\u1ebfn.,\uc9c0\uae08 \ubc14\ub85c \uc800\ud76c\uc5d0\uac8c \uc5f0\ub77d\ud558\uc5ec \ub514\uc9c0\ud138 \ub9c8\ucf00\ud305 \uc11c\ube44\uc2a4\uac00 \uadc0\uc0ac\uc758 \ube44\uc988\ub2c8\uc2a4 \uc131\uc7a5\uacfc \uc628\ub77c\uc778 \uc131\uacf5\uc5d0 \uc5b4\ub5bb\uac8c \uae30\uc5ec\ud560 \uc218 \uc788\ub294\uc9c0 \uc54c\uc544\ubcf4\uc138\uc694.,\u79c1\u305f\u3061\u306e\u30c7\u30b8\u30bf\u30eb\u30de\u30fc\u30b1\u30c6\u30a3\u30f3\u30b0\u30b5\u30fc\u30d3\u30b9\u304c\u3001\u5fa1\u793e\u306e\u30d3\u30b8\u30cd\u30b9\u306e\u6210\u9577\u3068\u30aa\u30f3\u30e9\u30a4\u30f3\u3067\u306e\u6210\u529f\u306b\u3069\u3046\u8ca2\u732e\u3067\u304d\u308b\u304b\u3001\u4eca\u3059\u3050\u304a\u554f\u3044\u5408\u308f\u305b\u304f\u3060\u3055\u3044\u3002,\ncta_button_text,Get Your Free Proposal,Nh\u1eadn \u0111\u1ec1 xu\u1ea5t mi\u1ec5n ph\xed c\u1ee7a b\u1ea1n,\ubb34\ub8cc \uc81c\uc548 \ubc1b\uae30,\u7121\u6599\u63d0\u6848\u3092\u53d7\u3051\u53d6\u308b,\ncontact_us_say_hi,Greeting,Ch\xe0o h\u1ecfi,\uc778\uc0ac\ub9d0,\u3054\u6328\u62f6,\ncontact_us_get_a_quote,Get a Quote,Nh\u1eadn b\xe1o gi\xe1,\uacac\uc801 \uc694\uccad,\u898b\u7a4d\u3082\u308a\u3092\u53d6\u5f97,\ncontact_us_name_label,Name,T\xean,\uc774\ub984,\u540d\u524d,\ncontact_us_email_label,Email,Email,\uc774\uba54\uc77c,\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9,\ncontact_us_title_label,Title,Ti\xeau \u0111\u1ec1,\uc81c\ubaa9,\u4ef6\u540d,\ncontact_us_message_label,Message,Tin nh\u1eafn,\uba54\uc2dc\uc9c0,\u30e1\u30c3\u30bb\u30fc\u30b8,\ncontact_us_success,Your email has been sent successfully!,B\u1ea1n \u0111\xe3 g\u1eedi email th\xe0nh c\xf4ng!,\uc774\uba54\uc77c\uc774 \uc131\uacf5\uc801\uc73c\ub85c \uc804\uc1a1\ub418\uc5c8\uc2b5\ub2c8\ub2e4!,\u30e1\u30fc\u30eb\u304c\u6b63\u5e38\u306b\u9001\u4fe1\u3055\u308c\u307e\u3057\u305f\uff01,\ncontact_us_failure,Failed to send email. Please try again.,G\u1eedi email th\u1ea5t b\u1ea1i. Vui l\xf2ng th\u1eed l\u1ea1i!,\uc774\uba54\uc77c \uc804\uc1a1\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574 \uc8fc\uc138\uc694.,\u30e1\u30fc\u30eb\u306e\u9001\u4fe1\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002\u3082\u3046\u4e00\u5ea6\u304a\u8a66\u3057\u304f\u3060\u3055\u3044\u3002,\ncontact_us_uncomplete,Please complete all required fields.,Vui l\xf2ng \u0111i\u1ec1n \u0111\u1ea7y \u0111\u1ee7 th\xf4ng tin!,\ubaa8\ub4e0 \ud544\uc218 \ud56d\ubaa9\uc744 \uc785\ub825\ud574 \uc8fc\uc138\uc694.,\u5fc5\u9808\u9805\u76ee\u3092\u3059\u3079\u3066\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002,\ncontact_us_issubmit,Submit,G\u1eedi \u0111i,\uc81c\ucd9c,\u9001\u4fe1,\ncase_studies_case1_content,"We partnered with a logistics company to develop a mobile platform (iOS & Android) for ordering and tracking shipments, integrated with maps and route drawing.","Ch\xfang t\xf4i \u0111\xe3 c\xf9ng m\u1ed9t c\xf4ng ty logistic ph\xe1t tri\u1ec3n n\u1ec1n t\u1ea3ng di \u0111\u1ed9ng (iOS & Android) \u0111\u1ec3 \u0111\u1eb7t h\xe0ng v\xe0 theo d\xf5i \u0111\u01a1n h\xe0ng, t\xedch h\u1ee3p b\u1ea3n \u0111\u1ed3 v\xe0 v\u1ebd tuy\u1ebfn \u0111\u01b0\u1eddng.","\uc6b0\ub9ac\ub294 \ubb3c\ub958 \ud68c\uc0ac\uc640 \ud611\ub825\ud558\uc5ec \uc8fc\ubb38 \ubc0f \ubc30\uc1a1 \ucd94\uc801\uc744 \uc704\ud55c \ubaa8\ubc14\uc77c \ud50c\ub7ab\ud3fc(iOS \ubc0f Android)\uc744 \uac1c\ubc1c\ud558\uace0, \uc9c0\ub3c4 \ud1b5\ud569 \ubc0f \uacbd\ub85c \uadf8\ub9ac\uae30\ub97c \uad6c\ud604\ud588\uc2b5\ub2c8\ub2e4.",\u79c1\u305f\u3061\u306f\u7269\u6d41\u4f1a\u793e\u3068\u9023\u643a\u3057\u3001\u6ce8\u6587\u304a\u3088\u3073\u914d\u9001\u8ffd\u8de1\u7528\u306e\u30e2\u30d0\u30a4\u30eb\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\uff08iOS & Android\uff09\u3092\u958b\u767a\u3057\u3001\u5730\u56f3\u3068\u30eb\u30fc\u30c8\u63cf\u753b\u6a5f\u80fd\u3092\u7d71\u5408\u3057\u307e\u3057\u305f\u3002,\ncase_studies_case2_content,"For individual clients, we developed an app platform to help learners prepare for driving license exams and a system to manage students.",V\u1edbi kh\xe1ch h\xe0ng c\xe1 nh\xe2n ch\xfang t\xf4i \u0111\xe3 ph\xe1t tri\u1ec3n n\u1ec1n t\u1ea3ng \u1ee9ng d\u1ee5ng \u0111\u1ec3 gi\xfap ng\u01b0\u1eddi h\u1ecdc thi gi\u1ea5y ph\xe9p l\xe1i xe v\xe0 m\u1ed9t trang qu\u1ea3n l\xfd h\u1ecdc vi\xean,\uac1c\uc778 \uace0\uac1d\uc744 \uc704\ud574 \uc6b4\uc804 \uba74\ud5c8 \uc2dc\ud5d8\uc744 \uc900\ube44\ud560 \uc218 \uc788\ub3c4\ub85d \ub3d5\ub294 \uc571 \ud50c\ub7ab\ud3fc\uacfc \ud559\uc2b5\uc790 \uad00\ub9ac \uc2dc\uc2a4\ud15c\uc744 \uac1c\ubc1c\ud588\uc2b5\ub2c8\ub2e4.,\u500b\u4eba\u9867\u5ba2\u5411\u3051\u306b\u306f\u3001\u904b\u8ee2\u514d\u8a31\u8a66\u9a13\u306e\u5b66\u7fd2\u652f\u63f4\u30a2\u30d7\u30ea\u3068\u3001\u53d7\u8b1b\u8005\u7ba1\u7406\u306e\u305f\u3081\u306e\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3092\u958b\u767a\u3057\u307e\u3057\u305f\u3002,\ncase_studies_case3_content,We are also working with an academic organization to develop an AI-integrated web app to improve and optimize English learning and teaching.,"Ch\xfang t\xf4i c\u0169ng \u0111ang l\xe0m vi\u1ec7c v\u1edbi m\u1ed9 t\u1ed5 ch\u1ee9c h\u1ecdc thu\u1eadt, ph\xe1t tri\u1ec3n m\u1ed9t \u1ee9ng d\u1ee5ng web t\xedch h\u1ee3p AI \u0111\u1ec3 c\u1ea3i thi\u1ec7n v\xe0 t\u1ed1i \u01b0u vi\u1ec7c h\u1ecdc v\xe0 gi\u1ea3ng d\u1ea1y ti\u1ebfng Anh.",\uc6b0\ub9ac\ub294 \ub610\ud55c \ud559\uc220 \uae30\uad00\uacfc \ud611\ub825\ud558\uc5ec \uc601\uc5b4 \ud559\uc2b5 \ubc0f \uad50\uc721\uc744 \ud5a5\uc0c1\uc2dc\ud0a4\uace0 \ucd5c\uc801\ud654\ud558\uae30 \uc704\ud55c AI \ud1b5\ud569 \uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uac1c\ubc1c\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.,\u307e\u305f\u3001\u3042\u308b\u6559\u80b2\u6a5f\u95a2\u3068\u9023\u643a\u3057\u3001\u82f1\u8a9e\u306e\u5b66\u7fd2\u30fb\u6307\u5c0e\u3092\u6539\u5584\u30fb\u6700\u9069\u5316\u3059\u308b\u305f\u3081\u306eAI\u7d71\u5408\u578b\u30a6\u30a7\u30d6\u30a2\u30d7\u30ea\u306e\u958b\u767a\u306b\u3082\u53d6\u308a\u7d44\u3093\u3067\u3044\u307e\u3059\u3002,\ncase_studies_learn_more,Learn More,T\xecm hi\u1ec3u th\xeam,\uc790\uc138\ud788 \uc54c\uc544\ubcf4\uae30,\u3055\u3089\u306b\u8a73\u3057\u304f,\nhome_service_title,Services,D\u1ecbch v\u1ee5,\uc11c\ube44\uc2a4,\u30b5\u30fc\u30d3\u30b9,\nhome_service_content,Explore real-world examples of our proven digital marketing success through case studies,Kh\xe1m ph\xe1 c\xe1c v\xed d\u1ee5 th\u1ef1c t\u1ebf v\u1ec1 th\xe0nh c\xf4ng ti\u1ebfp th\u1ecb s\u1ed1 \u0111\xe3 \u0111\u01b0\u1ee3c ch\u1ee9ng minh c\u1ee7a ch\xfang t\xf4i qua c\xe1c nghi\xean c\u1ee9u \u0111i\u1ec3n h\xecnh,\uc131\uacf5\uc801\uc778 \ub514\uc9c0\ud138 \ub9c8\ucf00\ud305 \uc0ac\ub840\ub97c \uc2e4\uc81c \uc5f0\uad6c\ub97c \ud1b5\ud574 \ud655\uc778\ud574 \ubcf4\uc138\uc694,\u5b9f\u8a3c\u3055\u308c\u305f\u30c7\u30b8\u30bf\u30eb\u30de\u30fc\u30b1\u30c6\u30a3\u30f3\u30b0\u306e\u6210\u529f\u4e8b\u4f8b\u3092\u30b1\u30fc\u30b9\u30b9\u30bf\u30c7\u30a3\u3067\u3054\u7d39\u4ecb\u3057\u307e\u3059,\nhome_case_studies_title,Case Studies,V\xed d\u1ee5 \u0111i\u1ec3n h\xecnh,\uc131\uacf5 \uc0ac\ub840,\u4e8b\u4f8b\u7d39\u4ecb,\nhome_case_studies_content,Explore real-world examples of our proven digital marketing success through case studies,Kh\xe1m ph\xe1 c\xe1c v\xed d\u1ee5 th\u1ef1c t\u1ebf v\u1ec1 th\xe0nh c\xf4ng ti\u1ebfp th\u1ecb s\u1ed1 \u0111\xe3 \u0111\u01b0\u1ee3c ch\u1ee9ng minh c\u1ee7a ch\xfang t\xf4i qua c\xe1c nghi\xean c\u1ee9u \u0111i\u1ec3n h\xecnh,\uc131\uacf5\uc801\uc778 \ub514\uc9c0\ud138 \ub9c8\ucf00\ud305 \uc0ac\ub840\ub97c \uc2e4\uc81c \uc5f0\uad6c\ub97c \ud1b5\ud574 \ud655\uc778\ud574 \ubcf4\uc138\uc694,\u5b9f\u8a3c\u3055\u308c\u305f\u30c7\u30b8\u30bf\u30eb\u30de\u30fc\u30b1\u30c6\u30a3\u30f3\u30b0\u306e\u6210\u529f\u4e8b\u4f8b\u3092\u30b1\u30fc\u30b9\u30b9\u30bf\u30c7\u30a3\u3067\u3054\u7d39\u4ecb\u3057\u307e\u3059,\nhome_process_title,Workflow,Quy tr\xecnh l\xe0m vi\u1ec7c,\uc5c5\ubb34 \ud504\ub85c\uc138\uc2a4,\u30ef\u30fc\u30af\u30d5\u30ed\u30fc,\nhome_process_content,"With Agile, we\u2019ll take it step by step to achieve your business goals.","V\u1edbi Agile, ch\xfang ta s\u1ebd b\u01b0\u1edbc t\u1eebng b\u01b0\u1edbc \u0111\u1ec3 \u0111\u1ea1t \u0111\u01b0\u1ee3c m\u1ee5c ti\xeau kinh doanh c\u1ee7a b\u1ea1n.",Agile \ubc29\ubc95\ub860\uc744 \ud1b5\ud574 \ube44\uc988\ub2c8\uc2a4 \ubaa9\ud45c\ub97c \ub2e8\uacc4\ubcc4\ub85c \ub2ec\uc131\ud574 \ub098\uac00\uaca0\uc2b5\ub2c8\ub2e4.,\u30a2\u30b8\u30e3\u30a4\u30eb\u3067\u3001\u30d3\u30b8\u30cd\u30b9\u76ee\u6a19\u9054\u6210\u306b\u5411\u3051\u3066\u4e00\u6b69\u305a\u3064\u9032\u3081\u3066\u3044\u304d\u307e\u3057\u3087\u3046\u3002,\nhome_team_title,Team,\u0110\u1ed9i ng\u0169,\ud300,\u30c1\u30fc\u30e0,\nhome_team_content,Meet the skilled and experienced team behind our successful application development project,G\u1eb7p g\u1ee1 \u0111\u1ed9i ng\u0169 t\xe0i n\u0103ng v\xe0 gi\xe0u kinh nghi\u1ec7m \u0111\u1ee9ng sau d\u1ef1 \xe1n ph\xe1t tri\u1ec3n \u1ee9ng d\u1ee5ng th\xe0nh c\xf4ng,\uc131\uacf5\uc801\uc778 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uac1c\ubc1c \ud504\ub85c\uc81d\ud2b8\ub97c \uc774\ub044\ub294 \uc219\ub828\ub418\uace0 \uacbd\ud5d8\uc774 \ud48d\ubd80\ud55c \ud300\uc744 \ub9cc\ub098\ubcf4\uc138\uc694,\u6210\u529f\u3057\u305f\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u958b\u767a\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u652f\u3048\u308b\u3001\u719f\u7df4\u3057\u305f\u7d4c\u9a13\u8c4a\u5bcc\u306a\u30c1\u30fc\u30e0\u306b\u304a\u4f1a\u3044\u304f\u3060\u3055\u3044,\nhome_contact_us_title,Contact Us,Li\xean h\u1ec7 v\u1edbi ch\xfang t\xf4i,\uc5f0\ub77d\ucc98,\u304a\u554f\u3044\u5408\u308f\u305b,\nhome_contact_us_content,Let\'s discuss your needs now and together we will make your dream come true!,Th\u1ea3o lu\u1eadn v\u1ec1 nhu c\u1ea7u c\u1ee7a b\u1ea1n ngay b\xe2y gi\u1edd v\xe0 c\xf9ng nhau ta x\xe2y d\u1ef1ng \u01b0\u1edbc m\u01a1 th\xe0nh s\u1ef1 th\u1eadt!,\uc9c0\uae08 \uadc0\ud558\uc758 \uc694\uad6c \uc0ac\ud56d\uc744 \ub17c\uc758\ud558\uace0 \ud568\uaed8 \uafc8\uc744 \ud604\uc2e4\ub85c \ub9cc\ub4e4\uc5b4 \ubd05\uc2dc\ub2e4!,\u4eca\u3059\u3050\u3042\u306a\u305f\u306e\u30cb\u30fc\u30ba\u306b\u3064\u3044\u3066\u8a71\u3057\u5408\u3044\u3001\u4e00\u7dd2\u306b\u5922\u3092\u5b9f\u73fe\u3057\u307e\u3057\u3087\u3046\uff01,\nabout_title,Who are we?,Ch\xfang t\xf4i l\xe0 ai?,\uc6b0\ub9ac\ub294 \ub204\uad6c\uc785\ub2c8\uae4c?,\u79c1\u305f\u3061\u306f\u8ab0\u3067\u3059\u304b\uff1f,\nabout_description,"CROSS TECH & EDU CO., LTD. is a pioneer in applying technology to the education sector, with a mission to connect knowledge and expand learning opportunities for everyone. We focus on developing smart learning solutions, online education platforms, and modern teaching support tools to enhance training quality and ignite a passion for learning across all ages. With a team of experienced experts in technology, education, and content development, CROSS is committed to delivering optimized, user-friendly products and services that align with today\u2019s digital education trends. We continuously innovate to build a comprehensive education ecosystem, helping students, learners, and teachers develop skills, knowledge, and creative thinking.","C\xf4ng ty C\xf4ng ngh\u1ec7 v\xe0 Gi\xe1o d\u1ee5c Cross l\xe0 \u0111\u01a1n v\u1ecb kh\u1edfi nghi\u1ec7p trong vi\u1ec7c \u1ee9ng d\u1ee5ng c\xf4ng ngh\u1ec7 v\xe0o l\u0129nh v\u1ef1c gi\xe1o d\u1ee5c, v\u1edbi s\u1ee9 m\u1ec7nh k\u1ebft n\u1ed1i tri th\u1ee9c v\xe0 m\u1edf r\u1ed9ng c\u01a1 h\u1ed9i h\u1ecdc t\u1eadp cho t\u1ea5t c\u1ea3 m\u1ecdi ng\u01b0\u1eddi. Song song l\xe0 ho\u1ea1t \u0111\u1ed9ng \u0111\xe0o t\u1ea1o v\xe0 cung \u1ee9ng nh\xe2n l\u1ef1c cho ng\xe0nh IT.\n\nCh\xfang t\xf4i t\u1eadp trung ph\xe1t tri\u1ec3n c\xe1c gi\u1ea3i ph\xe1p h\u1ecdc t\u1eadp c\xe1 nh\xe2n h\xf3a, n\u1ec1n t\u1ea3ng gi\xe1o d\u1ee5c tr\u1ef1c tuy\u1ebfn nh\u1eb1m n\xe2ng cao ch\u1ea5t l\u01b0\u1ee3ng \u0111\xe0o t\u1ea1o v\xe0 kh\u01a1i d\u1eady ni\u1ec1m \u0111am m\xea h\u1ecdc h\u1ecfi \u1edf m\u1ecdi l\u1ee9a tu\u1ed5i. \n\nV\u1edbi ph\u01b0\u01a1ng ch\xe2m l\u1ea5y con ng\u01b0\u1eddi l\xe0 trung t\xe2m, ch\xfang t\xf4i kh\xf4ng ng\u1eebng c\u1ea3i ti\u1ebfn \u0111\u1ec3 x\xe2y d\u1ef1ng m\u1ed9t h\u1ec7 sinh th\xe1i gi\xe1o d\u1ee5c to\xe0n di\u1ec7n, gi\xfap ng\u01b0\u1eddi h\u1ecdc x\xe2y d\u1ef1ng t\u01b0 duy ph\u1ea3n bi\u1ec7n, kh\u1ea3 n\u0103ng s\xe1ng t\u1ea1o, kh\u1ea3 n\u0103ng l\xe0m vi\u1ec7c \u0111\u1ed9c l\u1eadp c\u0169ng nh\u01b0 l\xe0m vi\u1ec7c nh\xf3m. \n\nCross hy v\u1ecdng s\u1ebd \u0111\u01b0\u1ee3c \u0111\u1ed3ng h\xe0nh c\xf9ng b\u1ea1n h\u1ecdc, v\xe0 l\xe0 \u0111\u1ed1i t\xe1c tin c\u1eady c\u1ee7a c\xe1c doanh nghi\u1ec7p IT trong v\xe0 ngo\xe0i n\u01b0\u1edbc.","\ud06c\ub85c\uc2a4 \uae30\uc220 \ubc0f \uad50\uc721 \uc720\ud55c\ud68c\uc0ac\ub294 \uad50\uc721 \ubd84\uc57c\uc5d0 \uae30\uc220\uc744 \uc801\uc6a9\ud558\ub294 \uc120\uad6c\uc790\ub85c\uc11c, \uc9c0\uc2dd\uc744 \uc5f0\uacb0\ud558\uace0 \ubaa8\ub4e0 \uc0ac\ub78c\uc5d0\uac8c \ud559\uc2b5 \uae30\ud68c\ub97c \ud655\uc7a5\ud558\ub294 \uac83\uc744 \uc0ac\uba85\uc73c\ub85c \ud569\ub2c8\ub2e4. \uc6b0\ub9ac\ub294 \uc2a4\ub9c8\ud2b8 \ud559\uc2b5 \uc194\ub8e8\uc158, \uc628\ub77c\uc778 \uad50\uc721 \ud50c\ub7ab\ud3fc, \ud604\ub300\uc801\uc778 \uad50\uc218 \uc9c0\uc6d0 \ub3c4\uad6c\ub97c \uac1c\ubc1c\ud558\uc5ec \uad50\uc721 \ud488\uc9c8\uc744 \ub192\uc774\uace0 \ubaa8\ub4e0 \uc5f0\ub839\uce35\uc5d0\uc11c \ud559\uc2b5\uc5d0 \ub300\ud55c \uc5f4\uc815\uc744 \ubd88\ub7ec\uc77c\uc73c\ud0a4\ub294 \ub370 \uc911\uc810\uc744 \ub461\ub2c8\ub2e4. \uae30\uc220, \uad50\uc721, \ucf58\ud150\uce20 \uac1c\ubc1c \ubd84\uc57c\uc5d0\uc11c \ud48d\ubd80\ud55c \uacbd\ud5d8\uc744 \uac00\uc9c4 \uc804\ubb38\uac00 \ud300\uc744 \ud1b5\ud574 \ud06c\ub85c\uc2a4\ub294 \ucd5c\uc801\ud654\ub418\uace0 \uc0ac\uc6a9\uc790 \uce5c\ud654\uc801\uc774\uba70 \uc624\ub298\ub0a0\uc758 \ub514\uc9c0\ud138 \uad50\uc721 \ud2b8\ub80c\ub4dc\uc5d0 \ubd80\ud569\ud558\ub294 \uc81c\ud488\uacfc \uc11c\ube44\uc2a4\ub97c \uc81c\uacf5\ud558\uae30 \uc704\ud574 \ud5cc\uc2e0\ud569\ub2c8\ub2e4. \uc6b0\ub9ac\ub294 \ud559\uc0dd, \ud559\uc2b5\uc790, \uad50\uc0ac\uac00 \uae30\uc220, \uc9c0\uc2dd, \ucc3d\uc758\uc801 \uc0ac\uace0\ub97c \uac1c\ubc1c\ud560 \uc218 \uc788\ub3c4\ub85d \ud3ec\uad04\uc801\uc778 \uad50\uc721 \uc0dd\ud0dc\uacc4\ub97c \uad6c\ucd95\ud558\uae30 \uc704\ud574 \ub04a\uc784\uc5c6\uc774 \ud601\uc2e0\ud569\ub2c8\ub2e4.",\u30af\u30ed\u30b9\u30fb\u30c6\u30af\u30ce\u30ed\u30b8\u30fc\u30fb\u30a2\u30f3\u30c9\u30fb\u30a8\u30c7\u30e5\u30b1\u30fc\u30b7\u30e7\u30f3\u682a\u5f0f\u4f1a\u793e\u306f\u3001\u6559\u80b2\u5206\u91ce\u306b\u30c6\u30af\u30ce\u30ed\u30b8\u30fc\u3092\u5fdc\u7528\u3059\u308b\u5148\u99c6\u8005\u3067\u3042\u308a\u3001\u77e5\u8b58\u3092\u3064\u306a\u304e\u3001\u3059\u3079\u3066\u306e\u4eba\u306b\u5b66\u3073\u306e\u6a5f\u4f1a\u3092\u5e83\u3052\u308b\u3053\u3068\u3092\u4f7f\u547d\u3068\u3057\u3066\u3044\u307e\u3059\u3002\u79c1\u305f\u3061\u306f\u3001\u30b9\u30de\u30fc\u30c8\u306a\u5b66\u7fd2\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u3001\u30aa\u30f3\u30e9\u30a4\u30f3\u6559\u80b2\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3001\u73fe\u4ee3\u7684\u306a\u6559\u80b2\u652f\u63f4\u30c4\u30fc\u30eb\u306e\u958b\u767a\u306b\u6ce8\u529b\u3057\u3001\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0\u306e\u8cea\u3092\u5411\u4e0a\u3055\u305b\u3001\u3042\u3089\u3086\u308b\u5e74\u9f62\u5c64\u3067\u5b66\u3076\u60c5\u71b1\u3092\u547c\u3073\u8d77\u3053\u3057\u307e\u3059\u3002\u30c6\u30af\u30ce\u30ed\u30b8\u30fc\u3001\u6559\u80b2\u3001\u30b3\u30f3\u30c6\u30f3\u30c4\u958b\u767a\u306e\u5206\u91ce\u3067\u8c4a\u5bcc\u306a\u7d4c\u9a13\u3092\u6301\u3064\u5c02\u9580\u5bb6\u30c1\u30fc\u30e0\u306b\u3088\u308a\u3001\u30af\u30ed\u30b9\u306f\u6700\u9069\u5316\u3055\u308c\u3001\u30e6\u30fc\u30b6\u30fc\u30d5\u30ec\u30f3\u30c9\u30ea\u30fc\u3067\u3001\u4eca\u65e5\u306e\u30c7\u30b8\u30bf\u30eb\u6559\u80b2\u306e\u30c8\u30ec\u30f3\u30c9\u306b\u9069\u5408\u3057\u305f\u88fd\u54c1\u3068\u30b5\u30fc\u30d3\u30b9\u3092\u63d0\u4f9b\u3059\u308b\u3053\u3068\u306b\u5c3d\u529b\u3057\u3066\u3044\u307e\u3059\u3002\u79c1\u305f\u3061\u306f\u3001\u5b66\u751f\u3001\u5b66\u7fd2\u8005\u3001\u6559\u5e2b\u304c\u30b9\u30ad\u30eb\u3001\u77e5\u8b58\u3001\u5275\u9020\u7684\u601d\u8003\u3092\u80b2\u3080\u305f\u3081\u306e\u5305\u62ec\u7684\u306a\u6559\u80b2\u30a8\u30b3\u30b7\u30b9\u30c6\u30e0\u3092\u69cb\u7bc9\u3059\u308b\u305f\u3081\u306b\u3001\u7d76\u3048\u305a\u9769\u65b0\u3092\u7d9a\u3051\u307e\u3059\u3002,\nabout_goal_vision_title,Vision,T\u1ea7m nh\xecn,\ube44\uc804,\u30d3\u30b8\u30e7\u30f3,\nabout_goal_vision_description,"To become a leading bridge of knowledge, where technology paves the way for a liberal, equitable, and creative education for all generations.","Tr\u1edf th\xe0nh c\u1ea7u n\u1ed1i tri th\u1ee9c h\xe0ng \u0111\u1ea7u, n\u01a1i c\xf4ng ngh\u1ec7 m\u1edf l\u1ed1i cho m\u1ed9t n\u1ec1n gi\xe1o d\u1ee5c khai ph\xf3ng, b\xecnh \u0111\u1eb3ng v\xe0 s\xe1ng t\u1ea1o cho m\u1ecdi th\u1ebf h\u1ec7.","\uc9c0\uc2dd\uc758 \uc120\ub3c4\uc801\uc778 \uc5f0\uacb0 \uace0\ub9ac\uac00 \ub418\uc5b4, \uae30\uc220\uc774 \ubaa8\ub4e0 \uc138\ub300\uc5d0\uac8c \uc790\uc720\ub86d\uace0 \ud3c9\ub4f1\ud558\uba70 \ucc3d\uc758\uc801\uc778 \uad50\uc721\uc758 \uae38\uc744 \uc5f4\uc5b4\uc8fc\ub294 \uac83.",\u77e5\u8b58\u306e\u67b6\u3051\u6a4b\u3068\u3057\u3066\u30c8\u30c3\u30d7\u3068\u306a\u308a\u3001\u30c6\u30af\u30ce\u30ed\u30b8\u30fc\u304c\u3059\u3079\u3066\u306e\u4e16\u4ee3\u306b\u5bfe\u3057\u3066\u81ea\u7531\u3067\u5e73\u7b49\u304b\u3064\u5275\u9020\u7684\u306a\u6559\u80b2\u3078\u306e\u9053\u3092\u958b\u304f\u3002,\nabout_goal_mission_title,Mission,S\u1ee9 m\u1ec7nh,\uc0ac\uba85,\u30df\u30c3\u30b7\u30e7\u30f3,\nabout_goal_mission_description,"To apply modern technology to build comprehensive education solutions, helping students, learners, and teachers develop skills, thinking, and lifelong learning abilities.","\u1ee8ng d\u1ee5ng c\xf4ng ngh\u1ec7 hi\u1ec7n \u0111\u1ea1i \u0111\u1ec3 mang gi\u1ea3i ph\xe1p gi\xe1o d\u1ee5c to\xe0n di\u1ec7n, h\u1ee3p l\xfd t\u1edbi m\u1ecdi ng\u01b0\u1eddi.","\ud604\ub300 \uae30\uc220\uc744 \ud65c\uc6a9\ud558\uc5ec \ud3ec\uad04\uc801\uc778 \uad50\uc721 \uc194\ub8e8\uc158\uc744 \uad6c\ucd95\ud558\uc5ec \ud559\uc0dd, \ud559\uc2b5\uc790, \uad50\uc0ac\uac00 \uae30\uc220, \uc0ac\uace0, \ud3c9\uc0dd \ud559\uc2b5 \ub2a5\ub825\uc744 \uac1c\ubc1c\ud558\ub3c4\ub85d \ub3d5\ub294 \uac83.",\u73fe\u4ee3\u306e\u30c6\u30af\u30ce\u30ed\u30b8\u30fc\u3092\u6d3b\u7528\u3057\u3066\u5305\u62ec\u7684\u306a\u6559\u80b2\u30bd\u30ea\u30e5\u30fc\u30b7\u30e7\u30f3\u3092\u69cb\u7bc9\u3057\u3001\u5b66\u751f\u3001\u5b66\u7fd2\u8005\u3001\u6559\u5e2b\u304c\u30b9\u30ad\u30eb\u3001\u601d\u8003\u3001\u751f\u6daf\u5b66\u7fd2\u80fd\u529b\u3092\u80b2\u3080\u3053\u3068\u3092\u652f\u63f4\u3059\u308b\u3002,\nabout_goal_philosophy_title,Philosophy,Tri\u1ebft l\xfd,\ucca0\ud559,\u7406\u5ff5,\nabout_goal_philosophy_description,"\u201cCentered on learners, using technology as a tool, and quality as the foundation.\u201d","\u201cL\u1ea5y ng\u01b0\u1eddi h\u1ecdc l\xe0m trung t\xe2m, l\u1ea5y c\xf4ng ngh\u1ec7 l\xe0m c\xf4ng c\u1ee5, l\u1ea5y ch\u1ea5t l\u01b0\u1ee3ng l\xe0m n\u1ec1n t\u1ea3ng.\u201d ","\u201c\ud559\uc2b5\uc790\ub97c \uc911\uc2ec\uc73c\ub85c, \uae30\uc220\uc744 \ub3c4\uad6c\ub85c, \ud488\uc9c8\uc744 \uae30\ubc18\uc73c\ub85c.\u201d ",\u300c\u5b66\u7fd2\u8005\u3092\u4e2d\u5fc3\u3068\u3057\u3001\u30c6\u30af\u30ce\u30ed\u30b8\u30fc\u3092\u30c4\u30fc\u30eb\u3068\u3057\u3066\u3001\u54c1\u8cea\u3092\u57fa\u76e4\u3068\u3059\u308b\u3002\u300d,\nabout_goal_philosophy_description_part2,We believe that technology does not replace humans but serves as a means to effectively and sustainably spread the value of knowledge.,"Ch\xfang t\xf4i tin r\u1eb1ng c\xf4ng ngh\u1ec7 kh\xf4ng thay th\u1ebf con ng\u01b0\u1eddi, m\xe0 l\xe0 ph\u01b0\u01a1ng ti\u1ec7n \u0111\u1ec3 lan t\u1ecfa gi\xe1 tr\u1ecb tri th\u1ee9c m\u1ed9t c\xe1ch hi\u1ec7u qu\u1ea3 v\xe0 b\u1ec1n v\u1eefng.",\uc6b0\ub9ac\ub294 \uae30\uc220\uc774 \uc778\uac04\uc744 \ub300\uccb4\ud558\ub294 \uac83\uc774 \uc544\ub2c8\ub77c \uc9c0\uc2dd\uc758 \uac00\uce58\ub97c \ud6a8\uacfc\uc801\uc774\uace0 \uc9c0\uc18d \uac00\ub2a5\ud558\uac8c \uc804\ud30c\ud558\ub294 \uc218\ub2e8\uc774\ub77c\uace0 \ubbff\uc2b5\ub2c8\ub2e4.,\u30c6\u30af\u30ce\u30ed\u30b8\u30fc\u306f\u4eba\u3092\u7f6e\u304d\u63db\u3048\u308b\u3082\u306e\u3067\u306f\u306a\u304f\u3001\u77e5\u8b58\u306e\u4fa1\u5024\u3092\u52b9\u679c\u7684\u304b\u3064\u6301\u7d9a\u7684\u306b\u5e83\u3081\u308b\u624b\u6bb5\u3067\u3042\u308b\u3068\u79c1\u305f\u3061\u306f\u4fe1\u3058\u3066\u3044\u307e\u3059\u3002,\nabout_key_value_title,Core Values,Gi\xe1 tr\u1ecb c\u1ed1t l\xf5i,\ud575\uc2ec \uac00\uce58,\u30b3\u30a2\u30d0\u30ea\u30e5\u30fc,\nabout_key_value_honesty_title,Honesty,Trung th\u1ef1c,\uc815\uc9c1,\u8aa0\u5b9f,\nabout_key_value_honesty_description,Always treat colleagues and customers sincerely\t,Lu\xf4n \u0111\u1ed1i x\u1eed ch\xe2n th\xe0nh v\u1edbi \u0111\u1ed3ng nghi\u1ec7p v\xe0 kh\xe1ch h\xe0ng\t,\ud56d\uc0c1 \ub3d9\ub8cc\uc640 \uace0\uac1d\uc744 \uc9c4\uc2ec\uc73c\ub85c \ub300\ud568,\u5e38\u306b\u540c\u50da\u3084\u9867\u5ba2\u306b\u8aa0\u5b9f\u306b\u63a5\u3059\u308b,\nabout_key_value_responsibility_title,Responsibility,Ch\u1ecbu tr\xe1ch nhi\u1ec7m\t,\ucc45\uc784\uac10,\u8cac\u4efb\u611f,\nabout_key_value_responsibility_description,"Always work with a high sense of responsibility, fulfill commitments to customers\t","Lu\xf4n l\xe0m vi\u1ec7c v\u1edbi tinh th\u1ea7n tr\xe1ch nhi\u1ec7m cao, th\u1ef1c hi\u1ec7n \u0111\xfang cam k\u1ebft v\u1edbi kh\xe1ch h\xe0ng\t",\ub192\uc740 \ucc45\uc784\uac10\uc744 \uac00\uc9c0\uace0 \uc77c\ud558\uba70 \uace0\uac1d\uacfc\uc758 \uc57d\uc18d\uc744 \uc9c0\ud0b4\t,"\u9ad8\u3044\u8cac\u4efb\u611f\u3092\u6301\u3063\u3066\u50cd\u304d\u3001\u9867\u5ba2\u3068\u306e\u7d04\u675f\u3092\u5b88\u308b\n",\nabout_key_value_passion_title,Passion,Nhi\u1ec7t huy\u1ebft,\uc5f4\uc815,\u60c5\u71b1,\nabout_key_value_passion_description,Passionate about the dream to become No.1 in our field\t,Nhi\u1ec7t huy\u1ebft v\u1edbi \u01b0\u1edbc m\u01a1 \u0111\u1ea1t m\u1ee5c ti\xeau tr\u1edf th\xe0nh No.1 trong l\u0129nh v\u1ef1c c\u1ee7a m\xecnh\t,\uc6b0\ub9ac \ubd84\uc57c\uc5d0\uc11c 1\uc704\ub97c \ubaa9\ud45c\ub85c \ud558\ub294 \uc5f4\uc815\t,\u79c1\u305f\u3061\u306e\u5206\u91ce\u3067No.1\u306b\u306a\u308b\u3053\u3068\u3092\u76ee\u6307\u3059\u60c5\u71b1,\nabout_key_value_professionalism_title,Professionalism,Chuy\xean nghi\u1ec7p\t,\uc804\ubb38\uc131,\u30d7\u30ed\u30d5\u30a7\u30c3\u30b7\u30e7\u30ca\u30eb,\nabout_key_value_professionalism_description,"Continuous learning and improvement, aiming to become a global enterprise highly valued by customers\t","H\u1ecdc h\u1ecfi v\xe0 c\u1ea3i ti\u1ebfn li\xean t\u1ee5c, h\u01b0\u1edbng t\u1edbi m\u1ed9t doanh nghi\u1ec7p to\xe0n c\u1ea7u, \u0111\u01b0\u1ee3c kh\xe1ch h\xe0ng \u0111\xe1nh gi\xe1 cao\t",\uc9c0\uc18d\uc801\uc778 \ud559\uc2b5\uacfc \uac1c\uc120\uc744 \ud1b5\ud574 \uace0\uac1d\uc73c\ub85c\ubd80\ud130 \ub192\uc740 \ud3c9\uac00\ub97c \ubc1b\ub294 \uae00\ub85c\ubc8c \uae30\uc5c5 \uc9c0\ud5a5\t,\u7d99\u7d9a\u7684\u306a\u5b66\u7fd2\u3068\u6539\u5584\u3092\u901a\u3058\u3066\u3001\u9867\u5ba2\u304b\u3089\u9ad8\u304f\u8a55\u4fa1\u3055\u308c\u308b\u30b0\u30ed\u30fc\u30d0\u30eb\u4f01\u696d\u3092\u76ee\u6307\u3059,\nabout_key_value_smile_title,Working for your smile\t,L\xe0m vi\u1ec7c v\xec n\u1ee5 c\u01b0\u1eddi c\u1ee7a b\u1ea1n\t,\ub2f9\uc2e0\uc758 \ubbf8\uc18c\ub97c \uc704\ud55c \uc77c\t,\u3042\u306a\u305f\u306e\u7b11\u9854\u306e\u305f\u3081\u306b\u50cd\u304f,\nabout_key_value_smile_description,"\u201cYou\u201d includes colleagues, customers, and stakeholders. The company\u2019s purpose is to bring smiles to customers, earn their high appreciation, and bring happiness to employees. This is one of the core spiritual values the company strives to build, as we understand that only with a joyful, optimistic, and passionate spirit can we live and work effectively.","\u201cB\u1ea1n\u201d bao g\u1ed3m \u0111\u1ed3ng nghi\u1ec7p, kh\xe1ch h\xe0ng v\xe0 c\xe1c b\xean li\xean quan. M\u1ee5c \u0111\xedch ho\u1ea1t \u0111\u1ed9ng c\u1ee7a c\xf4ng ty l\xe0 mang l\u1ea1i n\u1ee5 c\u01b0\u1eddi cho kh\xe1ch h\xe0ng, nh\u1eadn \u0111\u01b0\u1ee3c s\u1ef1 \u0111\xe1nh gi\xe1 cao c\u1ee7a h\u1ecd v\xe0 mang l\u1ea1i h\u1ea1nh ph\xfac cho nh\xe2n vi\xean. \u0110\xe2y l\xe0 m\u1ed9t trong nh\u1eefng gi\xe1 tr\u1ecb tinh th\u1ea7n c\u1ed1t l\xf5i m\xe0 c\xf4ng ty lu\xf4n mu\u1ed1n t\u1ea1o d\u1ef1ng, b\u1edfi ch\xfang t\xf4i hi\u1ec3u r\u1eb1ng ch\u1ec9 c\xf3 tinh th\u1ea7n vui v\u1ebb, l\u1ea1c quan v\xe0 nhi\u1ec7t huy\u1ebft th\xec ch\xfang ta m\u1edbi c\xf3 th\u1ec3 s\u1ed1ng v\xe0 l\xe0m vi\u1ec7c hi\u1ec7u qu\u1ea3.","\u201c\ub2f9\uc2e0\u201d\uc740 \ub3d9\ub8cc, \uace0\uac1d, \uc774\ud574\uad00\uacc4\uc790\ub97c \ud3ec\ud568\ud569\ub2c8\ub2e4. \ud68c\uc0ac\uc758 \ubaa9\uc801\uc740 \uace0\uac1d\uc5d0\uac8c \ubbf8\uc18c\ub97c \uc120\uc0ac\ud558\uace0, \ub192\uc740 \ud3c9\uac00\ub97c \ubc1b\uc73c\uba70, \uc9c1\uc6d0\ub4e4\uc5d0\uac8c \ud589\ubcf5\uc744 \uac00\uc838\ub2e4\uc8fc\ub294 \uac83\uc785\ub2c8\ub2e4. \uc774\ub294 \ud68c\uc0ac\uac00 \ud56d\uc0c1 \uad6c\ucd95\ud558\uace0\uc790 \ud558\ub294 \ud575\uc2ec \uc815\uc2e0\uc801 \uac00\uce58 \uc911 \ud558\ub098\ub85c, \uc990\uac81\uace0 \ub099\uad00\uc801\uc774\uba70 \uc5f4\uc815\uc801\uc778 \uc815\uc2e0\uc774 \uc788\uc5b4\uc57c\ub9cc \ud6a8\uacfc\uc801\uc73c\ub85c \uc0dd\ud65c\ud558\uace0 \uc77c\ud560 \uc218 \uc788\ub2e4\uace0 \uc774\ud574\ud569\ub2c8\ub2e4.",\u300c\u3042\u306a\u305f\u300d\u3068\u306f\u3001\u540c\u50da\u3001\u9867\u5ba2\u3001\u95a2\u4fc2\u8005\u3092\u542b\u307f\u307e\u3059\u3002\u4f1a\u793e\u306e\u76ee\u7684\u306f\u3001\u9867\u5ba2\u306b\u7b11\u9854\u3092\u3082\u305f\u3089\u3057\u3001\u9ad8\u3044\u8a55\u4fa1\u3092\u5f97\u3066\u3001\u5f93\u696d\u54e1\u306b\u5e78\u798f\u3092\u3082\u305f\u3089\u3059\u3053\u3068\u3067\u3059\u3002\u3053\u308c\u306f\u4f1a\u793e\u304c\u5e38\u306b\u69cb\u7bc9\u3057\u305f\u3044\u30b3\u30a2\u306a\u7cbe\u795e\u4fa1\u5024\u306e\u4e00\u3064\u3067\u3042\u308a\u3001\u697d\u3057\u304f\u3001\u697d\u89b3\u7684\u3067\u3001\u60c5\u71b1\u7684\u306a\u7cbe\u795e\u304c\u3042\u3063\u3066\u3053\u305d\u3001\u52b9\u679c\u7684\u306b\u751f\u6d3b\u3057\u3001\u50cd\u304f\u3053\u3068\u304c\u3067\u304d\u308b\u3068\u7406\u89e3\u3057\u3066\u3044\u307e\u3059\u3002,\nabout_culture_title,Culture,V\u0103n h\xf3a\t,\ubb38\ud654,\u6587\u5316,\nabout_culture_sub_title,"A dynamic, creative, and human-centered work environment.","M\xf4i tr\u01b0\u1eddng l\xe0m vi\u1ec7c n\u0103ng \u0111\u1ed9ng, s\xe1ng t\u1ea1o v\xe0 nh\xe2n v\u0103n",\uc5ed\ub3d9\uc801\uc774\uace0 \ucc3d\uc758\uc801\uc774\uba70 \uc778\uac04 \uc911\uc2ec\uc801\uc778 \uadfc\ubb34 \ud658\uacbd\uc785\ub2c8\ub2e4.,\u6d3b\u6c17\u304c\u3042\u308a\u3001\u5275\u9020\u7684\u3067\u3001\u4eba\u9593\u5473\u306e\u3042\u308b\u8077\u5834\u74b0\u5883\u3067\u3059\u3002,\nabout_culture_description,"At CROSS, we believe that culture is the soul of the enterprise. CROSS\u2019s culture is built on the foundation of respect, collaboration, and sustainable development, where every individual is heard, developed, and inspired daily. We encourage an open, transparent, and creative work environment where every member has the opportunity to contribute ideas and collectively realize great things. The entrepreneurial spirit, continuous learning, and mutual support drive us forward every day. CROSS is not just a workplace but a shared home for passionate and responsible individuals\u2014together creating real value for education, technology, and the community.","T\u1ea1i CROSS, ch\xfang t\xf4i tin r\u1eb1ng v\u0103n h\xf3a l\xe0 linh h\u1ed3n c\u1ee7a doanh nghi\u1ec7p. V\u0103n h\xf3a c\u1ee7a CROSS \u0111\u01b0\u1ee3c x\xe2y d\u1ef1ng tr\xean n\u1ec1n t\u1ea3ng c\u1ee7a s\u1ef1 t\xf4n tr\u1ecdng, h\u1ee3p t\xe1c v\xe0 ph\xe1t tri\u1ec3n b\u1ec1n v\u1eefng\u2014n\u01a1i m\u1ed7i c\xe1 nh\xe2n \u0111\u1ec1u \u0111\u01b0\u1ee3c l\u1eafng nghe, ph\xe1t tri\u1ec3n v\xe0 truy\u1ec1n c\u1ea3m h\u1ee9ng m\u1ed7i ng\xe0y. Ch\xfang t\xf4i khuy\u1ebfn kh\xedch m\u1ed9t m\xf4i tr\u01b0\u1eddng l\xe0m vi\u1ec7c c\u1edfi m\u1edf, minh b\u1ea1ch v\xe0 s\xe1ng t\u1ea1o, n\u01a1i m\u1ecdi th\xe0nh vi\xean \u0111\u1ec1u c\xf3 c\u01a1 h\u1ed9i \u0111\xf3ng g\xf3p \xfd t\u01b0\u1edfng v\xe0 c\xf9ng nhau hi\u1ec7n th\u1ef1c h\xf3a nh\u1eefng \u0111i\u1ec1u l\u1edbn lao. Tinh th\u1ea7n kh\u1edfi nghi\u1ec7p, h\u1ecdc h\u1ecfi kh\xf4ng ng\u1eebng v\xe0 s\u1ef1 h\u1ed7 tr\u1ee3 l\u1eabn nhau ch\xednh l\xe0 \u0111\u1ed9ng l\u1ef1c gi\xfap ch\xfang t\xf4i ti\u1ebfn b\u01b0\u1edbc m\u1ed7i ng\xe0y. CROSS kh\xf4ng ch\u1ec9 l\xe0 n\u01a1i l\xe0m vi\u1ec7c, m\xe0 c\xf2n l\xe0 m\xe1i nh\xe0 chung cho nh\u1eefng con ng\u01b0\u1eddi \u0111\u1ea7y \u0111am m\xea v\xe0 tr\xe1ch nhi\u1ec7m\u2014c\xf9ng nhau ki\u1ebfn t\u1ea1o nh\u1eefng gi\xe1 tr\u1ecb th\u1ef1c cho gi\xe1o d\u1ee5c, c\xf4ng ngh\u1ec7 v\xe0 c\u1ed9ng \u0111\u1ed3ng.","\ud06c\ub85c\uc2a4\uc5d0\uc11c\ub294 \ubb38\ud654\uac00 \uae30\uc5c5\uc758 \uc601\ud63c\uc774\ub77c\uace0 \ubbff\uc2b5\ub2c8\ub2e4. \ud06c\ub85c\uc2a4\uc758 \ubb38\ud654\ub294 \uc874\uc911, \ud611\ub825, \uc9c0\uc18d \uac00\ub2a5\ud55c \ubc1c\uc804\uc744 \uae30\ubc18\uc73c\ub85c \uad6c\ucd95\ub418\uc5c8\uc73c\uba70, \ubaa8\ub4e0 \uac1c\uc778\uc774 \ub9e4\uc77c \uacbd\uccad\ubc1b\uace0, \ubc1c\uc804\ud558\uba70, \uc601\uac10\uc744 \ubc1b\ub294 \uacf3\uc785\ub2c8\ub2e4. \uc6b0\ub9ac\ub294 \uac1c\ubc29\uc801\uc774\uace0 \ud22c\uba85\ud558\uba70 \ucc3d\uc758\uc801\uc778 \uc5c5\ubb34 \ud658\uacbd\uc744 \uc7a5\ub824\ud558\uc5ec \ubaa8\ub4e0 \uad6c\uc131\uc6d0\uc774 \uc544\uc774\ub514\uc5b4\ub97c \uae30\uc5ec\ud558\uace0 \ud568\uaed8 \ud070 \uac83\uc744 \uc2e4\ud604\ud560 \uae30\ud68c\ub97c \uac16\uc2b5\ub2c8\ub2e4. \uae30\uc5c5\uac00 \uc815\uc2e0, \ub04a\uc784\uc5c6\ub294 \ud559\uc2b5, \uc0c1\ud638 \uc9c0\uc6d0\uc740 \uc6b0\ub9ac\ub97c \ub9e4\uc77c \ub354 \ub098\uc544\uac00\uac8c \ud569\ub2c8\ub2e4. \ud06c\ub85c\uc2a4\ub294 \ub2e8\uc21c\ud55c \uc9c1\uc7a5\uc774 \uc544\ub2c8\ub77c \uc5f4\uc815\uacfc \ucc45\uc784\uac10\uc73c\ub85c \uac00\ub4dd\ud55c \uc0ac\ub78c\ub4e4\uc758 \uacf5\ub3d9\uc758 \uc9d1\uc774\uba70, \uad50\uc721, \uae30\uc220, \ucee4\ubba4\ub2c8\ud2f0\ub97c \uc704\ud574 \uc9c4\uc815\ud55c \uac00\uce58\ub97c \ud568\uaed8 \ucc3d\uc870\ud569\ub2c8\ub2e4.",\u30af\u30ed\u30b9\u3067\u306f\u3001\u6587\u5316\u304c\u4f01\u696d\u306e\u9b42\u3067\u3042\u308b\u3068\u4fe1\u3058\u3066\u3044\u307e\u3059\u3002\u30af\u30ed\u30b9\u306e\u6587\u5316\u306f\u3001\u5c0a\u656c\u3001\u5354\u529b\u3001\u6301\u7d9a\u53ef\u80fd\u306a\u767a\u5c55\u3092\u57fa\u76e4\u3068\u3057\u3066\u69cb\u7bc9\u3055\u308c\u3066\u304a\u308a\u3001\u3059\u3079\u3066\u306e\u500b\u4eba\u304c\u6bce\u65e5\u3001\u8033\u3092\u50be\u3051\u3089\u308c\u3001\u6210\u9577\u3057\u3001\u30a4\u30f3\u30b9\u30d4\u30ec\u30fc\u30b7\u30e7\u30f3\u3092\u53d7\u3051\u308b\u5834\u6240\u3067\u3059\u3002\u79c1\u305f\u3061\u306f\u3001\u30aa\u30fc\u30d7\u30f3\u3067\u900f\u660e\u304b\u3064\u5275\u9020\u7684\u306a\u8077\u5834\u74b0\u5883\u3092\u5968\u52b1\u3057\u3001\u3059\u3079\u3066\u306e\u30e1\u30f3\u30d0\u30fc\u304c\u30a2\u30a4\u30c7\u30a2\u3092\u51fa\u3057\u5408\u3044\u3001\u5171\u306b\u5927\u304d\u306a\u3053\u3068\u3092\u5b9f\u73fe\u3059\u308b\u6a5f\u4f1a\u3092\u6301\u3063\u3066\u3044\u307e\u3059\u3002\u8d77\u696d\u5bb6\u7cbe\u795e\u3001\u7d76\u3048\u9593\u306a\u3044\u5b66\u3073\u3001\u76f8\u4e92\u652f\u63f4\u304c\u79c1\u305f\u3061\u3092\u65e5\u3005\u524d\u9032\u3055\u305b\u307e\u3059\u3002\u30af\u30ed\u30b9\u306f\u5358\u306a\u308b\u8077\u5834\u3067\u306f\u306a\u304f\u3001\u60c5\u71b1\u3068\u8cac\u4efb\u611f\u306b\u6e80\u3061\u305f\u4eba\u3005\u306e\u5171\u6709\u306e\u5bb6\u3067\u3042\u308a\u3001\u6559\u80b2\u3001\u30c6\u30af\u30ce\u30ed\u30b8\u30fc\u3001\u30b3\u30df\u30e5\u30cb\u30c6\u30a3\u306e\u305f\u3081\u306b\u672c\u5f53\u306e\u4fa1\u5024\u3092\u5171\u306b\u5275\u9020\u3057\u307e\u3059\u3002,\nabout_culture_card_fun_title,Team-building,Team-building,\ud300\ube4c\ub529 ,\u30c1\u30fc\u30e0\u30d3\u30eb\u30c7\u30a3\u30f3\u30b0 ,\nabout_culture_card_fun_content,"Regular team building activities, annual company trips, sports, and entertainment events are organized to strengthen the bond among company members.","C\xe1c ho\u1ea1t \u0111\u1ed9ng team building, du l\u1ecbch th\u01b0\u1eddng ni\xean, th\u1ec3 thao v\xe0 gi\u1ea3i tr\xed \u0111\u01b0\u1ee3c t\u1ed5 ch\u1ee9c \u0111\u1ecbnh k\u1ef3 nh\u1eb1m t\u0103ng c\u01b0\u1eddng s\u1ef1 g\u1eafn k\u1ebft gi\u1eefa c\xe1c th\xe0nh vi\xean trong c\xf4ng ty.","\ud300\uc6cc\ud06c\ub97c \uac15\ud654\ud558\uace0 \ud68c\uc0ac \uad6c\uc131\uc6d0 \uac04\uc758 \uc720\ub300\uac10\uc744 \uc99d\uc9c4\ud558\uae30 \uc704\ud574 \ud300 \ube4c\ub529 \ud65c\ub3d9, \uc5f0\ub840 \ud68c\uc0ac \uc5ec\ud589, \uc2a4\ud3ec\uce20 \ubc0f \uc5d4\ud130\ud14c\uc778\uba3c\ud2b8 \ud589\uc0ac\ub97c \uc815\uae30\uc801\uc73c\ub85c \uac1c\ucd5c\ud569\ub2c8\ub2e4.",\u793e\u5185\u306e\u7d50\u675f\u529b\u3092\u9ad8\u3081\u308b\u305f\u3081\u3001\u5b9a\u671f\u7684\u306b\u30c1\u30fc\u30e0\u30d3\u30eb\u30c7\u30a3\u30f3\u30b0\u6d3b\u52d5\u3001\u793e\u54e1\u65c5\u884c\u3001\u30b9\u30dd\u30fc\u30c4\u3001\u30ec\u30af\u30ea\u30a8\u30fc\u30b7\u30e7\u30f3\u30a4\u30d9\u30f3\u30c8\u304c\u958b\u50ac\u3055\u308c\u307e\u3059\u3002,\nabout_culture_card_award_title,Achievement Recognition,Ghi nh\u1eadn th\xe0nh t\xedch,\uc131\uacfc \uc778\uc815,\u6210\u679c\u306e\u8868\u5f70,\nabout_culture_card_award_content,Employee recognition and reward program that acknowledges contributions fairly and promptly.,Ch\u01b0\u01a1ng tr\xecnh khen th\u01b0\u1edfng v\xe0 ghi nh\u1eadn \u0111\xf3ng g\xf3p c\u1ee7a nh\xe2n vi\xean m\u1ed9t c\xe1ch c\xf4ng b\u1eb1ng v\xe0 k\u1ecbp th\u1eddi.,\uc9c1\uc6d0\uc758 \uacf5\ud5cc\uc744 \uacf5\uc815\ud558\uace0 \uc2e0\uc18d\ud558\uac8c \uc778\uc815\ud558\uace0 \ubcf4\uc0c1\ud558\ub294 \ud504\ub85c\uadf8\ub7a8.,"\u516c\u5e73\u304b\u3064\u30bf\u30a4\u30e0\u30ea\u30fc\u306b\u8ca2\u732e\u3092\u8a8d\u3081\u3001\u5831\u5968\u3059\u308b\u5f93\u696d\u54e1\u8868\u5f70\u30d7\u30ed\u30b0\u30e9\u30e0\u3002\n",\nabout_culture_card_welfare_title,Health & Well-being,S\u1ee9c kh\u1ecfe & Ph\xfac l\u1ee3i,\uac74\uac15 \ubc0f \ubcf5\uc9c0, \u5065\u5eb7\u3068\u798f\u7949,\nabout_culture_card_welfare_content,"Comprehensive insurance coverage, regular health check-ups, and healthcare programs.","Ch\u1ebf \u0111\u1ed9 b\u1ea3o hi\u1ec3m to\xe0n di\u1ec7n, kh\xe1m s\u1ee9c kh\u1ecfe \u0111\u1ecbnh k\u1ef3 v\xe0 c\xe1c ch\u01b0\u01a1ng tr\xecnh ch\u0103m s\xf3c s\u1ee9c kh\u1ecfe.","\uc885\ud569 \ubcf4\ud5d8, \uc815\uae30 \uac74\uac15 \uac80\uc9c4 \ubc0f \uac74\uac15 \uad00\ub9ac \ud504\ub85c\uadf8\ub7a8. ",\u5305\u62ec\u7684\u306a\u4fdd\u967a\u3001\u5b9a\u671f\u5065\u5eb7\u8a3a\u65ad\u3001\u304a\u3088\u3073\u5065\u5eb7\u7ba1\u7406\u30d7\u30ed\u30b0\u30e9\u30e0\u3002,\npricing_heading,Price List,B\u1ea3ng Gi\xe1 D\u1ecbch V\u1ee5,\uc11c\ube44\uc2a4 \uac00\uaca9\ud45c,\u30b5\u30fc\u30d3\u30b9\u6599\u91d1\u8868,\npricing_subtitle,"We specialize in designing and developing websites, Flutter apps, UI/UX, and landing pages, as well as system maintenance for businesses, startups, and individuals. Refer to our prices below, and contact us for detailed consultation and special offers!","Ch\xfang t\xf4i chuy\xean thi\u1ebft k\u1ebf, ph\xe1t tri\u1ec3n website, app Flutter, UI/UX, landing page v\xe0 b\u1ea3o tr\xec h\u1ec7 th\u1ed1ng cho doanh nghi\u1ec7p, startup, c\xe1 nh\xe2n. Gi\xe1 tham kh\u1ea3o d\u01b0\u1edbi \u0111\xe2y, li\xean h\u1ec7 \u0111\u1ec3 nh\u1eadn t\u01b0 v\u1ea5n chi ti\u1ebft v\xe0 \u01b0u \u0111\xe3i!","\uc800\ud76c\ub294 \uae30\uc5c5, \uc2a4\ud0c0\ud2b8\uc5c5, \uac1c\uc778\uc744 \uc704\ud55c \uc6f9\uc0ac\uc774\ud2b8, Flutter \uc571, UI/UX, \ub79c\ub529 \ud398\uc774\uc9c0 \uc124\uacc4 \ubc0f \uac1c\ubc1c\uacfc \uc2dc\uc2a4\ud15c \uc720\uc9c0\ubcf4\uc218\ub97c \uc804\ubb38\uc73c\ub85c \ud569\ub2c8\ub2e4. \uc544\ub798\uc5d0\uc11c \ucc38\uace0 \uac00\uaca9\uc744 \ud655\uc778\ud558\uc2dc\uace0, \uc790\uc138\ud55c \uc0c1\ub2f4 \ubc0f \ud2b9\ubcc4 \ud560\uc778\uc744 \ubc1b\uc73c\ub824\uba74 \ubb38\uc758\ud574\uc8fc\uc138\uc694!",\u79c1\u305f\u3061\u306f\u3001\u4f01\u696d\u3001\u30b9\u30bf\u30fc\u30c8\u30a2\u30c3\u30d7\u3001\u500b\u4eba\u5411\u3051\u306b\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u3001Flutter\u30a2\u30d7\u30ea\u3001UI/UX\u3001\u30e9\u30f3\u30c7\u30a3\u30f3\u30b0\u30da\u30fc\u30b8\u306e\u8a2d\u8a08\u30fb\u958b\u767a\u3001\u304a\u3088\u3073\u30b7\u30b9\u30c6\u30e0\u4fdd\u5b88\u3092\u5c02\u9580\u3068\u3057\u3066\u3044\u307e\u3059\u3002\u53c2\u8003\u4fa1\u683c\u306f\u4ee5\u4e0b\u306e\u901a\u308a\u3067\u3059\u3002\u8a73\u7d30\u306a\u3054\u76f8\u8ac7\u3084\u7279\u5225\u5272\u5f15\u306b\u3064\u3044\u3066\u306f\u3001\u304a\u6c17\u8efd\u306b\u304a\u554f\u3044\u5408\u308f\u305b\u304f\u3060\u3055\u3044\uff01,\npricing_web_title,"ADSDIGI Website Design Service Price List\n\n",B\u1ea3ng Gi\xe1 D\u1ecbch V\u1ee5 Thi\u1ebft K\u1ebf Website ADSDIGI,ADSDIGI \uc6f9\uc0ac\uc774\ud2b8 \ub514\uc790\uc778 \uc11c\ube44\uc2a4 \uac00\uaca9\ud45c,ADSDIGI \u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u30c7\u30b6\u30a4\u30f3\u30b5\u30fc\u30d3\u30b9\u6599\u91d1\u8868,\npricing_web_planes,Website design with basic draft | Free .com domain for the first year | Free hosting for the first year | Unlimited bandwidth | 5GB data limit | Standard UX/UI interface | Optimized for desktop interface | Optimized for mobile interface | 1 year free warranty,Thi\u1ebft k\u1ebf website c\xf3 b\u1ea3n th\u1ea3o c\u01a1 b\u1ea3n | Mi\u1ec5n ph\xed mi\u1ec1n .com n\u0103m \u0111\u1ea7u | Mi\u1ec5n ph\xed hosting n\u0103m \u0111\u1ea7u | B\u0103ng th\xf4ng kh\xf4ng gi\u1edbi h\u1ea1n | Data gi\u1edbi h\u1ea1n 5GB | Giao di\u1ec7n chu\u1ea9n UX/UI | T\u1ed1i \u01b0u giao di\u1ec7n m\xe1y t\xednh | T\u1ed1i \u01b0u giao di\u1ec7n \u0111i\u1ec7n tho\u1ea1i | B\u1ea3o h\xe0nh mi\u1ec5n ph\xed 1 n\u0103m,"\uae30\ubcf8 \ucd08\uc548 \uc6f9\uc0ac\uc774\ud2b8 \ub514\uc790\uc778 | .com \ub3c4\uba54\uc778 \uccab \ud574 \ubb34\ub8cc | \ud638\uc2a4\ud305 \uccab \ud574 \ubb34\ub8cc | \ubb34\uc81c\ud55c \ub300\uc5ed\ud3ed | \ub370\uc774\ud130 5GB \uc81c\ud55c | \ud45c\uc900 UX/UI \uc778\ud130\ud398\uc774\uc2a4 | \ub370\uc2a4\ud06c\ud1b1 \uc778\ud130\ud398\uc774\uc2a4 \ucd5c\uc801\ud654 | \ubaa8\ubc14\uc77c \uc778\ud130\ud398\uc774\uc2a4 \ucd5c\uc801\ud654 | 1\ub144 \ubb34\uc0c1 \ubcf4\uc99d\n",\u57fa\u672c\u30c9\u30e9\u30d5\u30c8\u4ed8\u304d\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u30c7\u30b6\u30a4\u30f3 | .com \u30c9\u30e1\u30a4\u30f3\u521d\u5e74\u5ea6\u7121\u6599 | \u30db\u30b9\u30c6\u30a3\u30f3\u30b0\u521d\u5e74\u5ea6\u7121\u6599 | \u7121\u5236\u9650\u306e\u5e2f\u57df\u5e45 | \u30c7\u30fc\u30bf5GB\u5236\u9650 | \u6a19\u6e96UX/UI\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9 | \u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u6700\u9069\u5316 | \u30e2\u30d0\u30a4\u30eb\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u6700\u9069\u5316 | 1\u5e74\u9593\u7121\u6599\u4fdd\u8a3c,\npricing_web_planes_money,$138 - $158,3.500.000\u0111 - 4.000.000\u0111,"\u20a9189,000 - \u20a9216,000\t","\xa521,000 - \xa524,000\n\n",\npricing_web_basic,Advanced website design based on requirements | Free .com domain for the first year | Free hosting for the first year | Unlimited bandwidth | 10GB data limit | UX/UI standard design | Optimized for desktop interface | Optimized for mobile interface | Logo and banner design support | Setup support for 1 Google Ads campaign | 1-year free warranty,"Thi\u1ebft k\u1ebf website n\xe2ng cao theo y\xeau c\u1ea7u | Mi\u1ec5n ph\xed mi\u1ec1n .com n\u0103m \u0111\u1ea7u | Mi\u1ec5n ph\xed hosting n\u0103m \u0111\u1ea7u | B\u0103ng th\xf4ng kh\xf4ng gi\u1edbi h\u1ea1n | Data gi\u1edbi h\u1ea1n 10GB | Giao di\u1ec7n chu\u1ea9n UX/UI | T\u1ed1i \u01b0u giao di\u1ec7n m\xe1y t\xednh | T\u1ed1i \u01b0u giao di\u1ec7n \u0111i\u1ec7n tho\u1ea1i | H\u1ed7 tr\u1ee3 thi\u1ebft k\u1ebf logo, banner | H\u1ed7 tr\u1ee3 setup 1 chi\u1ebfn d\u1ecbch Google Ads | B\u1ea3o h\xe0nh mi\u1ec5n ph\xed 1 n\u0103m",\ub9de\ucda4\ud615 \uace0\uae09 \uc6f9\uc0ac\uc774\ud2b8 \ub514\uc790\uc778 | \uccab \ud574 .com \ub3c4\uba54\uc778 \ubb34\ub8cc \uc81c\uacf5 | \uccab \ud574 \ud638\uc2a4\ud305 \ubb34\ub8cc \uc81c\uacf5 | \ubb34\uc81c\ud55c \ud2b8\ub798\ud53d | \ub370\uc774\ud130 \uc6a9\ub7c9 10GB \uc81c\ud55c | UX/UI \ud45c\uc900 \ub514\uc790\uc778 | \ub370\uc2a4\ud06c\ud0d1 \ud654\uba74 \ucd5c\uc801\ud654 | \ubaa8\ubc14\uc77c \ud654\uba74 \ucd5c\uc801\ud654 | \ub85c\uace0 \ubc0f \ubc30\ub108 \ub514\uc790\uc778 \uc9c0\uc6d0 | Google Ads \ucea0\ud398\uc778 1\ud68c \uc124\uc815 \uc9c0\uc6d0 | 1\ub144 \ubb34\ub8cc \ubcf4\uc99d \uc81c\uacf5,\u3054\u8981\u671b\u306b\u5fdc\u3058\u305f\u9ad8\u6a5f\u80fd\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u5236\u4f5c | \u521d\u5e74\u5ea6 .com\u30c9\u30e1\u30a4\u30f3\u7121\u6599 | \u521d\u5e74\u5ea6\u30db\u30b9\u30c6\u30a3\u30f3\u30b0\u7121\u6599 | \u7121\u5236\u9650\u306e\u5e2f\u57df\u5e45 | \u30c7\u30fc\u30bf\u5bb9\u91cf10GB\u5236\u9650 | UX/UI\u6a19\u6e96\u30c7\u30b6\u30a4\u30f3 | \u30d1\u30bd\u30b3\u30f3\u5411\u3051\u753b\u9762\u6700\u9069\u5316 | \u30b9\u30de\u30db\u5411\u3051\u753b\u9762\u6700\u9069\u5316 | \u30ed\u30b4\u30fb\u30d0\u30ca\u30fc\u30c7\u30b6\u30a4\u30f3\u30b5\u30dd\u30fc\u30c8 | Google\u5e83\u544a\u30ad\u30e3\u30f3\u30da\u30fc\u30f31\u4ef6\u306e\u8a2d\u5b9a\u30b5\u30dd\u30fc\u30c8 | 1\u5e74\u9593\u306e\u7121\u6599\u4fdd\u8a3c,\npricing_web_basic_money,$138 \u2013 $158,4.500.000\u0111 - 5.500.000\u0111,"\u20a9189,000 \u2013 \u20a9216,00","\xa521,000 \u2013 \xa524,000",\npricing_web_medium,Advanced website design based on requirements | Free .com domain for the first year | Free hosting for the first year | Unlimited bandwidth | 15GB data limit | UX/UI standard design | Optimized for desktop interface | Optimized for mobile interface | Logo and banner design support | Setup support for 2 Google Ads campaigns | 1-year free warranty,"Thi\u1ebft k\u1ebf website n\xe2ng cao theo y\xeau c\u1ea7u | Mi\u1ec5n ph\xed mi\u1ec1n .com n\u0103m \u0111\u1ea7u | Mi\u1ec5n ph\xed hosting n\u0103m \u0111\u1ea7u | B\u0103ng th\xf4ng kh\xf4ng gi\u1edbi h\u1ea1n | Data gi\u1edbi h\u1ea1n 15GB | Giao di\u1ec7n chu\u1ea9n UX/UI | T\u1ed1i \u01b0u giao di\u1ec7n m\xe1y t\xednh | T\u1ed1i \u01b0u giao di\u1ec7n \u0111i\u1ec7n tho\u1ea1i | H\u1ed7 tr\u1ee3 thi\u1ebft k\u1ebf logo, banner | H\u1ed7 tr\u1ee3 setup 2 chi\u1ebfn d\u1ecbch Google Ads | B\u1ea3o h\xe0nh mi\u1ec5n ph\xed 1 n\u0103m",\ub9de\ucda4\ud615 \uace0\uae09 \uc6f9\uc0ac\uc774\ud2b8 \ub514\uc790\uc778 | \uccab \ud574 .com \ub3c4\uba54\uc778 \ubb34\ub8cc \uc81c\uacf5 | \uccab \ud574 \ud638\uc2a4\ud305 \ubb34\ub8cc \uc81c\uacf5 | \ubb34\uc81c\ud55c \ud2b8\ub798\ud53d | \ub370\uc774\ud130 \uc6a9\ub7c9 15GB \uc81c\ud55c | UX/UI \ud45c\uc900 \ub514\uc790\uc778 | \ub370\uc2a4\ud06c\ud0d1 \ud654\uba74 \ucd5c\uc801\ud654 | \ubaa8\ubc14\uc77c \ud654\uba74 \ucd5c\uc801\ud654 | \ub85c\uace0 \ubc0f \ubc30\ub108 \ub514\uc790\uc778 \uc9c0\uc6d0 | Google Ads \ucea0\ud398\uc778 2\ud68c \uc124\uc815 \uc9c0\uc6d0 | 1\ub144 \ubb34\ub8cc \ubcf4\uc99d \uc81c\uacf5,\u3054\u8981\u671b\u306b\u5fdc\u3058\u305f\u9ad8\u6a5f\u80fd\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u5236\u4f5c | \u521d\u5e74\u5ea6 .com\u30c9\u30e1\u30a4\u30f3\u7121\u6599 | \u521d\u5e74\u5ea6\u30db\u30b9\u30c6\u30a3\u30f3\u30b0\u7121\u6599 | \u7121\u5236\u9650\u306e\u5e2f\u57df\u5e45 | \u30c7\u30fc\u30bf\u5bb9\u91cf15GB\u5236\u9650 | UX/UI\u6a19\u6e96\u30c7\u30b6\u30a4\u30f3 | \u30d1\u30bd\u30b3\u30f3\u5411\u3051\u753b\u9762\u6700\u9069\u5316 | \u30b9\u30de\u30db\u5411\u3051\u753b\u9762\u6700\u9069\u5316 | \u30ed\u30b4\u30fb\u30d0\u30ca\u30fc\u30c7\u30b6\u30a4\u30f3\u30b5\u30dd\u30fc\u30c8 | Google\u5e83\u544a\u30ad\u30e3\u30f3\u30da\u30fc\u30f32\u4ef6\u306e\u8a2d\u5b9a\u30b5\u30dd\u30fc\u30c8 | 1\u5e74\u9593\u306e\u7121\u6599\u4fdd\u8a3c,\npricing_web_medium_money,$184 \u2013 $246,6.000.000\u0111 - 8.000.000\u0111,"\u20a9252,000 \u2013 \u20a9336,000","\xa528,000 \u2013 \xa537,000",\npricing_web_premium,Custom website design based on your own idea | Free .com domain for the first year | Free hosting for the first year | Unlimited bandwidth | 20GB data limit | UX/UI standard design | Optimized for desktop interface | Optimized for mobile interface | Logo and banner design support | Setup support for 5 Google Ads campaigns | 1-year free warranty,"Thi\u1ebft k\u1ebf website theo \xfd t\u01b0\u1edfng ri\xeang | Mi\u1ec5n ph\xed mi\u1ec1n .com n\u0103m \u0111\u1ea7u | Mi\u1ec5n ph\xed hosting n\u0103m \u0111\u1ea7u | B\u0103ng th\xf4ng kh\xf4ng gi\u1edbi h\u1ea1n | Data gi\u1edbi h\u1ea1n 20GB | Giao di\u1ec7n chu\u1ea9n UX/UI | T\u1ed1i \u01b0u giao di\u1ec7n m\xe1y t\xednh | T\u1ed1i \u01b0u giao di\u1ec7n \u0111i\u1ec7n tho\u1ea1i | H\u1ed7 tr\u1ee3 thi\u1ebft k\u1ebf logo, banner | H\u1ed7 tr\u1ee3 setup 5 chi\u1ebfn d\u1ecbch Google Ads | B\u1ea3o h\xe0nh mi\u1ec5n ph\xed 1 n\u0103m",\uc544\uc774\ub514\uc5b4 \uae30\ubc18 \ub9de\ucda4\ud615 \uc6f9\uc0ac\uc774\ud2b8 \ub514\uc790\uc778 | \uccab \ud574 .com \ub3c4\uba54\uc778 \ubb34\ub8cc \uc81c\uacf5 | \uccab \ud574 \ud638\uc2a4\ud305 \ubb34\ub8cc \uc81c\uacf5 | \ubb34\uc81c\ud55c \ud2b8\ub798\ud53d | \ub370\uc774\ud130 \uc6a9\ub7c9 20GB \uc81c\ud55c | UX/UI \ud45c\uc900 \ub514\uc790\uc778 | \ub370\uc2a4\ud06c\ud0d1 \ud654\uba74 \ucd5c\uc801\ud654 | \ubaa8\ubc14\uc77c \ud654\uba74 \ucd5c\uc801\ud654 | \ub85c\uace0 \ubc0f \ubc30\ub108 \ub514\uc790\uc778 \uc9c0\uc6d0 | Google Ads \ucea0\ud398\uc778 5\ud68c \uc124\uc815 \uc9c0\uc6d0 | 1\ub144 \ubb34\ub8cc \ubcf4\uc99d \uc81c\uacf5,\u3042\u306a\u305f\u306e\u30a2\u30a4\u30c7\u30a2\u306b\u57fa\u3065\u304f\u30ab\u30b9\u30bf\u30e0\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u5236\u4f5c | \u521d\u5e74\u5ea6 .com\u30c9\u30e1\u30a4\u30f3\u7121\u6599 | \u521d\u5e74\u5ea6\u30db\u30b9\u30c6\u30a3\u30f3\u30b0\u7121\u6599 | \u7121\u5236\u9650\u306e\u5e2f\u57df\u5e45 | \u30c7\u30fc\u30bf\u5bb9\u91cf20GB\u5236\u9650 | UX/UI\u6a19\u6e96\u30c7\u30b6\u30a4\u30f3 | \u30d1\u30bd\u30b3\u30f3\u5411\u3051\u753b\u9762\u6700\u9069\u5316 | \u30b9\u30de\u30db\u5411\u3051\u753b\u9762\u6700\u9069\u5316 | \u30ed\u30b4\u30fb\u30d0\u30ca\u30fc\u30c7\u30b6\u30a4\u30f3\u30b5\u30dd\u30fc\u30c8 | Google\u5e83\u544a\u30ad\u30e3\u30f3\u30da\u30fc\u30f35\u4ef6\u306e\u8a2d\u5b9a\u30b5\u30dd\u30fc\u30c8 | 1\u5e74\u9593\u306e\u7121\u6599\u4fdd\u8a3c,\npricing_web_premium_money,"Detailed Consultation & Quotation\n","T\u01b0 v\u1ea5n & b\xe1o gi\xe1 chi ti\u1ebft, c\u1ee5 th\u1ec3",\uc0c1\uc138 \uc0c1\ub2f4 \ubc0f \uacac\uc801, \u8a73\u7d30\u306a\u3054\u76f8\u8ac7\u30fb\u304a\u898b\u7a4d\u3082\u308a,\npricing_landpage_title,"Landing Page Design Pricing\n",B\u1ea3ng Gi\xe1 D\u1ecbch V\u1ee5 Thi\u1ebft K\u1ebf Landipage,\ub79c\ub529\ud398\uc774\uc9c0 \ub514\uc790\uc778 \uac00\uaca9,\u30e9\u30f3\u30c7\u30a3\u30f3\u30b0\u30da\u30fc\u30b8\u30c7\u30b6\u30a4\u30f3\u6599\u91d1,\npricing_landpage_basic,Website Design with Basic Draft | Free .com domain for the first year | Unlimited bandwidth | UX/UI standard design | Optimized for desktop interface | Optimized for mobile interface | 1-year free warranty,Thi\u1ebft k\u1ebf website c\xf3 b\u1ea3n th\u1ea3o c\u01a1 b\u1ea3n | Mi\u1ec5n ph\xed mi\u1ec1n .com n\u0103m \u0111\u1ea7u | B\u0103ng th\xf4ng kh\xf4ng gi\u1edbi h\u1ea1n | Giao di\u1ec7n chu\u1ea9n UX/UI | T\u1ed1i \u01b0u giao di\u1ec7n m\xe1y t\xednh | T\u1ed1i \u01b0u giao di\u1ec7n \u0111i\u1ec7n tho\u1ea1i | B\u1ea3o h\xe0nh mi\u1ec5n ph\xed 1 n\u0103m,\uae30\ubcf8 \ucd08\uc548 \ud3ec\ud568 \uc6f9\uc0ac\uc774\ud2b8 \ub514\uc790\uc778 | \uccab \ud574 .com \ub3c4\uba54\uc778 \ubb34\ub8cc \uc81c\uacf5 | \ubb34\uc81c\ud55c \ud2b8\ub798\ud53d | UX/UI \ud45c\uc900 \ub514\uc790\uc778 | \ub370\uc2a4\ud06c\ud0d1 \ud654\uba74 \ucd5c\uc801\ud654 | \ubaa8\ubc14\uc77c \ud654\uba74 \ucd5c\uc801\ud654 | 1\ub144 \ubb34\ub8cc \ubcf4\uc99d \uc81c\uacf5,\u57fa\u672c\u69cb\u6210\u4ed8\u304d\u306e\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u5236\u4f5c | \u521d\u5e74\u5ea6 .com\u30c9\u30e1\u30a4\u30f3\u7121\u6599 | \u7121\u5236\u9650\u306e\u5e2f\u57df\u5e45 | UX/UI\u6a19\u6e96\u30c7\u30b6\u30a4\u30f3 | \u30d1\u30bd\u30b3\u30f3\u5411\u3051\u753b\u9762\u6700\u9069\u5316 | \u30b9\u30de\u30db\u5411\u3051\u753b\u9762\u6700\u9069\u5316 | 1\u5e74\u9593\u306e\u7121\u6599\u4fdd\u8a3c,\npricing_landpage_basic_money,$46,1.500.000\u0111,"\u20a969,000","\xa57,000",\npricing_landpage_medium,Advanced Website Design Based on Requirements | Free .com domain for the first year | Unlimited bandwidth | UX/UI standard design | Optimized for desktop interface | Optimized for mobile interface | Logo and banner design support | 1-year free warranty,"Thi\u1ebft k\u1ebf website n\xe2ng cao theo y\xeau c\u1ea7u | Mi\u1ec5n ph\xed mi\u1ec1n .com n\u0103m \u0111\u1ea7u | B\u0103ng th\xf4ng kh\xf4ng gi\u1edbi h\u1ea1n | Giao di\u1ec7n chu\u1ea9n UX/UI | T\u1ed1i \u01b0u giao di\u1ec7n m\xe1y t\xednh | T\u1ed1i \u01b0u giao di\u1ec7n \u0111i\u1ec7n tho\u1ea1i | H\u1ed7 tr\u1ee3 thi\u1ebft k\u1ebf logo, banner | B\u1ea3o h\xe0nh mi\u1ec5n ph\xed 1 n\u0103m",\uc694\uad6c\uc0ac\ud56d\uc5d0 \ub530\ub978 \uace0\uae09 \uc6f9\uc0ac\uc774\ud2b8 \ub514\uc790\uc778 | \uccab \ud574 .com \ub3c4\uba54\uc778 \ubb34\ub8cc \uc81c\uacf5 | \ubb34\uc81c\ud55c \ud2b8\ub798\ud53d | UX/UI \ud45c\uc900 \ub514\uc790\uc778 | \ub370\uc2a4\ud06c\ud0d1 \ud654\uba74 \ucd5c\uc801\ud654 | \ubaa8\ubc14\uc77c \ud654\uba74 \ucd5c\uc801\ud654 | \ub85c\uace0 \ubc0f \ubc30\ub108 \ub514\uc790\uc778 \uc9c0\uc6d0 | 1\ub144 \ubb34\ub8cc \ubcf4\uc99d \uc81c\uacf5,\u3054\u8981\u671b\u306b\u5fdc\u3058\u305f\u9ad8\u6a5f\u80fd\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u5236\u4f5c | \u521d\u5e74\u5ea6 .com\u30c9\u30e1\u30a4\u30f3\u7121\u6599 | \u7121\u5236\u9650\u306e\u5e2f\u57df\u5e45 | UX/UI\u6a19\u6e96\u30c7\u30b6\u30a4\u30f3 | \u30d1\u30bd\u30b3\u30f3\u5411\u3051\u753b\u9762\u6700\u9069\u5316 | \u30b9\u30de\u30db\u5411\u3051\u753b\u9762\u6700\u9069\u5316 | \u30ed\u30b4\u30fb\u30d0\u30ca\u30fc\u30c7\u30b6\u30a4\u30f3\u30b5\u30dd\u30fc\u30c8 | 1\u5e74\u9593\u306e\u7121\u6599\u4fdd\u8a3c,\npricing_landpage_medium_money,$77,2.500.000\u0111,"\u20a9115,000","\xa511,500",\npricing_landpage_premium,Custom Website Design Based on Your Own Idea | Free .com domain for the first year | Unlimited bandwidth | UX/UI standard design | Optimized for desktop interface | Optimized for mobile interface | Logo and banner design support | Setup support for 1 Google Ads campaign | 1-year free warranty,"Thi\u1ebft k\u1ebf website theo \xfd t\u01b0\u1edfng ri\xeang | Mi\u1ec5n ph\xed mi\u1ec1n .com n\u0103m \u0111\u1ea7u | B\u0103ng th\xf4ng kh\xf4ng gi\u1edbi h\u1ea1n | Giao di\u1ec7n chu\u1ea9n UX/UI | T\u1ed1i \u01b0u giao di\u1ec7n m\xe1y t\xednh | T\u1ed1i \u01b0u giao di\u1ec7n \u0111i\u1ec7n tho\u1ea1i | H\u1ed7 tr\u1ee3 thi\u1ebft k\u1ebf logo, banner | H\u1ed7 tr\u1ee3 setup 1 chi\u1ebfn d\u1ecbch Google Ads | B\u1ea3o h\xe0nh mi\u1ec5n ph\xed 1 n\u0103m",\uc790\uc2e0\ub9cc\uc758 \uc544\uc774\ub514\uc5b4\ub85c \ub9de\ucda4\ud615 \uc6f9\uc0ac\uc774\ud2b8 \ub514\uc790\uc778 | \uccab \ud574 .com \ub3c4\uba54\uc778 \ubb34\ub8cc \uc81c\uacf5 | \ubb34\uc81c\ud55c \ud2b8\ub798\ud53d | UX/UI \ud45c\uc900 \ub514\uc790\uc778 | \ub370\uc2a4\ud06c\ud0d1 \ud654\uba74 \ucd5c\uc801\ud654 | \ubaa8\ubc14\uc77c \ud654\uba74 \ucd5c\uc801\ud654 | \ub85c\uace0 \ubc0f \ubc30\ub108 \ub514\uc790\uc778 \uc9c0\uc6d0 | Google Ads \ucea0\ud398\uc778 1\ud68c \uc124\uc815 \uc9c0\uc6d0 | 1\ub144 \ubb34\ub8cc \ubcf4\uc99d \uc81c\uacf5,\u3054\u81ea\u8eab\u306e\u30a2\u30a4\u30c7\u30a2\u306b\u57fa\u3065\u3044\u305f\u30ab\u30b9\u30bf\u30e0\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u5236\u4f5c | \u521d\u5e74\u5ea6 .com\u30c9\u30e1\u30a4\u30f3\u7121\u6599 | \u7121\u5236\u9650\u306e\u5e2f\u57df\u5e45 | UX/UI\u6a19\u6e96\u30c7\u30b6\u30a4\u30f3 | \u30d1\u30bd\u30b3\u30f3\u5411\u3051\u753b\u9762\u6700\u9069\u5316 | \u30b9\u30de\u30db\u5411\u3051\u753b\u9762\u6700\u9069\u5316 | \u30ed\u30b4\u30fb\u30d0\u30ca\u30fc\u30c7\u30b6\u30a4\u30f3\u30b5\u30dd\u30fc\u30c8 | Google\u5e83\u544a\u30ad\u30e3\u30f3\u30da\u30fc\u30f31\u4ef6\u306e\u8a2d\u5b9a\u30b5\u30dd\u30fc\u30c8 | 1\u5e74\u9593\u306e\u7121\u6599\u4fdd\u8a3c,\npricing_landpage_premium_money,$108,3.500.000\u0111,"\u20a9162,000","\xa516,000",\npricing_app_title,Mobile App Design Pricing,B\u1ea3ng Gi\xe1 D\u1ecbch V\u1ee5 Thi\u1ebft K\u1ebf App Mobile,\ubaa8\ubc14\uc77c \uc571 \ub514\uc790\uc778 \uac00\uaca9\ud45c,\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\u30c7\u30b6\u30a4\u30f3\u6599\u91d1\u8868,\npricing_app_starter,Basic App Design (iOS/Android Hybrid - Flutter) | UX/UI standard interface | Unlimited bandwidth | API integration with website (if available) | Google Play & App Store registration | 6-month free warranty,Thi\u1ebft k\u1ebf app c\u01a1 b\u1ea3n (iOS/Android hybrid - Flutter) | Giao di\u1ec7n chu\u1ea9n UX/UI | B\u0103ng th\xf4ng kh\xf4ng gi\u1edbi h\u1ea1n | K\u1ebft n\u1ed1i API v\u1edbi website (n\u1ebfu c\xf3) | \u0110\u0103ng k\xfd Google Play & App Store | B\u1ea3o h\xe0nh mi\u1ec5n ph\xed 6 th\xe1ng,\uae30\ubcf8 \uc571 \ub514\uc790\uc778 (iOS/Android \ud558\uc774\ube0c\ub9ac\ub4dc - Flutter) | UX/UI \ud45c\uc900 \uc778\ud130\ud398\uc774\uc2a4 | \ubb34\uc81c\ud55c \ud2b8\ub798\ud53d | \uc6f9\uc0ac\uc774\ud2b8 API \uc5f0\ub3d9 (\uc788\ub294 \uacbd\uc6b0) | Google Play \ubc0f App Store \ub4f1\ub85d | 6\uac1c\uc6d4 \ubb34\ub8cc \ubcf4\uc99d \uc81c\uacf5,\u57fa\u672c\u30a2\u30d7\u30ea\u958b\u767a\uff08iOS/Android \u30cf\u30a4\u30d6\u30ea\u30c3\u30c9 - Flutter\uff09 | UX/UI\u6a19\u6e96\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9 | \u7121\u5236\u9650\u306e\u5e2f\u57df\u5e45 | Web\u30b5\u30a4\u30c8\u3068\u306eAPI\u9023\u643a\uff08\u3042\u308b\u5834\u5408\uff09 | Google Play\u304a\u3088\u3073App Store\u3078\u306e\u767b\u9332 | 6\u30f6\u6708\u9593\u306e\u7121\u6599\u4fdd\u8a3c,\npricing_app_starter_money,$615 \u2013 $923,T\u1eeb 20.000.000\u0111 - 30.000.000\u0111,"\u20a9920,000 \u2013 \u20a91,380,000","\xa592,000 \u2013 \xa5138,000",\npricing_app_advanced,"Custom App Design Based on Detailed Requirements | Professional icon & splash screen design | App Store & Google Play registration and deployment | Push notification integration (Firebase) | Online payment integration (ZaloPay, Momo, Stripe, etc.) | Dedicated admin system (CMS/CRM if needed) | 1-year free warranty","Thi\u1ebft k\u1ebf app theo y\xeau c\u1ea7u chi ti\u1ebft | H\u1ed7 tr\u1ee3 thi\u1ebft k\u1ebf icon + splash screen chuy\xean nghi\u1ec7p | \u0110\u0103ng k\xfd & tri\u1ec3n khai tr\xean App Store, Play Store | T\xedch h\u1ee3p th\xf4ng b\xe1o \u0111\u1ea9y (Firebase) | T\xedch h\u1ee3p thanh to\xe1n online (ZaloPay, Momo, Stripe, v.v.) | H\u1ec7 th\u1ed1ng qu\u1ea3n tr\u1ecb ri\xeang (CMS/CRM n\u1ebfu c\u1ea7n) | B\u1ea3o h\xe0nh mi\u1ec5n ph\xed 1 n\u0103m","\uc0c1\uc138 \uc694\uad6c\uc0ac\ud56d\uc5d0 \ub530\ub978 \ub9de\ucda4\ud615 \uc571 \ub514\uc790\uc778 | \uc804\ubb38\uac00 \uc218\uc900\uc758 \uc544\uc774\ucf58 \ubc0f \uc2a4\ud50c\ub798\uc2dc \ud654\uba74 \ub514\uc790\uc778 | App Store \ubc0f Google Play \ub4f1\ub85d \ubc0f \ubc30\ud3ec | \ud478\uc2dc \uc54c\ub9bc \uc5f0\ub3d9 (Firebase) | \uc628\ub77c\uc778 \uacb0\uc81c \uc2dc\uc2a4\ud15c \ud1b5\ud569 (ZaloPay, Momo, Stripe \ub4f1) | \uc804\uc6a9 \uad00\ub9ac\uc790 \uc2dc\uc2a4\ud15c \uc81c\uacf5 (\ud544\uc694 \uc2dc CMS/CRM \ud3ec\ud568) | 1\ub144 \ubb34\ub8cc \ubcf4\uc99d \uc81c\uacf5",\u8a73\u7d30\u306a\u8981\u4ef6\u306b\u57fa\u3065\u304f\u30ab\u30b9\u30bf\u30e0\u30a2\u30d7\u30ea\u958b\u767a | \u30d7\u30ed\u30d5\u30a7\u30c3\u30b7\u30e7\u30ca\u30eb\u306a\u30a2\u30a4\u30b3\u30f3\u30fb\u30b9\u30d7\u30e9\u30c3\u30b7\u30e5\u753b\u9762\u30c7\u30b6\u30a4\u30f3 | App Store\u30fbGoogle Play\u3078\u306e\u767b\u9332\u3068\u516c\u958b | \u30d7\u30c3\u30b7\u30e5\u901a\u77e5\u9023\u643a\uff08Firebase\uff09 | \u30aa\u30f3\u30e9\u30a4\u30f3\u6c7a\u6e08\u7d71\u5408\uff08ZaloPay\u3001Momo\u3001Stripe\u306a\u3069\uff09 | \u5c02\u7528\u7ba1\u7406\u30b7\u30b9\u30c6\u30e0\uff08\u5fc5\u8981\u306b\u5fdc\u3058\u3066CMS/CRM\uff09 | 1\u5e74\u9593\u306e\u7121\u6599\u4fdd\u8a3c,\npricing_app_advanced_money,"$1,077 \u2013 $1,538",T\u1eeb 35.000.000\u0111 - 50.000.000\u0111,"\u20a91,610,000 \u2013 \u20a92,300,000","\xa5157,000 \u2013 \xa5230,000",\npricing_app_premium,"Exclusive Custom App Based on Your Own Idea | Consultation from UX/UI to operation strategy | AI integration, real-time chat, order management, maps, etc. | Cross-platform data connection (web, app, backend) | Performance optimization for fast loading | Ongoing maintenance and feature upgrades | App marketing support (App Store Optimization, Google Ads, etc.)","App theo \xfd t\u01b0\u1edfng \u0111\u1ed9c quy\u1ec1n | T\u01b0 v\u1ea5n t\u1eeb UX/UI \u0111\u1ebfn chi\u1ebfn l\u01b0\u1ee3c v\u1eadn h\xe0nh | T\xedch h\u1ee3p AI, realtime chat, qu\u1ea3n l\xfd \u0111\u01a1n h\xe0ng, b\u1ea3n \u0111\u1ed3,... | K\u1ebft n\u1ed1i d\u1eef li\u1ec7u \u0111a n\u1ec1n t\u1ea3ng (web, app, backend) | T\u1ed1i \u01b0u hi\u1ec7u su\u1ea5t, t\u1ea3i app nhanh | B\u1ea3o tr\xec \u0111\u1ecbnh k\u1ef3, n\xe2ng c\u1ea5p t\xednh n\u0103ng | H\u1ed7 tr\u1ee3 marketing app (App Store Optimization, Google Ads,...)","\uc544\uc774\ub514\uc5b4 \uae30\ubc18\uc758 \ub3c5\uc810 \ub9de\ucda4\ud615 \uc571 \uac1c\ubc1c | UX/UI\ubd80\ud130 \uc6b4\uc601 \uc804\ub7b5\uae4c\uc9c0 \ucee8\uc124\ud305 \uc9c0\uc6d0 | AI, \uc2e4\uc2dc\uac04 \ucc44\ud305, \uc8fc\ubb38 \uad00\ub9ac, \uc9c0\ub3c4 \ub4f1 \uae30\ub2a5 \ud1b5\ud569 | \uc6f9, \uc571, \ubc31\uc5d4\ub4dc \ub4f1 \ub2e4\uc591\ud55c \ud50c\ub7ab\ud3fc \uac04 \ub370\uc774\ud130 \uc5f0\ub3d9 | \ube60\ub978 \ub85c\ub529\uc744 \uc704\ud55c \uc131\ub2a5 \ucd5c\uc801\ud654 | \uc815\uae30 \uc720\uc9c0\ubcf4\uc218 \ubc0f \uae30\ub2a5 \uc5c5\uadf8\ub808\uc774\ub4dc | \uc571 \ub9c8\ucf00\ud305 \uc9c0\uc6d0 (ASO, Google Ads \ub4f1)",\u72ec\u81ea\u30a2\u30a4\u30c7\u30a2\u306b\u57fa\u3065\u304f\u30ab\u30b9\u30bf\u30e0\u30a2\u30d7\u30ea\u958b\u767a | UX/UI\u8a2d\u8a08\u304b\u3089\u904b\u7528\u6226\u7565\u307e\u3067\u306e\u30b3\u30f3\u30b5\u30eb\u30c6\u30a3\u30f3\u30b0 | AI\u3001\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u30c1\u30e3\u30c3\u30c8\u3001\u6ce8\u6587\u7ba1\u7406\u3001\u5730\u56f3\u306a\u3069\u306e\u7d71\u5408 | Web\u30fb\u30a2\u30d7\u30ea\u30fb\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u3068\u306e\u30c7\u30fc\u30bf\u9023\u643a | \u9ad8\u901f\u8aad\u307f\u8fbc\u307f\u306e\u305f\u3081\u306e\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u6700\u9069\u5316 | \u5b9a\u671f\u30e1\u30f3\u30c6\u30ca\u30f3\u30b9\u3068\u6a5f\u80fd\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9 | \u30a2\u30d7\u30ea\u30de\u30fc\u30b1\u30c6\u30a3\u30f3\u30b0\u652f\u63f4\uff08ASO\u3001Google\u5e83\u544a\u306a\u3069\uff09,\npricing_app_premium_money,Consultation & Custom Quote Based on Your Needs,T\u01b0 v\u1ea5n & b\xe1o gi\xe1 chi ti\u1ebft theo nhu c\u1ea7u,\ub9de\ucda4\ud615 \uc0c1\ub2f4 \ubc0f \uacac\uc801 \uc81c\uacf5,\u3054\u8981\u671b\u306b\u5fdc\u3058\u305f\u3054\u76f8\u8ac7\u30fb\u304a\u898b\u7a4d\u3082\u308a,\npricing_uiux_title,UI/UX Design Service Pricing,B\u1ea3ng Gi\xe1 D\u1ecbch V\u1ee5 UI/UX DESIGN,UI/UX \ub514\uc790\uc778 \uc11c\ube44\uc2a4 \uac00\uaca9\ud45c,UI/UX\u30c7\u30b6\u30a4\u30f3\u30b5\u30fc\u30d3\u30b9\u306e\u6599\u91d1\u8868,\npricing_uiux_basic,"Basic UI Design for 1\u20133 Pages (Web/App) | Modern UX/UI design standards | Suitable for landing pages, blogs, portfolios | Final files delivered in Figma or PDF | 1 free revision included","Thi\u1ebft k\u1ebf giao di\u1ec7n 1-3 trang c\u01a1 b\u1ea3n (web/app) | Thi\u1ebft k\u1ebf theo chu\u1ea9n UX/UI hi\u1ec7n \u0111\u1ea1i | Ph\xf9 h\u1ee3p landing page, blog, portfolio | File b\xe0n giao Figma ho\u1eb7c PDF | T\u01b0 v\u1ea5n mi\u1ec5n ph\xed ch\u1ec9nh s\u1eeda 1 l\u1ea7n","\uae30\ubcf8 1\u20133\ud398\uc774\uc9c0 UI \ub514\uc790\uc778 (\uc6f9/\uc571) | \ucd5c\uc2e0 UX/UI \ub514\uc790\uc778 \uae30\uc900 \uc801\uc6a9 | \ub79c\ub529\ud398\uc774\uc9c0, \ube14\ub85c\uadf8, \ud3ec\ud2b8\ud3f4\ub9ac\uc624\uc5d0 \uc801\ud569 | Figma \ub610\ub294 PDF \ud615\uc2dd\uc73c\ub85c \uacb0\uacfc\ubb3c \uc81c\uacf5 | 1\ud68c \ubb34\ub8cc \uc218\uc815 \ud3ec\ud568",1\uff5e3\u30da\u30fc\u30b8\u306e\u57fa\u672cUI\u30c7\u30b6\u30a4\u30f3\uff08Web/\u30a2\u30d7\u30ea\uff09 | \u6700\u65b0\u306eUX/UI\u30c7\u30b6\u30a4\u30f3\u57fa\u6e96\u306b\u6e96\u62e0 | \u30e9\u30f3\u30c7\u30a3\u30f3\u30b0\u30da\u30fc\u30b8\u30fb\u30d6\u30ed\u30b0\u30fb\u30dd\u30fc\u30c8\u30d5\u30a9\u30ea\u30aa\u5411\u3051 | \u7d0d\u54c1\u5f62\u5f0f\uff1aFigma\u307e\u305f\u306fPDF | \u7121\u6599\u4fee\u6b631\u56de\u4ed8\u304d,\npricing_uiux_basic_money,$92 \u2013 $15,T\u1eeb 3.000.000\u0111 - 5.000.000\u0111,"\u20a9138,000 \u2013 \u20a9230,000","\xa513,800 \u2013 \xa523,000",\npricing_uiux_advanced,UI Design for 5\u201310 Screens (Web or App) | Wireframe + Full UI design | User behavior research (User Flow) | Optimized for both mobile and desktop experiences | Professionally structured Figma file delivery | 2 free rounds of consultation and revisions,"Thi\u1ebft k\u1ebf t\u1eeb 5-10 trang giao di\u1ec7n (web ho\u1eb7c app) | Wireframe + giao di\u1ec7n ho\xe0n ch\u1ec9nh | Nghi\xean c\u1ee9u h\xe0nh vi ng\u01b0\u1eddi d\xf9ng (User Flow) | T\u1ed1i \u01b0u tr\u1ea3i nghi\u1ec7m tr\xean c\u1ea3 mobile v\xe0 desktop | Giao file Figma chuy\xean nghi\u1ec7p, c\xf3 c\u1ea5u tr\xfac | T\u01b0 v\u1ea5n v\xe0 ch\u1ec9nh s\u1eeda mi\u1ec5n ph\xed 2 l\u1ea7n",5\u201310\ud398\uc774\uc9c0 UI \ub514\uc790\uc778 (\uc6f9 \ub610\ub294 \uc571) | \uc640\uc774\uc5b4\ud504\ub808\uc784 + \uc644\uc131\ub41c UI \ub514\uc790\uc778 | \uc0ac\uc6a9\uc790 \ud589\ub3d9 \ubd84\uc11d (User Flow) \ud3ec\ud568 | \ubaa8\ubc14\uc77c \ubc0f \ub370\uc2a4\ud06c\ud0d1 \ubaa8\ub450\uc5d0 \ucd5c\uc801\ud654 | \uad6c\uc870\ud654\ub41c Figma \ud30c\uc77c\ub85c \uc81c\uacf5 | 2\ud68c \ubb34\ub8cc \uc0c1\ub2f4 \ubc0f \uc218\uc815 \uc9c0\uc6d0,5\uff5e10\u30da\u30fc\u30b8\u306eUI\u30c7\u30b6\u30a4\u30f3\uff08Web\u307e\u305f\u306f\u30a2\u30d7\u30ea\uff09|\u30ef\u30a4\u30e4\u30fc\u30d5\u30ec\u30fc\u30e0\uff0b\u5b8c\u6210\u6e08\u307fUI\u30c7\u30b6\u30a4\u30f3|\u30e6\u30fc\u30b6\u30fc\u884c\u52d5\u5206\u6790\uff08\u30e6\u30fc\u30b6\u30fc\u30d5\u30ed\u30fc\uff09\u542b\u3080|\u30e2\u30d0\u30a4\u30eb\u30fb\u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u4e21\u5bfe\u5fdc\u3067\u6700\u9069\u5316|\u69cb\u9020\u5316\u3055\u308c\u305fFigma\u30d5\u30a1\u30a4\u30eb\u3067\u7d0d\u54c1|\u7121\u6599\u76f8\u8ac7\u30fb\u4fee\u6b632\u56de\u4ed8\u304d,\npricing_uiux_advanced_money,$185 \u2013 $308,T\u1eeb 6.000.000\u0111 - 10.000.000\u0111,"\u20a9276,000 \u2013 \u20a9460,000","\xa527,600 \u2013 \xa546,000",\npricing_uiux_premium,"Full UI Design for Large-Scale Website/App|Product architecture consulting from scratch (UX Strategy)|Design of prototype, flowchart, and sitemap|User testing (if data is available)|Full Figma handoff with brand UI guideline|Support for developer team to integrate design into code|Unlimited revisions during the design phase","Thi\u1ebft k\u1ebf to\xe0n b\u1ed9 giao di\u1ec7n website/app quy m\xf4 l\u1edbn|T\u01b0 v\u1ea5n ki\u1ebfn tr\xfac s\u1ea3n ph\u1ea9m t\u1eeb \u0111\u1ea7u (UX Strategy)|Thi\u1ebft k\u1ebf prototype, flowchart, sitemap|Ki\u1ec3m th\u1eed ng\u01b0\u1eddi d\xf9ng (User Testing - n\u1ebfu c\xf3 d\u1eef li\u1ec7u)|B\xe0n giao Figma \u0111\u1ea7y \u0111\u1ee7 + guideline brand UI|H\u1ed7 tr\u1ee3 \u0111\u1ed9i dev t\xedch h\u1ee3p thi\u1ebft k\u1ebf v\xe0o code|Ch\u1ec9nh s\u1eeda kh\xf4ng gi\u1edbi h\u1ea1n trong giai \u0111o\u1ea1n thi\u1ebft k\u1ebf","\ub300\uaddc\ubaa8 \uc6f9\uc0ac\uc774\ud2b8/\uc571 \uc804\uccb4 UI \ub514\uc790\uc778|\uc81c\ud488 \uc544\ud0a4\ud14d\ucc98 \ucd08\uae30 \uc124\uacc4 \ucee8\uc124\ud305 (UX \uc804\ub7b5 \uc218\ub9bd)|\ud504\ub85c\ud1a0\ud0c0\uc785, \ud50c\ub85c\uc6b0\ucc28\ud2b8, \uc0ac\uc774\ud2b8\ub9f5 \ub514\uc790\uc778|\uc0ac\uc6a9\uc790 \ud14c\uc2a4\ud2b8 \uc9c4\ud589 (\ub370\uc774\ud130 \uc81c\uacf5 \uc2dc)|Figma \uc804\uccb4 \ud30c\uc77c + \ube0c\ub79c\ub4dc UI \uac00\uc774\ub4dc\ub77c\uc778 \uc81c\uacf5|\uac1c\ubc1c\ud300\uc758 \ucf54\ub4dc \ud1b5\ud569 \uc791\uc5c5 \uc9c0\uc6d0|\ub514\uc790\uc778 \ub2e8\uacc4\uc5d0\uc11c \ubb34\uc81c\ud55c \uc218\uc815 \uac00\ub2a5",\u5927\u898f\u6a21Web\u30b5\u30a4\u30c8\u30fb\u30a2\u30d7\u30ea\u306eUI\u30d5\u30eb\u30c7\u30b6\u30a4\u30f3|\u30d7\u30ed\u30c0\u30af\u30c8\u8a2d\u8a08\u304b\u3089\u306e\u6226\u7565\u7684\u30b3\u30f3\u30b5\u30eb\u30c6\u30a3\u30f3\u30b0\uff08UX\u6226\u7565\uff09|\u30d7\u30ed\u30c8\u30bf\u30a4\u30d7\u30fb\u30d5\u30ed\u30fc\u30c1\u30e3\u30fc\u30c8\u30fb\u30b5\u30a4\u30c8\u30de\u30c3\u30d7\u306e\u4f5c\u6210|\u30e6\u30fc\u30b6\u30fc\u30c6\u30b9\u30c8\uff08\u30c7\u30fc\u30bf\u304c\u3042\u308b\u5834\u5408\uff09|Figma\u5b8c\u5168\u7d0d\u54c1 + \u30d6\u30e9\u30f3\u30c9UI\u30ac\u30a4\u30c9\u30e9\u30a4\u30f3\u4ed8\u304d|\u958b\u767a\u30c1\u30fc\u30e0\u306b\u3088\u308b\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u7d71\u5408\u3092\u30b5\u30dd\u30fc\u30c8|\u30c7\u30b6\u30a4\u30f3\u671f\u9593\u4e2d\u306f\u7121\u5236\u9650\u306b\u4fee\u6b63\u53ef\u80fd,\npricing_uiux_premium_money,Custom Consultation & Quote Based on Your Needs,T\u01b0 v\u1ea5n & b\xe1o gi\xe1 chi ti\u1ebft theo nhu c\u1ea7u,\uc694\uad6c\uc5d0 \ub530\ub978 \ub9de\ucda4 \uc0c1\ub2f4 \ubc0f \uacac\uc801 \uc81c\uacf5,\u3054\u8981\u671b\u306b\u5fdc\u3058\u305f\u3054\u76f8\u8ac7\u30fb\u304a\u898b\u7a4d\u3082\u308a,\npricing_maintenance_title,Maintenance & Upgrades,B\u1ea2O TR\xcc & N\xc2NG C\u1ea4P,\uc720\uc9c0\ubcf4\uc218 \ubc0f \uc5c5\uadf8\ub808\uc774\ub4dc,\u4fdd\u5b88\u30fb\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9,\npricing_maintenance_basic,"Monthly website/app monitoring and checkup (once/month)|Automatic or manual data backups|Fixing minor bugs, basic text/image edits|Support via Zalo/Email during business hours|Monthly activity report","Theo d\xf5i v\xe0 ki\u1ec3m tra website/app \u0111\u1ecbnh k\u1ef3 (1 l\u1ea7n/th\xe1ng)|Sao l\u01b0u d\u1eef li\u1ec7u t\u1ef1 \u0111\u1ed9ng ho\u1eb7c th\u1ee7 c\xf4ng|S\u1eeda l\u1ed7i nh\u1ecf, ch\u1ec9nh s\u1eeda text ho\u1eb7c h\xecnh \u1ea3nh c\u01a1 b\u1ea3n|H\u1ed7 tr\u1ee3 qua Zalo/Email trong gi\u1edd h\xe0nh ch\xednh|B\xe1o c\xe1o ho\u1ea1t \u0111\u1ed9ng h\xe0ng th\xe1ng","\uc6f9\uc0ac\uc774\ud2b8/\uc571 \uc815\uae30 \uc810\uac80 \ubc0f \ubaa8\ub2c8\ud130\ub9c1 (\uc6d4 1\ud68c)|\uc790\ub3d9 \ub610\ub294 \uc218\ub3d9 \ub370\uc774\ud130 \ubc31\uc5c5|\uc18c\uaddc\ubaa8 \uc624\ub958 \uc218\uc815, \ud14d\uc2a4\ud2b8/\uc774\ubbf8\uc9c0 \uae30\ubcf8 \ud3b8\uc9d1|\uadfc\ubb34 \uc2dc\uac04 \uc911 Zalo/\uc774\uba54\uc77c \uc9c0\uc6d0|\uc6d4\uac04 \uc791\uc5c5 \ubcf4\uace0\uc11c \uc81c\uacf5",Web\u30b5\u30a4\u30c8\u30fb\u30a2\u30d7\u30ea\u306e\u5b9a\u671f\u30c1\u30a7\u30c3\u30af\uff08\u67081\u56de\uff09|\u81ea\u52d5\u307e\u305f\u306f\u624b\u52d5\u306b\u3088\u308b\u30c7\u30fc\u30bf\u30d0\u30c3\u30af\u30a2\u30c3\u30d7|\u8efd\u5fae\u306a\u30d0\u30b0\u4fee\u6b63\u3001\u57fa\u672c\u7684\u306a\u30c6\u30ad\u30b9\u30c8\u30fb\u753b\u50cf\u306e\u5909\u66f4|\u55b6\u696d\u6642\u9593\u5185\u306eZalo\u30fb\u30e1\u30fc\u30eb\u30b5\u30dd\u30fc\u30c8|\u6708\u6b21\u30ec\u30dd\u30fc\u30c8\u306e\u63d0\u4f9b,\npricing_maintenance_basic_money,$31 / month,1.000.000\u0111/th\xe1ng,"\u20a946,000 / month","\xa54,600 / month",\npricing_maintenance_advanced,"Advanced Maintenance & 24/7 Support|24/7 monitoring and incident response|Regular backups & recovery in case of failure|Security updates (CMS, plugins, system)|Speed optimization (web) / performance tuning (app)|Content updates or edits upon request|Quarterly UX/UI improvement suggestions","Theo d\xf5i & x\u1eed l\xfd s\u1ef1 c\u1ed1 24/7|Backup \u0111\u1ecbnh k\u1ef3 + kh\xf4i ph\u1ee5c khi g\u1eb7p s\u1ef1 c\u1ed1|C\u1eadp nh\u1eadt phi\xean b\u1ea3n b\u1ea3o m\u1eadt (CMS, plugin, h\u1ec7 th\u1ed1ng)|T\u1ed1i \u01b0u t\u1ed1c \u0111\u1ed9 t\u1ea3i trang (web) / hi\u1ec7u su\u1ea5t (app)|B\u1ed5 sung ho\u1eb7c ch\u1ec9nh s\u1eeda n\u1ed9i dung theo y\xeau c\u1ea7u|T\u01b0 v\u1ea5n c\u1ea3i ti\u1ebfn UX/UI nh\u1eb9 m\u1ed7i qu\xfd","\uace0\uae09 \uc720\uc9c0\ubcf4\uc218 \ubc0f 24\uc2dc\uac04 \uae30\uc220 \uc9c0\uc6d0|24\uc2dc\uac04 \uc2e4\uc2dc\uac04 \ubaa8\ub2c8\ud130\ub9c1 \ubc0f \uc7a5\uc560 \ub300\uc751|\uc815\uae30 \ubc31\uc5c5 \ubc0f \uc7a5\uc560 \ubc1c\uc0dd \uc2dc \ubcf5\uad6c \uc9c0\uc6d0|\ubcf4\uc548 \uc5c5\ub370\uc774\ud2b8 \uc801\uc6a9 (CMS, \ud50c\ub7ec\uadf8\uc778, \uc2dc\uc2a4\ud15c \ub4f1)|\uc6f9 \uc18d\ub3c4 / \uc571 \uc131\ub2a5 \ucd5c\uc801\ud654|\uc694\uccad \uc2dc \ucf58\ud150\uce20 \ucd94\uac00 \ub610\ub294 \uc218\uc815|\ubd84\uae30\ubcc4 UX/UI \uac1c\uc120 \uc81c\uc548 \uc81c\uacf5",\u9ad8\u5ea6\u306a\u4fdd\u5b88 & 24\u6642\u9593\u5bfe\u5fdc\u30b5\u30dd\u30fc\u30c8|24\u6642\u9593\u4f53\u5236\u3067\u306e\u76e3\u8996\u3068\u969c\u5bb3\u5bfe\u5fdc|\u5b9a\u671f\u30d0\u30c3\u30af\u30a2\u30c3\u30d7 + \u969c\u5bb3\u6642\u306e\u5fa9\u5143\u5bfe\u5fdc|\u30bb\u30ad\u30e5\u30ea\u30c6\u30a3\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\uff08CMS\u30fb\u30d7\u30e9\u30b0\u30a4\u30f3\u30fb\u30b7\u30b9\u30c6\u30e0\uff09|\u30da\u30fc\u30b8\u8aad\u307f\u8fbc\u307f\u901f\u5ea6\uff08Web\uff09\u30fb\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\uff08\u30a2\u30d7\u30ea\uff09\u306e\u6700\u9069\u5316|\u8981\u671b\u306b\u5fdc\u3058\u305f\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u8ffd\u52a0\u30fb\u4fee\u6b63|\u56db\u534a\u671f\u3054\u3068\u306eUX/UI\u6539\u5584\u63d0\u6848,\npricing_maintenance_advanced_money,$92 / month,3.000.000\u0111/th\xe1ng,"\u20a9138,000 / month","\xa513,800 / month",\npricing_maintenance_custom,"System Upgrade & Modernization|Full or partial UI/UX redesign|Integration of new features (payment, chat, multilingual, etc.)|Platform migration (e.g., WordPress \u2192 Flutter Web)|Backend system and database optimization|Integration with third-party software (CRM, ERP, etc.)|Technology consultation and long-term upgrade planning","N\xe2ng c\u1ea5p giao di\u1ec7n UI/UX to\xe0n ph\u1ea7n ho\u1eb7c m\u1ed9t ph\u1ea7n|T\xedch h\u1ee3p t\xednh n\u0103ng m\u1edbi (thanh to\xe1n, chat, \u0111a ng\xf4n ng\u1eef...)|Chuy\u1ec3n \u0111\u1ed5i n\u1ec1n t\u1ea3ng (VD: t\u1eeb Wordpress \u2192 Flutter Web)|T\u1ed1i \u01b0u h\u1ec7 th\u1ed1ng backend & c\u01a1 s\u1edf d\u1eef li\u1ec7u|\u0110\u1ed3ng b\u1ed9 v\u1edbi ph\u1ea7n m\u1ec1m b\xean th\u1ee9 3 (CRM, ERP, v.v.)|T\u01b0 v\u1ea5n c\xf4ng ngh\u1ec7 v\xe0 l\u1eadp k\u1ebf ho\u1ea1ch n\xe2ng c\u1ea5p d\xe0i h\u1ea1n","\uc2dc\uc2a4\ud15c \uc5c5\uadf8\ub808\uc774\ub4dc \ubc0f \ucd5c\uc801\ud654|\uc804\uccb4 \ub610\ub294 \uc77c\ubd80 UI/UX \ub9ac\ub514\uc790\uc778|\uacb0\uc81c, \ucc44\ud305, \ub2e4\uad6d\uc5b4 \ub4f1 \uc2e0\uaddc \uae30\ub2a5 \ud1b5\ud569|\ud50c\ub7ab\ud3fc \uc804\ud658 (\uc608: \uc6cc\ub4dc\ud504\ub808\uc2a4 \u2192 \ud50c\ub7ec\ud130 \uc6f9)|\ubc31\uc5d4\ub4dc \uc2dc\uc2a4\ud15c \ubc0f \ub370\uc774\ud130\ubca0\uc774\uc2a4 \ucd5c\uc801\ud654|\uc678\ubd80 \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uc5f0\ub3d9 (CRM, ERP \ub4f1)|\uae30\uc220 \ucee8\uc124\ud305 \ubc0f \uc7a5\uae30 \uc5c5\uadf8\ub808\uc774\ub4dc \uacc4\ud68d \uc218\ub9bd",\u30b7\u30b9\u30c6\u30e0\u306e\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u30fb\u6700\u9069\u5316|UI/UX\u306e\u5168\u9762\u307e\u305f\u306f\u90e8\u5206\u30ea\u30cb\u30e5\u30fc\u30a2\u30eb|\u65b0\u6a5f\u80fd\u306e\u7d71\u5408\uff08\u6c7a\u6e08\u3001\u30c1\u30e3\u30c3\u30c8\u3001\u591a\u8a00\u8a9e\u5bfe\u5fdc\u306a\u3069\uff09|\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u79fb\u884c\uff08\u4f8b\uff1aWordPress \u2192 Flutter Web\uff09|\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u3068\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u306e\u6700\u9069\u5316|\u5916\u90e8\u30b7\u30b9\u30c6\u30e0\u3068\u306e\u9023\u643a\uff08CRM\u3001ERP\u306a\u3069\uff09|\u6280\u8853\u30b3\u30f3\u30b5\u30eb\u30c6\u30a3\u30f3\u30b0\u30fb\u9577\u671f\u7684\u306a\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u8a08\u753b\u7acb\u6848,\npricing_maintenance_custom_money,Detailed Consultation & Custom Pricing,"T\u01b0 v\u1ea5n & b\xe1o gi\xe1 chi ti\u1ebft, c\u1ee5 th\u1ec3\n",\uc0c1\uc138 \uc0c1\ub2f4 \ubc0f \ub9de\ucda4\ud615 \uacac\uc801 \uc81c\uacf5,"\u8a73\u7d30\u306a\u3054\u76f8\u8ac7\u30fb\u304a\u898b\u7a4d\u3082\u308a\u3092\u3054\u63d0\u6848\u3057\u307e\u3059\n",\npricing_combo_title,ADSDIGI Service Combo,COMBO D\u1ecaCH V\u1ee4 ADSDIGI,ADSDIGI \uc11c\ube44\uc2a4 \ud328\ud0a4\uc9c0,ADSDIGI\u30b5\u30fc\u30d3\u30b9\u30b3\u30f3\u30dc,\npricing_combo_startup,Professional Landing Page Website Design|UI/UX design for 3\u20135 main screens|1 year of high-speed domain & hosting|Basic SEO optimization|Admin guide & content update training|3 months of technical maintenance,Thi\u1ebft k\u1ebf website landing page chuy\xean nghi\u1ec7p | Thi\u1ebft k\u1ebf UI/UX cho 3\u20135 m\xe0n h\xecnh ch\xednh | T\xean mi\u1ec1n + hosting t\u1ed1c \u0111\u1ed9 cao 1 n\u0103m | T\u1ed1i \u01b0u chu\u1ea9n | SEO c\u01a1 b\u1ea3n | H\u01b0\u1edbng d\u1eabn qu\u1ea3n tr\u1ecb & c\u1eadp nh\u1eadt n\u1ed9i dung | B\u1ea3o tr\xec k\u1ef9 thu\u1eadt trong 3 th\xe1ng,\uc804\ubb38 \ub79c\ub529\ud398\uc774\uc9c0 \uc6f9\uc0ac\uc774\ud2b8 \ub514\uc790\uc778 | \uc8fc\uc694 3~5\ud654\uba74 UI/UX \ub514\uc790\uc778 | 1\ub144\uac04 \uace0\uc18d \ub3c4\uba54\uc778 \ubc0f \ud638\uc2a4\ud305 \uc81c\uacf5 | \uae30\ubcf8 SEO \ucd5c\uc801\ud654 | \ucf58\ud150\uce20 \uad00\ub9ac \ubc0f \uc5c5\ub370\uc774\ud2b8 \uac00\uc774\ub4dc \uc81c\uacf5 | 3\uac1c\uc6d4 \uae30\uc220 \uc720\uc9c0\ubcf4\uc218 \ud3ec\ud568,"\u30d7\u30ed\u30d5\u30a7\u30c3\u30b7\u30e7\u30ca\u30eb\u306a\u30e9\u30f3\u30c7\u30a3\u30f3\u30b0\u30da\u30fc\u30b8\u5236\u4f5c | \u30e1\u30a4\u30f33\u301c5\u753b\u9762\u306eUI/UX\u30c7\u30b6\u30a4\u30f3 | \u9ad8\u901f\u30c9\u30e1\u30a4\u30f3\uff06\u30db\u30b9\u30c6\u30a3\u30f3\u30b01\u5e74\u5206 | \u57fa\u672c\u7684\u306aSEO\u6700\u9069\u5316 | \u7ba1\u7406\u65b9\u6cd5\u3068\u30b3\u30f3\u30c6\u30f3\u30c4\u66f4\u65b0\u306e\u30ec\u30af\u30c1\u30e3\u30fc | 3\u30f6\u6708\u9593\u306e\u6280\u8853\u4fdd\u5b88\u4ed8\u304d\n",\npricing_combo_startup_money,"From $1,077",T\u1eeb 35.000.000\u0111,"From \u20a91,610,000","From \xa5157,000",\npricing_combo_business,"Multi-Page Website + Mobile App (MVP) Design Combo | Multi-page website design (services, about, contact, etc.) | MVP mobile app design & development (Android + iOS) | UI/UX for full web & app (up to 15 screens) | Easy-to-use CMS for content management | Consultation on content structure & user behavior | 6-month maintenance & upgrades | Full handover: source code + Figma + technical documentation\n","Thi\u1ebft k\u1ebf website \u0111a trang (d\u1ecbch v\u1ee5, gi\u1edbi thi\u1ec7u, li\xean h\u1ec7...) | Thi\u1ebft k\u1ebf app mobile b\u1ea3n MVP (Android + iOS) | UI/UX cho to\xe0n b\u1ed9 web & app (t\u1ed1i \u0111a 15 m\xe0n) | CMS qu\u1ea3n l\xfd n\u1ed9i dung (d\u1ec5 s\u1eed d\u1ee5ng) | T\u01b0 v\u1ea5n c\u1ea5u tr\xfac n\u1ed9i dung & h\xe0nh vi ng\u01b0\u1eddi d\xf9ng | B\u1ea3o tr\xec \u2013 n\xe2ng c\u1ea5p trong 6 th\xe1ng | B\xe0n giao to\xe0n b\u1ed9 source code + Figma + t\xe0i li\u1ec7u k\u1ef9 thu\u1eadt","\ub2e4\uc911 \ud398\uc774\uc9c0 \uc6f9\uc0ac\uc774\ud2b8 + \ubaa8\ubc14\uc77c \uc571(MVP) \ud1b5\ud569 \ub514\uc790\uc778 \ud328\ud0a4\uc9c0 | \ub2e4\uc911 \ud398\uc774\uc9c0 \uc6f9\uc0ac\uc774\ud2b8 \ub514\uc790\uc778 (\uc11c\ube44\uc2a4, \uc18c\uac1c, \ubb38\uc758 \ub4f1) | \ubaa8\ubc14\uc77c \uc571 MVP \ub514\uc790\uc778 \ubc0f \uac1c\ubc1c (Android + iOS) | \uc804\uccb4 \uc6f9/\uc571 UI/UX \ub514\uc790\uc778 (\ucd5c\ub300 15\ud654\uba74) | \uc0ac\uc6a9\ud558\uae30 \uc26c\uc6b4 CMS \ucf58\ud150\uce20 \uad00\ub9ac \uc2dc\uc2a4\ud15c | \ucf58\ud150\uce20 \uad6c\uc870 \ubc0f \uc0ac\uc6a9\uc790 \ud589\ub3d9 \ucee8\uc124\ud305 | 6\uac1c\uc6d4 \uc720\uc9c0\ubcf4\uc218 \ubc0f \uae30\ub2a5 \uc5c5\uadf8\ub808\uc774\ub4dc \uc9c0\uc6d0 | \uc804\uccb4 \uc18c\uc2a4\ucf54\ub4dc + Figma + \uae30\uc220 \ubb38\uc11c \uc81c\uacf5",\u591a\u30da\u30fc\u30b8Web\u30b5\u30a4\u30c8 + \u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea\uff08MVP\uff09\u30c7\u30b6\u30a4\u30f3\u30d1\u30c3\u30b1\u30fc\u30b8 | \u591a\u30da\u30fc\u30b8\u69cb\u6210\u306eWeb\u30b5\u30a4\u30c8\uff08\u30b5\u30fc\u30d3\u30b9\u30fb\u7d39\u4ecb\u30fb\u304a\u554f\u3044\u5408\u308f\u305b\u306a\u3069\uff09 | \u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea MVP\u306e\u30c7\u30b6\u30a4\u30f3\uff06\u958b\u767a\uff08Android + iOS\uff09 | Web\u3068\u30a2\u30d7\u30ea\u306eUI/UX\u30c7\u30b6\u30a4\u30f3\uff08\u6700\u592715\u753b\u9762\uff09 | \u7c21\u5358\u64cd\u4f5c\u306eCMS\u306b\u3088\u308b\u30b3\u30f3\u30c6\u30f3\u30c4\u7ba1\u7406 | \u30b3\u30f3\u30c6\u30f3\u30c4\u69cb\u6210\u30fb\u30e6\u30fc\u30b6\u30fc\u884c\u52d5\u306e\u30b3\u30f3\u30b5\u30eb\u30c6\u30a3\u30f3\u30b0 | 6\u30f6\u6708\u9593\u306e\u4fdd\u5b88\u30fb\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u5bfe\u5fdc | \u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\uff0bFigma\uff0b\u6280\u8853\u8cc7\u6599\u4e00\u5f0f\u3092\u7d0d\u54c1,\npricing_combo_business_money,"From $2,154",T\u1eeb 70.000.000\u0111,"From \u20a93,220,000","From \xa5314,000",\npricing_combo_solution,"End-to-End UI/UX & Digital Product Development | Complete UI/UX design from strategy to prototype | High-performance, SEO-optimized, conversion-focused website | Feature-rich mobile app (chat, orders, maps, etc.) | Custom backend (Node.js, Laravel, Firebase, etc.) | Customizable CMS or CRM | Integration of payment gateways, email marketing, analytics... | 1-year maintenance & upgrades | Internal team training for product management | Support for product launch campaign (Branding + Landing page)","Thi\u1ebft k\u1ebf UI/UX ho\xe0n ch\u1ec9nh t\u1eeb chi\u1ebfn l\u01b0\u1ee3c \u0111\u1ebfn prototype | Website chu\u1ea9n SEO + t\u1ed1c \u0111\u1ed9 cao + chuy\u1ec3n \u0111\u1ed5i t\u1ed1t | App mobile \u0111a t\xednh n\u0103ng (chat, \u0111\u01a1n h\xe0ng, b\u1ea3n \u0111\u1ed3...) | Backend ri\xeang theo y\xeau c\u1ea7u (Node.js, Laravel, Firebase...) | CMS ho\u1eb7c CRM t\xf9y bi\u1ebfn | T\xedch h\u1ee3p thanh to\xe1n, email marketing, analytics... | B\u1ea3o tr\xec \u2013 n\xe2ng c\u1ea5p 1 n\u0103m | \u0110\xe0o t\u1ea1o \u0111\u1ed9i ng\u0169 n\u1ed9i b\u1ed9 qu\u1ea3n l\xfd s\u1ea3n ph\u1ea9m | H\u1ed7 tr\u1ee3 chi\u1ebfn d\u1ecbch ra m\u1eaft s\u1ea3n ph\u1ea9m (Branding + Landing)","UI/UX \uc804\ub7b5\ubd80\ud130 \uc81c\ud488 \ub7f0\uce6d\uae4c\uc9c0 \uc6d0\uc2a4\ud1b1 \ub514\uc9c0\ud138 \uc194\ub8e8\uc158 | \uc804\ub7b5\ubd80\ud130 \ud504\ub85c\ud1a0\ud0c0\uc785\uae4c\uc9c0 \uc644\uc131\ud615 UI/UX \ub514\uc790\uc778 | SEO \ucd5c\uc801\ud654 + \ube60\ub978 \uc18d\ub3c4 + \ub192\uc740 \uc804\ud658\uc728\uc758 \uc6f9\uc0ac\uc774\ud2b8 | \ucc44\ud305, \uc8fc\ubb38, \uc9c0\ub3c4 \ub4f1 \ub2e4\uc591\ud55c \uae30\ub2a5\uc758 \ubaa8\ubc14\uc77c \uc571 | \ub9de\ucda4\ud615 \ubc31\uc5d4\ub4dc \uad6c\ucd95 (Node.js, Laravel, Firebase \ub4f1) | CMS \ub610\ub294 CRM \ucee4\uc2a4\ud130\ub9c8\uc774\uc9d5 \uac00\ub2a5 | \uacb0\uc81c, \uc774\uba54\uc77c \ub9c8\ucf00\ud305, \ubd84\uc11d \ud234 \ub4f1 \ud1b5\ud569 \uc9c0\uc6d0 | 1\ub144\uac04 \uc720\uc9c0\ubcf4\uc218 \ubc0f \uc5c5\uadf8\ub808\uc774\ub4dc | \uc0ac\ub0b4 \uc6b4\uc601\ud300 \ub300\uc0c1 \uc81c\ud488 \uad00\ub9ac \uad50\uc721 | \ube0c\ub79c\ub4dc/\ub79c\ub529 \ud398\uc774\uc9c0 \uc911\uc2ec\uc758 \ucd9c\uc2dc \ucea0\ud398\uc778 \uc9c0\uc6d0\n","UI/UX\u8a2d\u8a08\u304b\u3089\u88fd\u54c1\u30ed\u30fc\u30f3\u30c1\u307e\u3067\u306e\u30c8\u30fc\u30bf\u30eb\u30b5\u30dd\u30fc\u30c8 | \u6226\u7565\u304b\u3089\u30d7\u30ed\u30c8\u30bf\u30a4\u30d7\u307e\u3067\u306e\u5b8c\u5168\u306aUI/UX\u30c7\u30b6\u30a4\u30f3 | SEO\u5bfe\u5fdc\u30fb\u9ad8\u901f\u30fb\u30b3\u30f3\u30d0\u30fc\u30b8\u30e7\u30f3\u306b\u5f37\u3044Web\u30b5\u30a4\u30c8 | \u30c1\u30e3\u30c3\u30c8\u30fb\u6ce8\u6587\u30fb\u5730\u56f3\u306a\u3069\u591a\u6a5f\u80fd\u30e2\u30d0\u30a4\u30eb\u30a2\u30d7\u30ea | \u8981\u4ef6\u306b\u5fdc\u3058\u305f\u30d0\u30c3\u30af\u30a8\u30f3\u30c9\u958b\u767a\uff08Node.js, Laravel, Firebase\u7b49\uff09| \u30ab\u30b9\u30bf\u30de\u30a4\u30ba\u53ef\u80fd\u306aCMS\u307e\u305f\u306fCRM | \u6c7a\u6e08\u30fb\u30e1\u30fc\u30eb\u30de\u30fc\u30b1\u30c6\u30a3\u30f3\u30b0\u30fb\u5206\u6790\u30c4\u30fc\u30eb\u7d71\u5408\u5bfe\u5fdc | 1\u5e74\u9593\u306e\u4fdd\u5b88\u30fb\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u4ed8\u304d | \u793e\u5185\u30c1\u30fc\u30e0\u5411\u3051\u306e\u30d7\u30ed\u30c0\u30af\u30c8\u904b\u7528\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0 | \u30d6\u30e9\u30f3\u30c9\u6226\u7565\uff0b\u30e9\u30f3\u30c7\u30a3\u30f3\u30b0\u652f\u63f4\u306b\u3088\u308b\u30ed\u30fc\u30f3\u30c1\u30b5\u30dd\u30fc\u30c8",\npricing_combo_solution_money,Custom Consultation & Quote (\u20ab100M\u2013\u20ab200M+),T\u01b0 v\u1ea5n & b\xe1o gi\xe1 theo y\xeau c\u1ea7u (100\u2013200tr+),\uc694\uad6c\uc5d0 \ub530\ub978 \ub9de\ucda4 \uc0c1\ub2f4 \ubc0f \uacac\uc801 (\u20ab100M\u2013\u20ab200M \uc774\uc0c1),\u3054\u8981\u671b\u306b\u5fdc\u3058\u305f\u3054\u76f8\u8ac7\u30fb\u304a\u898b\u7a4d\u3082\u308a\uff08\u20ab100\u4e07\uff5e\u20ab200\u4e07\u4ee5\u4e0a\uff09,\ncareer_title,Career,Tuy\u1ec3n d\u1ee5ng,\uacbd\ub825,\u30ad\u30e3\u30ea\u30a2,\ncareer_job_title,Job,C\xf4ng vi\u1ec7c,\uc9c1\uc5c5,\u4ed5\u4e8b,\ncareer_salary,Salary,M\u1ee9c l\u01b0\u01a1ng,\uae09\uc5ec,\u7d66\u6599,\ncareer_expired_date,Expired date,Ng\xe0y h\u1ebft h\u1ea1n,\ub9cc\ub8cc\uc77c,\u6709\u52b9\u671f\u9650\u5207\u308c,\ncareer_apply_title,How to submit your CV,H\u01b0\u1edbng d\u1eabn n\u1ed9p CV,\uc774\ub825\uc11c \uc81c\ucd9c \uc548\ub0b4,\u5c65\u6b74\u66f8\u306e\u63d0\u51fa\u65b9\u6cd5,\ncareer_how_to_apply,"To apply, please send your CV to the following email address:",\u0110\u1ec3 \u1ee9ng tuy\u1ec3n vui l\xf2ng g\u1eedi CV t\u1edbi email:,\uc9c0\uc6d0\uc744 \uc6d0\ud558\uc2dc\ub294 \ubd84\uc740 \uc544\ub798 \uc774\uba54\uc77c \uc8fc\uc18c\ub85c \uc774\ub825\uc11c\ub97c \ubcf4\ub0b4\uc8fc\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4.,\u5fdc\u52df\u3092\u3054\u5e0c\u671b\u306e\u65b9\u306f\u3001\u4ee5\u4e0b\u306e\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u306b\u5c65\u6b74\u66f8\u3092\u9001\u4ed8\u3057\u3066\u304f\u3060\u3055\u3044\u3002,\ncareer_email,Email subject format:,C\xfa ph\xe1p ti\xeau \u0111\u1ec1 email:,\uc774\uba54\uc77c \uc81c\ubaa9 \ud615\uc2dd:,\u30e1\u30fc\u30eb\u4ef6\u540d\u306e\u66f8\u304d\u65b9\uff1a,\ncareer_format,"""Your Name + Position Applied For""","""T\xean + v\u1ecb tr\xed \u1ee9ng tuy\u1ec3n""","""\uc774\ub984 + \uc9c0\uc6d0 \uc9c1\ubb34""",\u300c\u6c0f\u540d + \u5fdc\u52df\u8077\u7a2e\u300d,\ncareer_contact,Contact us for more details.,Li\xean h\u1ec7 \u0111\u1ec3 bi\u1ebft th\xeam th\xf4ng tin chi ti\u1ebft:,\uc790\uc138\ud55c \uc0ac\ud56d\uc740 \ubb38\uc758\ud574 \uc8fc\uc138\uc694.,\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u304a\u554f\u3044\u5408\u308f\u305b\u304f\u3060\u3055\u3044\u3002,',k=$.wl
if(k)return!0
try{w=A.Cg(B.a([l],x.t),!0,null,",",'"','"',"\n",!0,!0,null).lL(l,x.z)
if(J.aM(w)===0){B.bp("No translations available: bundled CSV is empty")
return!1}k=J.zx(w)
v=new B.cE(k,B.O(k).h("cE<1,c>"))
$.uD.a9(0)
u=1
for(;;){k=u
n=J.aM(w)
if(typeof k!=="number")return k.c2()
if(!(k<n))break
t=J.dd(w,u)
s=J.bR(J.dd(t,0))
r=1
for(;;){k=r
n=J.aM(v.gaE())
if(typeof k!=="number")return k.c2()
if(!(k<n))break
k=v
n=B.ax(r)
q=k.$ti.y[1].a(J.dd(k.a,n)).toLowerCase()
k=r
n=J.aM(t)
if(typeof k!=="number")return k.c2()
p=k<n?J.bR(J.dd(t,r)):""
$.uD.dn(s,new A.oX()).j(0,q,p)
k=r
if(typeof k!=="number")return k.bA()
r=k+1}k=u
if(typeof k!=="number")return k.bA()
u=k+1}$.wl=!0
return!0}catch(m){o=B.G(m)
B.bp("Error parsing bundled translations: "+B.m(o))
return!1}},
l(d,e){var w=$.uD.k(0,d)
w=w==null?null:w.k(0,e)
return w==null?"Translation not found":w},
oW:function oW(){},
oZ:function oZ(){},
oX:function oX(){},
de:function de(d){this.a=d},
lm:function lm(){this.c=this.a=null},
dl:function dl(d){this.a=d},
jV:function jV(){var _=this
_.d=!0
_.e=!1
_.c=_.a=null},
kj:function kj(d){this.a=d},
nC(d,e,f,g){return e},
nB:function nB(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=$
_.x=null
_.y=0
_.z=null
_.Q=$
_.at=_.as=!1
_.CW=_.ch=_.ay=_.ax=0
_.cx=$},
hy:function hy(d){this.a=d},
hx:function hx(d,e){this.a=d
this.b=e},
E6(d,e,f){return A.tL(new A.uc(d,f,e,null),x.cD)},
tL(d,e){return A.Dd(d,e,e)},
Dd(d,e,f){var w=0,v=B.d5(f),u,t=2,s=[],r=[],q,p
var $async$tL=B.cz(function(g,h){if(g===1){s.push(h)
w=t}for(;;)switch(w){case 0:q=b.G.AbortController
p=new A.jo(B.o(new q()))
t=3
w=6
return B.dL(d.$1(p),$async$tL)
case 6:q=h
u=q
r=[1]
w=4
break
r.push(5)
w=4
break
case 3:r=[2]
case 4:t=2
q=p
q.c=!0
q.a.abort()
w=r.pop()
break
case 5:case 1:return B.d2(u,v)
case 2:return B.d1(s.at(-1),v)}})
return B.d3($async$tL,v)},
uc:function uc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
jm:function jm(){},
fM:function fM(){},
mO:function mO(){},
mP:function mP(){},
mQ:function mQ(){},
vc(d,e,f){var w
if(!(d instanceof A.eJ)){w=J.bR(d)
if(C.a.G(w,"TypeError: "))w=C.a.K(w,11)
d=new A.eJ(w,f.b)}B.w3(d,e)},
iZ(d,e){return A.D1(d,e)},
D1(a3,a4){var $async$iZ=B.cz(function(a5,a6){switch(a5){case 2:r=u
w=r.pop()
break
case 1:s.push(a6)
w=t}for(;;)switch(w){case 0:e={}
d=B.J(a4.body)
a0=d==null?null:B.o(d.getReader())
if(a0==null){w=1
break}q=!1
e.a=!1
t=4
d=x.hD,k=x.m
case 7:w=9
return A.mb(A.vq(B.o(a0.read()),k),$async$iZ,v)
case 9:p=a6
if(B.dK(p.done)){q=!0
w=8
break}j=p.value
j.toString
w=10
u=[1,5]
return A.mb(A.By(d.a(j)),$async$iZ,v)
case 10:w=7
break
case 8:r.push(6)
w=5
break
case 4:t=3
a1=s.pop()
o=B.G(a1)
n=B.a_(a1)
e.a=!0
A.vc(o,n,a3)
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
w=!q?11:12
break
case 11:t=14
d=A.vq(B.o(a0.cancel()),x.X)
h=new A.tG()
g=x.h5.a(new A.tH(e))
k=d.$ti
j=$.D
f=new B.z(j,k)
if(j!==C.i){h=B.xW(h,j)
x.iW.a(g)}d.bE(new B.bJ(f,6,g,h,k.h("bJ<1,1>")))
w=17
return A.mb(f,$async$iZ,v)
case 17:t=2
w=16
break
case 14:t=13
a2=s.pop()
m=B.G(a2)
l=B.a_(a2)
if(!e.a)A.vc(m,l,a3)
w=16
break
case 13:w=2
break
case 16:case 12:w=r.pop()
break
case 6:case 1:return A.mb(null,0,v)
case 2:return A.mb(s.at(-1),1,v)}})
var w=0,v=A.CX($async$iZ,x.f4),u,t=2,s=[],r=[],q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
return A.D7(v)},
jo:function jo(d){this.a=d
this.c=!1},
mT:function mT(d){this.a=d},
tG:function tG(){},
tH:function tH(d){this.a=d},
eI:function eI(d){this.a=d},
mX:function mX(d){this.a=d},
vX(d,e){return new A.eJ(d,e)},
eJ:function eJ(d,e){this.a=d
this.b=e},
AR(d,e){var w=new Uint8Array(0),v=$.yx()
if(!v.b.test(d))B.a0(B.cj(d,"method","Not a valid method"))
v=x.N
return new A.kJ(C.n,w,d,e,B.uE(new A.mO(),new A.mP(),v,v))},
kJ:function kJ(d,e,f,g,h){var _=this
_.x=d
_.y=e
_.a=f
_.b=g
_.r=h
_.w=!1},
q4(d){var w=0,v=B.d5(x.cD),u,t,s,r,q,p,o,n
var $async$q4=B.cz(function(e,f){if(e===1)return B.d1(f,v)
for(;;)switch(w){case 0:w=3
return B.dL(d.w.iG(),$async$q4)
case 3:t=f
s=d.b
r=d.a
q=d.e
p=d.c
o=A.yu(t)
n=t.length
o=new A.f6(o,r,s,p,n,q,!1,!0)
o.fG(s,n,q,!1,!0,p,r)
u=o
w=1
break
case 1:return B.d2(u,v)}})
return B.d3($async$q4,v)},
Cr(d){var w=d.k(0,"content-type")
if(w!=null)return A.ws(w)
return A.p9("application","octet-stream",null)},
f6:function f6(d,e,f,g,h,i,j,k){var _=this
_.w=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i
_.f=j
_.r=k},
hN:function hN(){},
l_:function l_(d,e,f,g,h,i,j,k){var _=this
_.w=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i
_.f=j
_.r=k},
zH(d){return B.r(d).toLowerCase()},
fN:function fN(d,e,f){this.a=d
this.c=e
this.$ti=f},
ws(d){return A.En("media type",d,new A.pa(d),x.br)},
p9(d,e,f){var w=x.N
if(f==null)w=B.A(w,w)
else{w=new A.fN(A.Dk(),B.A(w,x.gc),x.kj)
w.v(0,f)}return new A.f1(d.toLowerCase(),e.toLowerCase(),new B.cv(w,x.ph))},
f1:function f1(d,e,f){this.a=d
this.b=e
this.c=f},
pa:function pa(d){this.a=d},
pc:function pc(d){this.a=d},
pb:function pb(){},
DB(d){var w
d.i5($.ze(),"quoted string")
w=d.gf_().k(0,0)
return B.uj(C.a.p(w,1,w.length-1),$.zd(),x.jt.a(x.L.a(new A.tS())),null)},
tS:function tS(){},
eG:function eG(d,e){this.c=d
this.a=e},
df(d){var w=$.vQ.k(0,d)
if(w==null){w=new A.ji(d,B.a([],x.ox))
$.vQ.j(0,d,w)}return w},
jR:function jR(d,e){this.c=d
this.a=e},
fL:function fL(d,e,f,g){var _=this
_.c=d
_.d=e
_.a=f
_.b=g},
eD:function eD(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
lt:function lt(d,e,f,g,h,i,j){var _=this
_.d$=d
_.e$=e
_.f$=f
_.cy=null
_.db=g
_.c=_.b=_.a=null
_.d=h
_.e=null
_.f=i
_.w=_.r=null
_.x=j
_.Q=_.z=_.y=null
_.as=!1
_.at=!0
_.ax=!1
_.CW=null
_.cx=!1},
ck:function ck(d,e,f){var _=this
_.w=d
_.x=e
_.y=null
_.z=f
_.d=$
_.c=_.b=_.a=null},
ji:function ji(d,e){var _=this
_.a=d
_.e=_.d=_.c=_.b=$
_.f=e
_.r=!0},
mM:function mM(d){this.a=d},
mN:function mN(){},
mj(d,e,f,g){var w
x.Y.a(e)
g.h("~(0)?").a(f)
w=B.A(x.N,x.v)
if(e!=null)w.j(0,"click",new A.tR(e))
if(f!=null)w.j(0,"input",A.Cj("onInput",f,g))
return w},
Cj(d,e,f){return new A.tj(e,f)},
xJ(d){return new B.cf(A.Cx(d),x.hW)},
Cx(d){return function(){var w=d
var v=0,u=1,t=[],s,r
return function $async$xJ(e,f,g){if(f===1){t.push(g)
v=u}for(;;)switch(v){case 0:s=0
case 2:if(!(s<B.ax(w.length))){v=4
break}r=B.J(w.item(s))
r.toString
v=5
return e.b=r,1
case 5:case 3:++s
v=2
break
case 4:return 0
case 1:return e.c=t.at(-1),3}}}},
tR:function tR(d){this.a=d},
tj:function tj(d,e){this.a=d
this.b=e},
ti:function ti(d){this.a=d},
th:function th(d){this.a=d},
yi(d,e){return new A.ml(e,d,null)},
j2(d,e){return new A.mm(e,d,null)},
yj(d,e){return new A.mn(e,d,null)},
eB(d,e,f){return new A.mv(f,e,d,null)},
vf(d,e){return new A.me(e,d,null)},
j(d,e,f,g,h){return new A.d7(g,e,h,f,d,null)},
eA(d,e,f){return new A.mu(e,f,d,null)},
j1(d,e,f,g,h,i){return new A.mg(h,f,i,e,g,d,null)},
u1(d,e,f,g,h){return new A.j4(f,g,d,e,null,h.h("j4<0>"))},
xH(d){var w=null
switch(d){case!0:w="true"
break
case!1:w="false"
break
case null:case void 0:break}return w},
aA(d,e,f,g,h,i){return new A.j3(d,i,f,g,e,h,null)},
yl(d,e,f,g,h){return new A.mq(g,f,h,e,d,null)},
d6(d,e,f,g,h,i,j,k){return new A.md(h,k,i,f,j,e,g,d,null)},
mp:function mp(d,e){this.w=d
this.a=e},
ml:function ml(d,e,f){this.d=d
this.w=e
this.a=f},
mm:function mm(d,e,f){this.d=d
this.w=e
this.a=f},
mn:function mn(d,e,f){this.d=d
this.w=e
this.a=f},
mo:function mo(d,e,f){this.d=d
this.w=e
this.a=f},
mr:function mr(d,e,f){this.d=d
this.w=e
this.a=f},
mv:function mv(d,e,f,g){var _=this
_.c=d
_.d=e
_.w=f
_.a=g},
me:function me(d,e,f){this.e=d
this.x=e
this.a=f},
d7:function d7(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.w=h
_.a=i},
mu:function mu(d,e,f,g){var _=this
_.d=d
_.e=e
_.w=f
_.a=g},
mg:function mg(d,e,f,g,h,i,j){var _=this
_.f=d
_.w=e
_.x=f
_.y=g
_.z=h
_.Q=i
_.a=j},
j4:function j4(d,e,f,g,h,i){var _=this
_.c=d
_.e=e
_.x=f
_.as=g
_.a=h
_.$ti=i},
a9:function a9(d,e,f){this.c=d
this.a=e
this.b=f},
mt:function mt(d,e,f,g){var _=this
_.x=d
_.y=e
_.Q=f
_.a=g},
mw:function mw(d,e,f,g){var _=this
_.ax=d
_.ch=e
_.CW=f
_.a=g},
j3:function j3(d,e,f,g,h,i,j){var _=this
_.c=d
_.e=e
_.f=f
_.w=g
_.z=h
_.Q=i
_.a=j},
mq:function mq(d,e,f,g,h,i){var _=this
_.c=d
_.as=e
_.at=f
_.ax=g
_.ch=h
_.a=i},
md:function md(d,e,f,g,h,i,j,k,l){var _=this
_.c=d
_.d=e
_.r=f
_.y=g
_.z=h
_.Q=i
_.as=j
_.at=k
_.a=l},
qE:function qE(d,e){this.a=d
this.b=e},
mf:function mf(d){this.a=d},
j5:function j5(d,e,f){this.e=d
this.w=e
this.a=f},
nG:function nG(d,e){this.a=d
this.b=e},
lu:function lu(){},
cx:function cx(d,e){this.b=d
this.c=e},
lS:function lS(d){this.b=d},
mR:function mR(d,e){this.b=d
this.c=e},
mS:function mS(d,e){this.a=d
this.b=e},
aR:function aR(d){this.a=d},
dB:function dB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.e=g},
jE:function jE(d){this.a=d},
dJ:function dJ(d){this.a=d},
m9:function m9(){},
lL:function lL(d){this.a=d},
mE:function mE(d,e){this.a=d
this.b=e},
jL:function jL(d,e,f){this.c=d
this.a=e
this.b=f},
nV:function nV(d,e){this.a=d
this.b=e},
hg:function hg(d,e,f){this.c=d
this.a=e
this.b=f},
fI:function fI(d,e,f){this.c=d
this.a=e
this.b=f},
oc:function oc(d){this.a=d},
ik:function ik(){},
lT:function lT(d){this.a=d},
ll:function ll(){},
m7:function m7(d){this.a=d},
er:function er(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aI:function aI(d,e){this.a=d
this.b=e},
l4:function l4(d,e,f){this.c=d
this.a=e
this.b=f},
jM:function jM(d,e,f){this.c=d
this.a=e
this.b=f},
hS:function hS(){},
l5:function l5(d,e){this.a=d
this.b=e},
hR:function hR(){},
dH:function dH(d){this.a=d},
ag:function ag(d,e){this.a=d
this.b=e},
k:function k(d,e){this.a=d
this.b=e},
DU(d){var w,v,u={},t=d.c.CW
if(t==null)w=null
else{t=t.d$
t.toString
w=t}if(w==null)return
u.a=!0
v=w.dC(new A.u0(u))
if(v!=null){u=B.J(v.parentNode)
if(u!=null)B.o(u.removeChild(v))
u=$.vE()
t=B.bN(v.nodeValue)
u=u.ah(t==null?"":t).b
if(1>=u.length)return B.b(u,1)
u=u[1]
u.toString
d.nm(C.H.eK(C.O.ff(u),null))}},
u0:function u0(d){this.a=d},
ct:function ct(d,e){this.a=d
this.$ti=e},
qD:function qD(d){this.a=d},
Ah(d){var w=B.eQ(x.h,x.X),v=($.ao+1)%16777215
$.ao=v
return new A.aW(w,v,d,C.k)},
c4:function c4(d,e){this.b=d
this.a=e},
lM:function lM(d,e,f,g,h,i,j){var _=this
_.d$=d
_.e$=e
_.f$=f
_.cy=null
_.db=g
_.c=_.b=_.a=null
_.d=h
_.e=null
_.f=i
_.w=_.r=null
_.x=j
_.Q=_.z=_.y=null
_.as=!1
_.at=!0
_.ax=!1
_.CW=null
_.cx=!1},
c5:function c5(){},
aW:function aW(d,e,f,g){var _=this
_.ry=d
_.c=_.b=_.a=_.cy=null
_.d=e
_.e=null
_.f=f
_.w=_.r=null
_.x=g
_.Q=_.z=_.y=null
_.as=!1
_.at=!0
_.ax=!1
_.CW=null
_.cx=!1},
e0:function e0(){},
dZ:function dZ(){},
hh:function hh(d){this.a=d},
bn:function bn(){},
aq:function aq(){},
e3:function e3(){},
kX:function kX(d,e,f,g){var _=this
_.ry=d
_.to=null
_.x1=!1
_.c=_.b=_.a=_.cy=null
_.d=e
_.e=null
_.f=f
_.w=_.r=null
_.x=g
_.Q=_.z=_.y=null
_.as=!1
_.at=!0
_.ax=!1
_.CW=null
_.cx=!1},
qv:function qv(d){this.a=d},
qw:function qw(d){this.a=d},
M:function M(){},
kY:function kY(d,e,f){var _=this
_.c=_.b=_.a=_.cy=_.ry=null
_.d=d
_.e=null
_.f=e
_.w=_.r=null
_.x=f
_.Q=_.z=_.y=null
_.as=!1
_.at=!0
_.ax=!1
_.CW=null
_.cx=!1},
bF(d,e,f){var w=A.hC(d,!0)
f.h("bf<0>").a(e)
return x.p.a(w.cF(d)).fk(e,f)},
hC(d,e){var w=x.aX.a(d.fl(x.b))
if(w==null)throw B.d(B.aX("No ProviderScope found"))
if(e)d.i2(w)
return w},
hA:function hA(d,e,f,g,h){var _=this
_.a=d
_.c=null
_.d=e
_.e=f
_.f=g
_.r=h},
pj:function pj(d,e,f){this.a=d
this.b=e
this.c=f},
qC:function qC(){},
dr:function dr(d,e){this.d=d
this.a=e},
kH:function kH(d,e){var _=this
_.d=$
_.r=_.f=!1
_.k4$=d
_.ok$=e
_.c=_.a=null},
fg:function fg(d,e,f){this.d=d
this.b=e
this.a=f},
iJ:function iJ(d,e,f,g){var _=this
_.cm=null
_.i7=!0
_.ry=d
_.c=_.b=_.a=_.cy=null
_.d=e
_.e=null
_.f=f
_.w=_.r=null
_.x=g
_.Q=_.z=_.y=null
_.as=!1
_.at=!0
_.ax=!1
_.CW=null
_.cx=!1},
rX:function rX(d,e){this.a=d
this.b=e},
rW:function rW(){},
rY:function rY(d,e,f){this.a=d
this.b=e
this.c=f},
tg:function tg(){},
im:function im(){},
BM(d,e){return new A.iA(d,e)},
q9:function q9(d){this.a=d},
qa:function qa(d,e){this.a=d
this.b=e},
iA:function iA(d,e){this.a=d
this.b=e},
f8:function f8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
kh:function kh(d,e,f){this.c=d
this.as=e
this.a=f},
p_:function p_(d,e){this.a=d
this.b=e},
p0:function p0(d,e){this.a=d
this.b=e},
p1:function p1(d,e){this.a=d
this.b=e},
AV(d,e,f,g,h){var w,v,u,t,s,r=h.x
r===$&&B.B()
w=r.mF(0,g)
if(w==null)return null
v=A.DD(h.w,w)
for(r=new B.b2(v,B.f(v).h("b2<1,2>")).gt(0);r.n();){u=r.d
t=u.a
s=u.b
f.j(0,t,B.d0(s,0,s.length,C.n,!1))}return new A.ds(h,A.ya(e,A.E4(h.b,v)),d,null)},
ds:function ds(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
AU(d,e,f){return new A.ak(d,A.qf(d),f,e)},
qf(d){var w,v,u,t,s,r=new B.as("")
for(w=d.length,v=!1,u=0;u<w;++u){t=d[u]
if(v)r.a+="/"
s=t.a.b
r.a+=s
v=v||s!=="/"}w=r.a
return w.charCodeAt(0)==0?w:w},
AB(d,e){return new A.f0(d+": "+e,e)},
CF(d,e,f,g,h,i){var w,v,u,t,s=A.rg(),r=i.length,q=x.N,p=0
for(;;){if(!(p<i.length)){w=null
break}A:{v=i[p]
u=B.A(q,q)
s.b=u
t=A.AV(d,f,u,h,v)
if(t==null)break A
u=t.b
if(u.toLowerCase()===e.toLowerCase())w=B.a([t],x.E)
else break A
break}i.length===r||(0,B.P)(i);++p}if(w!=null)g.v(0,s.cR())
return w},
yd(d,e){var w=d.gX()
w=B.a([new A.ds(A.uO(new A.tP(),d.i(0),null),w,null,new B.fn(e))],x.E)
return new A.ak(w,A.qf(w),C.D,d)},
f9:function f9(d){this.a=d},
ak:function ak(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
qg:function qg(){},
f0:function f0(d,e){this.a=d
this.b=e},
tP:function tP(){},
jI:function jI(d,e){this.c=d
this.a=e},
hb:function hb(d,e,f){this.d=d
this.b=e
this.a=f},
ha:function ha(d,e,f){this.d=d
this.b=e
this.a=f},
qb:function qb(d,e){this.a=d
this.b=e},
qc:function qc(d){this.a=d},
E5(d,e){var w,v,u,t,s,r,q,p,o,n
for(w=$.vD().bi(0,d),w=new B.dz(w.a,w.b,w.c),v=x.lu,u=0,t="^";w.n();){s=w.d
r=(s==null?v.a(s):s).b
q=r.index
if(q>u)t+=B.uf(C.a.p(d,u,q))
p=r.length
if(1>=p)return B.b(r,1)
o=r[1]
o.toString
if(2>=p)return B.b(r,2)
n=r[2]
t+=n!=null?A.Cw(n,o):"(?<"+o+">[^/]+)"
C.b.m(e,o)
u=q+r[0].length}w=u<d.length?t+B.uf(C.a.K(d,u)):t
if(!C.a.an(d,"/"))w+="(?=/|$)"
return B.L(w.charCodeAt(0)==0?w:w,!1,!1)},
E4(d,e){var w,v,u,t,s,r,q,p
for(w=$.vD().bi(0,d),w=new B.dz(w.a,w.b,w.c),v=x.lu,u=0,t="";w.n();t=p){s=w.d
r=(s==null?v.a(s):s).b
q=r.index
if(q>u)t+=C.a.p(d,u,q)
if(1>=r.length)return B.b(r,1)
p=r[1]
p.toString
p=t+B.m(e.k(0,p))
u=q+r[0].length}w=u<d.length?t+C.a.K(d,u):t
return w.charCodeAt(0)==0?w:w},
Cw(d,e){var w,v=B.L("[:=!]",!0,!1),u=x.L.a(new A.tn())
B.uL(0,0,d.length,"startIndex")
w=B.Ee(d,v,u,0)
return"(?<"+e+">"+w+")"},
ya(d,e){if(d.length===0)return e
return(d==="/"?"":d)+"/"+e},
DD(d,e){var w,v,u,t=x.N
t=B.A(t,t)
for(w=0;w<d.length;++w){v=d[w]
u=e.aQ(v)
u.toString
t.j(0,v,u)}return t},
y8(d){var w=B.aH(d).i(0)
if(C.a.an(w,"?"))w=C.a.p(w,0,w.length-1)
return C.a.iB(C.a.an(w,"/")&&w!=="/"&&!C.a.B(w,"?")?C.a.p(w,0,w.length-1):w,"/?","?",1)},
tn:function tn(){},
pf:function pf(d,e){this.a=d
this.b=e},
jU:function jU(){},
oL:function oL(d){this.a=d},
kM:function kM(){},
ug(d,e,f,g,h,i){var w,v,u,t,s,r=null,q={}
q.a=i
x.r.a(d)
w=x.Z
w.a(e)
x.fM.a(f)
x.kk.a(g)
x.bP.a(i)
q.a=i
v=e.d
u=v.i(0)
t=new A.uh(q,u,e,f,g,d,h)
if(i==null)q.a=B.a([e],x.g1)
s=f.c.$2(d,new A.bu(u,v.gX(),r,r,r,C.D,v.gdq(),v.gdr(),h,r))
if(x.jv.b(s))return t.$1(s)
return s.ab(t,w)},
xN(d,e,f,g){var w
if(g>=f.a.length)return null
w=new A.tq(d,e,f,g).$1(null)
return w},
CG(d,e,f,g,h){var w,v,u,t,s
try{w=g.mj(d)
J.cC(h,w)
return w}catch(u){t=B.G(u)
if(t instanceof A.f0){v=t
t=v
s=t.a
A.aK("Match error: "+s)
return A.yd(B.aH(t.b),s)}else throw u}},
uh:function uh(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
ui:function ui(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
tq:function tq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
uO(d,e,f){var w=B.a([],x.s),v=new A.kL(e,f,d,w,D.ba)
v.x=A.E5(e,w)
return v},
f7:function f7(){},
kL:function kL(d,e,f,g,h){var _=this
_.b=d
_.d=e
_.e=f
_.w=g
_.x=$
_.a=h},
AX(d){var w=null,v=new A.dt(d,w)
v.jC(w,w,w,5,d)
return v},
wM(d){var w=d.lV(x.hj)
return w==null?null:w.d},
AT(d){var w,v,u=B.O(d),t=u.h("a8<1>")
u=B.b3(new B.a8(d,u.h("v(1)").a(new A.qe()),t),t.h("h.E"))
u.$flags=1
w=u
if(w.length!==0){u=B.a([],x.iw)
for(t=w.length,v=0;v<w.length;w.length===t||(0,B.P)(w),++v)u.push(w[v].a)
return A.Ab(u,x.H)}else return new A.ct(null,x.e1)},
dt:function dt(d,e){var _=this
_.c=d
_.x=_.w=_.r=$
_.a=e},
qn:function qn(){},
hD:function hD(d){var _=this
_.d=null
_.e=d
_.c=_.a=_.f=null},
qm:function qm(d){this.a=d},
ql:function ql(d,e){this.a=d
this.b=e},
qk:function qk(){},
qj:function qj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
qi:function qi(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
qh:function qh(d){this.a=d},
qe:function qe(){},
lX:function lX(){},
bu:function bu(d,e,f,g,h,i,j,k,l,m){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m},
w0(d){return new A.jB(d,".")},
vb(d){return d},
y5(d,e){var w,v,u,t,s,r,q,p
for(w=e.length,v=1;v<w;++v){if(e[v]==null||e[v-1]!=null)continue
for(;w>=1;w=u){u=w-1
if(e[u]!=null)break}t=new B.as("")
s=d+"("
t.a=s
r=B.O(e)
q=r.h("ea<1>")
p=new B.ea(e,0,w,q)
p.jF(e,0,w,r.c)
q=s+new B.U(p,q.h("c(S.E)").a(new A.tK()),q.h("U<S.E,c>")).T(0,", ")
t.a=q
t.a=q+("): part "+(v-1)+" was null, but part "+v+" was not.")
throw B.d(B.a5(t.i(0),null))}},
jB:function jB(d,e){this.a=d
this.b=e},
nw:function nw(){},
nx:function nx(){},
tK:function tK(){},
eS:function eS(){},
f2(d,e){var w,v,u,t,s,r,q=e.iZ(d)
e.b7(d)
if(q!=null)d=C.a.K(d,q.length)
w=x.s
v=B.a([],w)
u=B.a([],w)
w=d.length
if(w!==0){if(0>=w)return B.b(d,0)
t=e.aO(d.charCodeAt(0))}else t=!1
if(t){if(0>=w)return B.b(d,0)
C.b.m(u,d[0])
s=1}else{C.b.m(u,"")
s=0}for(r=s;r<w;++r)if(e.aO(d.charCodeAt(r))){C.b.m(v,C.a.p(d,s,r))
C.b.m(u,d[r])
s=r+1}if(s<w){C.b.m(v,C.a.K(d,s))
C.b.m(u,"")}return new A.pd(e,q,v,u)},
pd:function pd(d,e,f,g){var _=this
_.a=d
_.b=e
_.d=f
_.e=g},
wt(d){return new A.kv(d)},
kv:function kv(d){this.a=d},
B5(){if(A.uV().ga8()!=="file")return $.j8()
if(!C.a.an(A.uV().gX(),"/"))return $.j8()
if(A.aT(null,"a/b",null,null).fd()==="a\\b")return $.j9()
return $.yE()},
qB:function qB(){},
kx:function kx(d,e,f){this.d=d
this.e=e
this.f=f},
lf:function lf(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=g},
lk:function lk(d,e,f,g){var _=this
_.d=d
_.e=e
_.f=f
_.r=g},
r_:function r_(){},
aY:function aY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
bb:function bb(d,e){var _=this
_.w=null
_.b=0
_.c=d
_.e=_.d=0
_.r=null
_.$ti=e},
m6:function m6(){},
ta:function ta(d,e){this.a=d
this.b=e},
t9:function t9(d,e,f){this.a=d
this.b=e
this.c=f},
tb:function tb(d){this.a=d},
av:function av(d,e){this.a=d
this.$ti=e},
aV:function aV(d,e,f){this.a=d
this.b=e
this.$ti=f},
Ei(d,e){throw B.d(new A.e4(d,e))},
e4:function e4(d,e){this.a=d
this.b=e},
B3(d,e){var w=C.a.af("  ",e)
return new B.U(B.a(d.split("\n"),x.s),x.gL.a(new A.qA(w)),x.gQ).T(0,"\n")},
wS(d,e){var w=C.a.af("  ",e)
return C.b.T(B.a(d.split("\n"),x.s),"\n"+w)},
qA:function qA(d){this.a=d},
Cz(d,e,f){return d.a},
uq(d,e){var w,v,u,t=d.gaG()
if(t==null)return null
w=t.a
v=t.b
if(v==null)v=D.aG
u=t.c
return new B.iv(v,u==null?D.aH:u,w)},
vO(d,e){var w=d.gaL()!=null?1:0
if(d.gaG()!=null)++w
return(d.gaV()!=null?w+1:w)>1},
jh(d,e){var w,v,u,t=d.gaV()
if(t==null)return null
w=t.a
v=t.c
u=t.b
return new B.iu(w,u,v)},
vP(d,e,f,g,h,i){if(d instanceof A.b0)return g.$1(d)
if(d instanceof A.bq)return e.$1(d)
if(d instanceof A.bj)return f.$1(d)},
mH(d,e){var w=null
return new A.bq(w,new B.ft(d,w,w),w,e.h("bq<0>"))},
jg(d){return new A.b0(new B.fq(null),null,null,d.h("b0<0>"))},
y3(d){var w,v,u
if(d==null)return null
w=A.Ba(d).gbP()
v=B.O(w)
u=A.Al(new B.a8(w,v.h("v(1)").a(new A.tJ()),v.h("a8<1>")),x.B)
if(u==null)return null
return new A.lj(A.uU(B.a([u],x.d),null).a).i(0)},
uJ(d){var w,v=d.c,u=B.f(d).h("ab<w.0>").a(v.a),t=$.fG()
t.kY(u)
t.kR(u)
B.bg(B.az(u).a,null)
A.dP(u)
t=u.a
t===$&&B.B()
A.y3(t)
C.aY.i(u.w)
A.dP(u)
if(d.fr===$){w=D.I.dH()
d.fr!==$&&B.c1()
d.fr=w}A.dP(v.d)
v=u.a
v===$&&B.B()
A.y3(v)
return new A.pN()},
wJ(d){A:{break A}return null},
tk(d){var w,v=B.a(d.slice(0),B.O(d))
for(w=0;w<v.length;++w)v[w].aq()},
y9(d){return null},
dP(d){return C.a.dk(C.d.fe(J.H(d)&1048575,16),5,"0")},
xK(d){var w
A:{if(d instanceof A.ab){w=d
break A}if(x.fG.b(d)){w=d.giu()
break A}w=null}return w},
tp(d){var w
A:{w=d.a
break A}return w},
vs(d,e){var w=null,v=new A.fF(d,w,w,w,w,w,w,!1,e.h("fF<0>"))
v.dZ(w,w,!1,w,w)
return v},
Cy(d,e,f,g,h,i,j,k){var w,v,u,t,s,r=d.k(0,e)
if(r!=null)return r
w=f.y
w===$&&B.B()
v=w.mi(e)
u=v==null
t=u?i:v
s=t==null?w.a.r:t
if(s==null)s=w.a
if(s===f){w=h.$1$override(u?null:e)
d.j(0,e,w)
return w}w=g.$1(s)
d.j(0,e,w)
return w},
xL(d){var w,v=d.gbz()
if(v!=null){w=v.a
w=w.gai(w)}else w=!1
return w},
wH(d,e,f){var w=e==null?d.a:e,v=f==null?d.c:f
return new A.aO(w,A.wa(d.b.gd7().dJ(0,new A.pk()),x.O,x.F),v)},
wI(d,e,f,g){var w=new A.pO(e,g,f==null?B.eQ(x.nB,x.o):f)
w.kr(d)
return w},
AN(d,e,f){var w,v,u
if(e.length===0){w=d.y
w===$&&B.B()
return w}w=d.y
w===$&&B.B()
v=A.wH(w.b,null,null)
w=w.c.gd7().dJ(0,new A.pP())
u=w.$ti
return A.wI(e,f,A.wa(new B.b4(w,u.h("R<cH,aO>(1)").a(new A.pQ()),u.h("b4<1,R<cH,aO>>")),x.nB,x.o),v)},
k_(d,e,f){if(e instanceof A.e4)return
d.c.$2(e,f)},
Aj(d){return new A.oS(d)},
wd(d){return new B.cf(A.Ai(d),x.jP)},
Ai(d){return function(){var w=d
var v=0,u=1,t=[],s,r,q,p,o,n,m,l,k,j,i
return function $async$wd(e,f,g){if(f===1){t.push(g)
v=u}for(;;)switch(v){case 0:k=B.cJ(x.k)
j=x.lL
i=new A.i5(j)
i.a=i
i.b=i
s=new A.dU(i,x.er)
r=w.y
r===$&&B.B()
r=r.mA()
r=new B.dY(J.bc(r.a),r.b,B.f(r).h("dY<1>"))
q=j.c
p=j.h("dU<1>?")
j=j.h("eg<1>")
while(r.n()){o=r.a.gq()
n={}
if(o.d!==w)continue
m=o.c
if(m==null)continue
n.a=!1
m.fj(new A.oQ(n,w))
if(!n.a){q.a(m)
new A.eg(p.a(s),m,j).ky(i.a,i);++s.b}}case 2:if(!!s.gH(0)){v=3
break}l=i.b.hv();--s.b
if(!k.m(0,l)){v=2
break}v=4
return e.b=l,1
case 4:l.Y(new A.oR(w,k,s))
v=2
break
case 3:return 0
case 1:return e.c=t.at(-1),3}}}},
Ak(d,e){var w,v,u
try{e.$0()}catch(u){w=B.G(u)
v=B.a_(u)
A.k_(d,w,v)}},
k1(d,e,f,g,h){var w,v,u
try{e.$1(f)}catch(u){w=B.G(u)
v=B.a_(u)
A.k_(d,w,v)}},
k0(d,e,f,g,h,i){var w,v,u
try{e.$2(f,g)}catch(u){w=B.G(u)
v=B.a_(u)
A.k_(d,w,v)}},
ux(d,e,f,g,h,i,j,k){var w,v,u
try{e.$3(f,g,h)}catch(u){w=B.G(u)
v=B.a_(u)
A.k_(d,w,v)}},
wG(d,e,f,g,h){var w
if(d>=g)return null
if(e instanceof A.e4||x.fz.b(e))return null
w=C.d.iE(h.a*C.u.dE(Math.pow(2,d)))
if(w>f.a)return f
return new B.b1(w)},
af(d,e){return d},
wK(d,e){var w=A.af(d,e),v=w instanceof A.e6,u=v?w:null
if(v)return u
v=w instanceof A.dk
u=v?w:null
if(v)return u.y},
uK(d,e){var w
if(d.b)throw B.d(B.aX("called ProviderSubscription.read on a subscription that was closed"))
w=A.af(d,e)
w.gad().df()
w.gad().bO()
return w.fN()},
A0(d,e,f,g,h,i,j){var w,v=A.af(d,i)
A:{if(v instanceof A.e6){w=v
break A}if(v instanceof A.dk){w=v.y
break A}w=null}w=new A.dk(d,h,w,g,e,f,0,0,i.h("@<0>").C(j).h("dk<1,2>"))
A.af(d,i).c=w
return w},
xO(d,e,f,g){return},
j_(d,e){return},
AP(d,e){return d.fp(e)},
AO(d,e){return d.fo(e)},
eM:function eM(d,e){this.a=d
this.b=e},
dh:function dh(d,e){this.a=d
this.b=e},
aN:function aN(){},
fK:function fK(){},
bq:function bq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
b0:function b0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
mJ:function mJ(d,e){this.a=d
this.b=e},
mK:function mK(d,e){this.a=d
this.b=e},
mL:function mL(d,e,f){this.a=d
this.b=e
this.c=f},
bj:function bj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.$ti=g},
tJ:function tJ(){},
q5:function q5(d,e,f,g){var _=this
_.a=null
_.b=d
_.c=e
_.d=f
_.e=g},
q8:function q8(d,e){this.a=d
this.b=e},
q6:function q6(){},
q7:function q7(){},
jN:function jN(d,e){this.a=d
this.b=$
this.c=e},
pN:function pN(){},
uI:function uI(){},
cG:function cG(){},
kB:function kB(){},
kC:function kC(){},
kD:function kD(){},
kE:function kE(){},
kF:function kF(){},
h1:function h1(){},
lU:function lU(){},
ah:function ah(){},
w:function w(){},
px:function px(){},
py:function py(){},
pw:function pw(){},
pA:function pA(){},
pL:function pL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
pK:function pK(d){this.a=d},
pD:function pD(){},
pC:function pC(){},
pE:function pE(){},
pu:function pu(){},
pt:function pt(){},
pv:function pv(){},
pF:function pF(){},
pG:function pG(){},
pz:function pz(d,e){this.a=d
this.b=e},
pJ:function pJ(d,e,f){this.a=d
this.b=e
this.c=f},
pH:function pH(d,e,f){this.a=d
this.b=e
this.c=f},
pI:function pI(d,e,f){this.a=d
this.b=e
this.c=f},
pr:function pr(){},
ps:function ps(){},
pB:function pB(){},
pM:function pM(d){this.a=d},
dv:function dv(){},
bl:function bl(){},
da:function da(d,e){this.a=d
this.b=e},
ff:function ff(d){this.a=d},
dy:function dy(){},
ev:function ev(){},
fF:function fF(d,e,f,g,h,i,j,k,l){var _=this
_.dy=d
_.r=e
_.w=f
_.a=$
_.b=g
_.c=h
_.d=i
_.e=j
_.f=k
_.$ti=l},
cg:function cg(){},
iH:function iH(d,e,f,g,h,i,j,k,l){var _=this
_.fy=d
_.y2$=e
_.aM$=f
_.d8$=g
_.bN$=h
_.b=!1
_.c=i
_.e=null
_.f=0
_.r=!1
_.y=_.x=_.w=null
_.z=j
_.at=_.as=_.Q=!1
_.ax=0
_.ay=null
_.cy=_.CW=_.ch=!1
_.db=k
_.dy=_.dx=!1
_.fr=$
_.$ti=l},
d9:function d9(){},
bQ:function bQ(){},
aD:function aD(){},
ab:function ab(){},
cM:function cM(){},
hu:function hu(){},
e5:function e5(d,e){this.b=d
this.a=e},
h0:function h0(d){this.a=d},
aL:function aL(d,e,f){var _=this
_.a=d
_.b=e
_.c=null
_.d=f},
aO:function aO(d,e,f){this.a=d
this.b=e
this.c=f},
pk:function pk(){},
pl:function pl(d){this.a=d},
pm:function pm(d,e){this.a=d
this.b=e},
pO:function pO(d,e,f){this.a=d
this.b=e
this.c=f},
pP:function pP(){},
pQ:function pQ(){},
pR:function pR(d){this.a=d},
pS:function pS(){},
pT:function pT(d){this.a=d},
pU:function pU(d){this.a=d},
pV:function pV(){},
oS:function oS(d){this.a=d},
oQ:function oQ(d,e){this.a=d
this.b=e},
oR:function oR(d,e,f){this.a=d
this.b=e
this.c=f},
oP:function oP(d,e,f){this.a=d
this.b=e
this.c=f},
aE:function aE(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.c=e
_.d=$
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.y=$
_.z=k
_.Q=!1},
ph:function ph(d){this.a=d},
pi:function pi(){},
b6:function b6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f3:function f3(){},
ju:function ju(d){this.a=d},
n9:function n9(){},
aP:function aP(){},
b7:function b7(){},
pY:function pY(d){this.a=d},
e6:function e6(d,e,f,g,h,i,j,k,l){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.Q=h
_.a=i
_.b=!1
_.c=null
_.d=!1
_.xr$=j
_.y1$=k
_.$ti=l},
dk:function dk(d,e,f,g,h,i,j,k,l){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.Q=h
_.a=i
_.b=!1
_.c=null
_.d=!1
_.xr$=j
_.y1$=k
_.$ti=l},
dG:function dG(){},
hB:function hB(d,e,f){this.b=d
this.c=e
this.$ti=f},
pn:function pn(d){this.a=d},
po:function po(){},
pp:function pp(d,e){this.a=d
this.b=e},
pq:function pq(d,e){this.a=d
this.b=e},
lc:function lc(d){this.a=d},
c8:function c8(){},
q_:function q_(d,e,f){this.a=d
this.b=e
this.c=f},
q0:function q0(d,e,f){this.a=d
this.b=e
this.c=f},
q1:function q1(d,e){this.a=d
this.b=e},
q2:function q2(d,e){this.a=d
this.b=e},
q3:function q3(d){this.a=d},
db:function db(d,e,f){var _=this
_.z=d
_.r=_.f=_.e=_.d=_.c=_.b=_.a=_.as=_.Q=null
_.y=e
_.$ti=f},
ec:function ec(d){this.a=d
this.b=!1},
lB:function lB(){},
kG:function kG(d,e,f){var _=this
_.a=!1
_.b=d
_.c=e
_.d=f
_.r=_.f=_.e=null
_.x=_.w=!1
_.y=null},
pW:function pW(d){this.a=d},
pX:function pX(d,e){this.a=d
this.b=e},
bH:function bH(){},
il:function il(){},
io:function io(){},
iV:function iV(){},
iW:function iW(){},
cy:function cy(){},
bZ:function bZ(d,e,f){this.a=d
this.f=e
this.$ti=f},
wR(d,e){var w=null,v=A.y9(w),u=new A.hM(d,w,w,w,w,w,v,!1,e.h("hM<0>"))
u.dZ(v,w,!1,w,w)
return u},
hM:function hM(d,e,f,g,h,i,j,k,l){var _=this
_.k3=d
_.r=e
_.w=f
_.a=$
_.b=g
_.c=h
_.d=i
_.e=j
_.f=k
_.$ti=l},
qu:function qu(d){this.a=d},
fu:function fu(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.bn=d
_.i6=e
_.cl=null
_.fx=f
_.y2$=g
_.aM$=h
_.d8$=i
_.bN$=j
_.b=!1
_.c=k
_.e=null
_.f=0
_.r=!1
_.y=_.x=_.w=null
_.z=l
_.at=_.as=_.Q=!1
_.ax=0
_.ay=null
_.cy=_.CW=_.ch=!1
_.db=m
_.dy=_.dx=!1
_.fr=$
_.$ti=n},
rS:function rS(d){this.a=d},
iD:function iD(){},
iU:function iU(){},
j6:function j6(){},
hz:function hz(d,e,f,g,h,i,j,k,l){var _=this
_.k3=d
_.r=e
_.w=f
_.a=$
_.b=g
_.c=h
_.d=i
_.e=j
_.f=k
_.$ti=l},
fE:function fE(d,e,f,g,h,i,j,k,l){var _=this
_.fx=d
_.y2$=e
_.aM$=f
_.d8$=g
_.bN$=h
_.b=!1
_.c=i
_.e=null
_.f=0
_.r=!1
_.y=_.x=_.w=null
_.z=j
_.at=_.as=_.Q=!1
_.ax=0
_.ay=null
_.cy=_.CW=_.ch=!1
_.db=k
_.dy=_.dx=!1
_.fr=$
_.$ti=l},
hZ:function hZ(){},
ip:function ip(){},
iq:function iq(){},
uv(d,e){if(e<0)B.a0(A.aQ("Offset may not be negative, was "+e+"."))
else if(e>d.c.length)B.a0(A.aQ("Offset "+e+y.c+d.gl(0)+"."))
return new A.jK(d,e)},
qr:function qr(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.d=null},
jK:function jK(d,e){this.a=d
this.b=e},
fo:function fo(d,e,f){this.a=d
this.b=e
this.c=f},
Ad(d,e){var w=A.Ae(B.a([A.Bt(d,!0)],x.g7)),v=new A.oJ(e).$0(),u=C.d.i(C.b.ga2(w).b+1),t=A.Af(w)?0:3,s=B.O(w)
return new A.op(w,v,null,1+Math.max(u.length,t),new B.U(w,s.h("e(1)").a(new A.or()),s.h("U<1,e>")).n6(0,D.G),!A.DX(new B.U(w,s.h("i?(1)").a(new A.os()),s.h("U<1,i?>"))),new B.as(""))},
Af(d){var w,v,u
for(w=0;w<d.length-1;){v=d[w];++w
u=d[w]
if(v.b+1!==u.b&&J.Q(v.c,u.c))return!1}return!0},
Ae(d){var w,v,u=A.DO(d,new A.ou(),x.C,x.K)
for(w=B.f(u),v=new B.cN(u,u.r,u.e,w.h("cN<2>"));v.n();)J.vL(v.d,new A.ov())
w=w.h("b2<1,2>")
v=w.h("c3<h.E,bK>")
w=B.b3(new B.c3(new B.b2(u,w),w.h("h<bK>(h.E)").a(new A.ow()),v),v.h("h.E"))
return w},
Bt(d,e){var w=new A.rF(d).$0()
return new A.aS(w,!0,null)},
Bv(d){var w,v,u,t,s,r,q=d.ga7()
if(!C.a.B(q,"\r\n"))return d
w=d.gD().gW()
for(v=q.length-1,u=0;u<v;++u)if(q.charCodeAt(u)===13&&q.charCodeAt(u+1)===10)--w
v=d.gF()
t=d.gL()
s=d.gD().gN()
t=A.kR(w,d.gD().gU(),s,t)
s=B.bh(q,"\r\n","\n")
r=d.gam()
return A.qs(v,t,s,B.bh(r,"\r\n","\n"))},
Bw(d){var w,v,u,t,s,r,q
if(!C.a.an(d.gam(),"\n"))return d
if(C.a.an(d.ga7(),"\n\n"))return d
w=C.a.p(d.gam(),0,d.gam().length-1)
v=d.ga7()
u=d.gF()
t=d.gD()
if(C.a.an(d.ga7(),"\n")){s=A.tT(d.gam(),d.ga7(),d.gF().gU())
s.toString
s=s+d.gF().gU()+d.gl(d)===d.gam().length}else s=!1
if(s){v=C.a.p(d.ga7(),0,d.ga7().length-1)
if(v.length===0)t=u
else{s=d.gD().gW()
r=d.gL()
q=d.gD().gN()
t=A.kR(s-1,A.x5(w),q-1,r)
u=d.gF().gW()===d.gD().gW()?t:d.gF()}}return A.qs(u,t,v,w)},
Bu(d){var w,v,u,t,s
if(d.gD().gU()!==0)return d
if(d.gD().gN()===d.gF().gN())return d
w=C.a.p(d.ga7(),0,d.ga7().length-1)
v=d.gF()
u=d.gD().gW()
t=d.gL()
s=d.gD().gN()
t=A.kR(u-1,w.length-C.a.eZ(w,"\n")-1,s-1,t)
return A.qs(v,t,w,C.a.an(d.gam(),"\n")?C.a.p(d.gam(),0,d.gam().length-1):d.gam())},
x5(d){var w,v=d.length
if(v===0)return 0
else{w=v-1
if(!(w>=0))return B.b(d,w)
if(d.charCodeAt(w)===10)return v===1?0:v-C.a.dd(d,"\n",v-2)-1
else return v-C.a.eZ(d,"\n")-1}},
op:function op(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
oJ:function oJ(d){this.a=d},
or:function or(){},
oq:function oq(){},
os:function os(){},
ou:function ou(){},
ov:function ov(){},
ow:function ow(){},
ot:function ot(d){this.a=d},
oK:function oK(){},
ox:function ox(d){this.a=d},
oE:function oE(d,e,f){this.a=d
this.b=e
this.c=f},
oF:function oF(d,e){this.a=d
this.b=e},
oG:function oG(d){this.a=d},
oH:function oH(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
oC:function oC(d,e){this.a=d
this.b=e},
oD:function oD(d,e){this.a=d
this.b=e},
oy:function oy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
oz:function oz(d,e,f){this.a=d
this.b=e
this.c=f},
oA:function oA(d,e,f){this.a=d
this.b=e
this.c=f},
oB:function oB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
oI:function oI(d,e,f){this.a=d
this.b=e
this.c=f},
aS:function aS(d,e,f){this.a=d
this.b=e
this.c=f},
rF:function rF(d){this.a=d},
bK:function bK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
kR(d,e,f,g){if(d<0)B.a0(A.aQ("Offset may not be negative, was "+d+"."))
else if(f<0)B.a0(A.aQ("Line may not be negative, was "+f+"."))
else if(e<0)B.a0(A.aQ("Column may not be negative, was "+e+"."))
return new A.cb(g,d,f,e)},
cb:function cb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
kS:function kS(){},
kT:function kT(){},
B1(d,e,f){return new A.fb(f,d,e)},
kU:function kU(){},
fb:function fb(d,e,f){this.c=d
this.a=e
this.b=f},
fc:function fc(){},
qs(d,e,f,g){var w=new A.cQ(g,d,e,f)
w.jE(d,e,f)
if(!C.a.B(g,f))B.a0(B.a5('The context line "'+g+'" must contain "'+f+'".',null))
if(A.tT(g,f,d.gU())==null)B.a0(B.a5('The span text "'+f+'" must start at column '+(d.gU()+1)+' in a line within "'+g+'".',null))
return w},
cQ:function cQ(d,e,f,g){var _=this
_.d=d
_.a=e
_.b=f
_.c=g},
zI(d){var w,v,u=y.a
if(d.length===0)return new A.dg(B.bV(B.a([],x.ms),x.a))
w=$.vG()
if(C.a.B(d,w)){w=C.a.c5(d,w)
v=B.O(w)
return new A.dg(B.bV(new B.b4(new B.a8(w,v.h("v(1)").a(new A.n3()),v.h("a8<1>")),v.h("al(1)").a(A.Em()),v.h("b4<1,al>")),x.a))}if(!C.a.B(d,u))return new A.dg(B.bV(B.a([A.wW(d)],x.ms),x.a))
return new A.dg(B.bV(new B.U(B.a(d.split(u),x.s),x.jT.a(A.El()),x.fg),x.a))},
dg:function dg(d){this.a=d},
n3:function n3(){},
n8:function n8(){},
n7:function n7(){},
n5:function n5(){},
n6:function n6(d){this.a=d},
n4:function n4(d){this.a=d},
Aa(d){return A.w5(B.r(d))},
w5(d){return A.jO(d,new A.o2(d))},
A9(d){return A.A6(B.r(d))},
A6(d){return A.jO(d,new A.o0(d))},
A3(d){return A.jO(d,new A.nY(d))},
A7(d){return A.A4(B.r(d))},
A4(d){return A.jO(d,new A.nZ(d))},
A8(d){return A.A5(B.r(d))},
A5(d){return A.jO(d,new A.o_(d))},
jP(d){if(C.a.B(d,$.yB()))return B.aH(d)
else if(C.a.B(d,$.yC()))return A.xk(d,!0)
else if(C.a.G(d,"/"))return A.xk(d,!1)
if(C.a.B(d,"\\"))return $.zt().iJ(d)
return B.aH(d)},
jO(d,e){var w,v
try{w=e.$0()
return w}catch(v){if(x.c.b(B.G(v)))return new A.cw(A.aT(null,"unparsed",null,null),d)
else throw v}},
Z:function Z(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
o2:function o2(d){this.a=d},
o0:function o0(d){this.a=d},
o1:function o1(d){this.a=d},
nY:function nY(d){this.a=d},
nZ:function nZ(d){this.a=d},
o_:function o_(d){this.a=d},
kg:function kg(d){this.a=d
this.b=$},
Ba(d){if(x.a.b(d))return d
if(d instanceof A.dg)return d.iI()
return new A.kg(new A.qL(d))},
wW(d){var w,v,u
try{if(d.length===0){v=A.uU(B.a([],x.d),null)
return v}if(C.a.B(d,$.zk())){v=A.B9(d)
return v}if(C.a.B(d,"\tat ")){v=A.B8(d)
return v}if(C.a.B(d,$.z7())||C.a.B(d,$.z5())){v=A.B7(d)
return v}if(C.a.B(d,y.a)){v=A.zI(d).iI()
return v}if(C.a.B(d,$.za())){v=A.wU(d)
return v}v=A.wV(d)
return v}catch(u){v=B.G(u)
if(x.c.b(v)){w=v
throw B.d(B.aw(w.gf1()+"\nStack trace:\n"+d,null,null))}else throw u}},
Bc(d){return A.wV(B.r(d))},
wV(d){var w=B.bV(A.Bd(d),x.B)
return new A.al(w)},
Bd(d){var w,v=C.a.bx(d),u=$.vG(),t=x.U,s=new B.a8(B.a(B.bh(v,u,"").split("\n"),x.s),x.Q.a(new A.qM()),t)
if(!s.gt(0).n())return B.a([],x.d)
v=B.uS(s,s.gl(0)-1,t.h("h.E"))
u=B.f(v)
u=B.hm(v,u.h("Z(h.E)").a(A.DI()),u.h("h.E"),x.B)
w=B.b3(u,B.f(u).h("h.E"))
if(!C.a.an(s.ga2(0),".da"))C.b.m(w,A.w5(s.ga2(0)))
return w},
B9(d){var w,v,u=B.cc(B.a(d.split("\n"),x.s),1,null,x.N)
u=u.jb(0,u.$ti.h("v(S.E)").a(new A.qK()))
w=x.B
v=u.$ti
w=B.bV(B.hm(u,v.h("Z(h.E)").a(A.ye()),v.h("h.E"),w),w)
return new A.al(w)},
B8(d){var w=B.bV(new B.b4(new B.a8(B.a(d.split("\n"),x.s),x.Q.a(new A.qJ()),x.U),x.x.a(A.ye()),x.i4),x.B)
return new A.al(w)},
B7(d){var w=B.bV(new B.b4(new B.a8(B.a(C.a.bx(d).split("\n"),x.s),x.Q.a(new A.qH()),x.U),x.x.a(A.DG()),x.i4),x.B)
return new A.al(w)},
Bb(d){return A.wU(B.r(d))},
wU(d){var w=d.length===0?B.a([],x.d):new B.b4(new B.a8(B.a(C.a.bx(d).split("\n"),x.s),x.Q.a(new A.qI()),x.U),x.x.a(A.DH()),x.i4)
w=B.bV(w,x.B)
return new A.al(w)},
uU(d,e){var w=B.bV(d,x.B)
return new A.al(w)},
al:function al(d){this.a=d},
qL:function qL(d){this.a=d},
qM:function qM(){},
qK:function qK(){},
qJ:function qJ(){},
qH:function qH(){},
qI:function qI(){},
qO:function qO(){},
qN:function qN(d){this.a=d},
cw:function cw(d,e){this.a=d
this.w=e},
lj:function lj(d){this.a=d},
qZ:function qZ(d){this.a=d},
qY:function qY(){},
kW:function kW(d,e,f){this.a=d
this.b=e
this.c=f},
fd:function fd(){},
qt:function qt(d){this.a=d},
dF:function dF(d,e){var _=this
_.d=d
_.c=_.b=_.a=null
_.$ti=e},
l0:function l0(d,e,f){this.c=d
this.a=e
this.b=f},
qz:function qz(d,e){var _=this
_.a=d
_.b=e
_.c=0
_.e=_.d=null},
pZ:function pZ(){},
nA:function nA(){},
qX:function qX(){},
DW(d,e){var w,v,u,t,s
if(d==null)return null
w=e.y
v=d.Q
if(v==null)v=d.Q=new Map()
u=e.as
t=v.get(u)
if(t!=null)return t
s=B.dN(b.typeUniverse,d.x,w,0)
v.set(u,s)
return s},
aK(d){},
E7(d,e){var w="Extension"
if(C.b.B(B.a(["VM","Isolate","Debug","GC","_Echo","HeapSnapshot","Logging","Timer","Timeline","Profiler"],x.s),w))throw B.d(B.cj(w,"stream","Cannot be a protected stream."))
else if(C.a.G(w,"_"))throw B.d(B.cj(w,"stream","Cannot start with an underscore."))
return},
DO(d,e,f,g){var w,v,u,t,s,r=B.A(g,f.h("n<0>"))
for(w=f.h("x<0>"),v=0;v<1;++v){u=d[v]
t=e.$1(u)
s=r.k(0,t)
if(s==null){s=B.a([],w)
r.j(0,t,s)
t=s}else t=s
J.cC(t,u)}return r},
Al(d,e){var w=J.bc(d.a)
if(new B.cT(w,d.b,d.$ti.h("cT<1>")).n())return w.gq()
return null},
Cg(d,e,f,g,h,i,j,k,l,m){var w=null,v=A.nC(!0,g,",",w),u=A.nC(!0,h,'"',w),t=A.nC(!0,i,'"',h),s=A.nC(!0,j,"\r\n",w)
v=new A.nB(v,u,t,s,!0,m,!0)
v.w=new B.as("")
v.Q=!1
v.cx=new B.as("")
return v},
Dz(d){var w
if(d==null)return C.p
w=A.w2(d)
return w==null?C.p:w},
yu(d){return d},
Ej(d){return new A.eI(d)},
En(d,e,f,g){var w,v,u,t
try{u=f.$0()
return u}catch(t){u=B.G(t)
if(u instanceof A.fb){w=u
throw B.d(A.B1("Invalid "+d+": "+w.a,w.b,w.gaC()))}else if(x.c.b(u)){v=u
throw B.d(B.aw("Invalid "+d+' "'+e+'": '+v.gf1(),v.gaC(),v.gW()))}else throw t}},
AC(d){var w,v,u=x.N,t=B.A(u,u)
for(w=0;w<B.ax(d.length);++w){v=B.J(d.item(w))
t.j(0,B.r(v.name),B.r(v.value))}return t},
q(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6){return new B.iF(j,w,a6,a5,q,t,v,s,g,a0,u,a2,i,l,m,r,d,p,k,e,h,a3,n,o,a4,f,a1)},
yt(d){return C.a.dk(C.d.fe(B.aG(d)&1048575,16),5,"0")},
vi(){var w,v,u,t,s=null
try{s=A.uV()}catch(w){if(x.mA.b(B.G(w))){v=$.tm
if(v!=null)return v
throw w}else throw w}if(J.Q(s,$.xF)){v=$.tm
v.toString
return v}$.xF=s
if($.vw()===$.j8())v=$.tm=s.iD(".").i(0)
else{u=s.fd()
t=u.length-1
v=$.tm=t===0?u:C.a.p(u,0,t)}return v},
ym(d){var w
if(!(d>=65&&d<=90))w=d>=97&&d<=122
else w=!0
return w},
yc(d,e){var w,v,u=null,t=d.length,s=e+2
if(t<s)return u
if(!(e>=0&&e<t))return B.b(d,e)
if(!A.ym(d.charCodeAt(e)))return u
w=e+1
if(!(w<t))return B.b(d,w)
if(d.charCodeAt(w)!==58){v=e+4
if(t<v)return u
if(C.a.p(d,w,v).toLowerCase()!=="%3a")return u
e=s}w=e+2
if(t===w)return w
if(!(w>=0&&w<t))return B.b(d,w)
if(d.charCodeAt(w)!==47)return u
return e+3},
DX(d){var w,v,u,t
if(d.gl(0)===0)return!0
w=d.gau(0)
for(v=B.cc(d,1,null,d.$ti.h("S.E")),u=v.$ti,v=new B.ai(v,v.gl(0),u.h("ai<S.E>")),u=u.h("S.E");v.n();){t=v.d
if(!J.Q(t==null?u.a(t):t,w))return!1}return!0},
E9(d,e,f){var w=C.b.aJ(d,null)
if(w<0)throw B.d(B.a5(B.m(d)+" contains no null elements.",null))
C.b.j(d,w,e)},
ys(d,e,f){var w=C.b.aJ(d,e)
if(w<0)throw B.d(B.a5(B.m(d)+" contains no elements matching "+e.i(0)+".",null))
C.b.j(d,w,null)},
Dv(d,e){var w,v,u,t
for(w=new B.cl(d),v=x.V,w=new B.ai(w,w.gl(0),v.h("ai<C.E>")),v=v.h("C.E"),u=0;w.n();){t=w.d
if((t==null?v.a(t):t)===e)++u}return u},
tT(d,e,f){var w,v,u
if(e.length===0)for(w=0;;){v=C.a.aN(d,"\n",w)
if(v===-1)return d.length-w>=f?w:null
if(v-w>=f)return w
w=v+1}v=C.a.aJ(d,e)
while(v!==-1){u=v===0?0:C.a.dd(d,"\n",v-1)+1
if(f===v-u)return u
v=C.a.aN(d,e,v+1)}return null}},D
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[3],A)
D=c[4]
A.fZ.prototype={
m(d,e){B.f(this).c.a(e)
A.zP()}}
A.h_.prototype={
gl(d){return this.b},
gH(d){return this.b===0},
gai(d){return this.b!==0},
gt(d){var w,v=this,u=v.$keys
if(u==null){u=Object.keys(v.a)
v.$keys=u}w=u
return new B.en(w,w.length,v.$ti.h("en<1>"))},
B(d,e){if(typeof e!="string")return!1
if("__proto__"===e)return!1
return this.a.hasOwnProperty(e)}}
A.jY.prototype={
I(d,e){if(e==null)return!1
return e instanceof A.eR&&this.a.I(0,e.a)&&B.vl(this)===B.vl(e)},
gE(d){return B.bY(this.a,B.vl(this),C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c)},
i(d){var w=C.b.T([B.ay(this.$ti.c)],", ")
return this.a.i(0)+" with "+("<"+w+">")}}
A.eR.prototype={
$0(){return this.a.$1$0(this.$ti.y[0])},
$2(d,e){return this.a.$1$2(d,e,this.$ti.y[0])},
$S(){return A.DW(B.mh(this.a),this.$ti)}}
A.rf.prototype={
cR(){var w=this.b
if(w===this)throw B.d(new B.dn("Local '' has not been initialized."))
return w},
si8(d){if(this.b!==this)throw B.d(new B.dn("Local '' has already been initialized."))
this.b=d}}
A.lr.prototype={
jG(d,e){var w=this,v=new A.r7(d)
w.a=w.$ti.h("uQ<1>").a(new A.dA(new A.r9(v),null,new A.ra(w,v),new A.rb(w,d),e.h("dA<0>")))}}
A.ib.prototype={
i(d){return"IterationMarker("+this.b+", "+B.m(this.a)+")"}}
A.hw.prototype={
i(d){var w,v,u="ParallelWaitError",t=this.c
if(t==null){t=this.d
w=t<=1
if(w)return u
return"ParallelWaitError("+t+" errors)"}w=this.d
v=w>1
if(v)w="("+w+" errors)"
else w=""
return u+w+": "+B.m(t.a)},
gaD(){var w=this.c
w=w==null?null:w.b
return w==null?B.X.prototype.gaD.call(this):w}}
A.i9.prototype={
lp(d){x.lt.a(d)
this.a.aT(new A.rn(this,d),new A.ro(this,d),x.P)}}
A.iG.prototype={
aH(d){var w,v=this.$ti
v.h("1/?").a(d)
w=this.a
if((w.a&30)!==0)throw B.d(B.aX("Future already completed"))
w.bF(v.h("1/").a(d))},
a1(d){this.a.a1(d)}}
A.e9.prototype={
bq(d,e,f,g){return this.a.bq(B.f(this).h("~(e9.T)?").a(d),e,x.Y.a(f),g)}}
A.fv.prototype={
gkS(){var w,v=this
if((v.b&8)===0)return B.f(v).h("bL<1>?").a(v.a)
w=B.f(v)
return w.h("bL<1>?").a(w.h("bM<1>").a(v.a).c)},
ef(){var w,v,u,t=this
if((t.b&8)===0){w=t.a
if(w==null)w=t.a=new A.bL(B.f(t).h("bL<1>"))
return B.f(t).h("bL<1>").a(w)}v=B.f(t)
u=v.h("bM<1>").a(t.a)
w=u.c
if(w==null)w=u.c=new A.bL(v.h("bL<1>"))
return v.h("bL<1>").a(w)},
gcb(){var w=this.a
if((this.b&8)!==0)w=x.d1.a(w).c
return B.f(this).h("ee<1>").a(w)},
cI(){if((this.b&4)!==0)return new B.bG("Cannot add event after closing")
return new B.bG("Cannot add event while adding a stream")},
lC(d,e){var w,v,u,t,s,r=this,q=B.f(r)
q.h("aF<1>").a(d)
w=r.b
if(w>=4)throw B.d(r.cI())
if((w&2)!==0){q=new B.z($.D,x.j_)
q.bf(null)
return q}w=r.a
v=e===!0
u=new B.z($.D,x.j_)
t=q.h("~(1)").a(r.gjM())
s=v?A.Bk(r):r.gjK()
s=d.bq(t,v,r.gjV(),s)
v=r.b
if((v&1)!==0?(r.gcb().e&4)!==0:(v&2)===0)s.av()
r.a=new A.bM(w,u,s,q.h("bM<1>"))
r.b|=8
return u},
h_(){var w=this.c
if(w==null)w=this.c=(this.b&2)!==0?$.j7():new B.z($.D,x.W)
return w},
aq(){var w=this,v=w.b
if((v&4)!==0)return w.h_()
if(v>=4)throw B.d(w.cI())
w.fS()
return w.h_()},
fS(){var w=this.b|=4
if((w&1)!==0)this.ew()
else if((w&3)===0)this.ef().m(0,D.Y)},
e2(d){var w,v=this,u=B.f(v)
u.c.a(d)
w=v.b
if((w&1)!==0)v.ev(d)
else if((w&3)===0)v.ef().m(0,new A.ef(d,u.h("ef<1>")))},
e0(d,e){var w
B.aa(d)
x.l.a(e)
w=this.b
if((w&1)!==0)this.ex(d,e)
else if((w&3)===0)this.ef().m(0,new A.i3(d,e))},
fR(){var w=this,v=B.f(w).h("bM<1>").a(w.a)
w.a=v.c
w.b&=4294967287
v.a.bf(null)},
lg(d,e,f,g){var w,v,u,t,s,r,q=this,p=B.f(q)
p.h("~(1)?").a(d)
x.Y.a(f)
if((q.b&3)!==0)throw B.d(B.aX("Stream has already been listened to."))
w=$.D
v=g?1:0
x.bm.C(p.c).h("1(2)").a(d)
u=A.Bq(w,e)
t=new A.ee(q,d,u,x.M.a(f),w,v|32,p.h("ee<1>"))
s=q.gkS()
if(((q.b|=1)&8)!==0){r=p.h("bM<1>").a(q.a)
r.c=t
r.b.dB()}else q.a=t
t.lb(s)
t.ei(new A.rU(q))
return t},
kZ(d){var w,v,u,t,s,r,q,p,o=this,n=B.f(o)
n.h("du<1>").a(d)
w=null
if((o.b&8)!==0)w=n.h("bM<1>").a(o.a).al()
o.a=null
o.b=o.b&4294967286|2
v=o.r
if(v!=null)if(w==null)try{u=v.$0()
if(x.p8.b(u))w=u}catch(r){t=B.G(r)
s=B.a_(r)
q=new B.z($.D,x.W)
n=B.aa(t)
p=x.l.a(s)
q.bg(new B.ac(n,p))
w=q}else w=w.c_(v)
n=new A.rT(o)
if(w!=null)w=w.c_(n)
else n.$0()
return w},
$iuQ:1,
$ixa:1,
$ieh:1}
A.ls.prototype={
ev(d){var w=this.$ti
w.c.a(d)
this.gcb().e1(new A.ef(d,w.h("ef<1>")))},
ex(d,e){this.gcb().e1(new A.i3(d,e))},
ew(){this.gcb().e1(D.Y)}}
A.dA.prototype={}
A.dE.prototype={
gE(d){return(B.aG(this.a)^892482866)>>>0},
I(d,e){if(e==null)return!1
if(this===e)return!0
return e instanceof A.dE&&e.a===this.a}}
A.ee.prototype={
hn(){return this.w.kZ(this)},
cP(){var w=this.w,v=B.f(w)
v.h("du<1>").a(this)
if((w.b&8)!==0)v.h("bM<1>").a(w.a).b.av()
A.vd(w.e)},
cQ(){var w=this.w,v=B.f(w)
v.h("du<1>").a(this)
if((w.b&8)!==0)v.h("bM<1>").a(w.a).b.dB()
A.vd(w.f)}}
A.ln.prototype={
al(){var w=this.b.al()
return w.c_(new A.r0(this))}}
A.bM.prototype={}
A.fj.prototype={
lb(d){var w=this
B.f(w).h("bL<1>?").a(d)
if(d==null)return
w.r=d
if(d.c!=null){w.e=(w.e|128)>>>0
d.cz(w)}},
av(){var w,v,u=this,t=u.e
if((t&8)!==0)return
w=(t+256|4)>>>0
u.e=w
if(t<256){v=u.r
if(v!=null)if(v.a===1)v.a=3}if((t&4)===0&&(w&64)===0)u.ei(u.ghp())},
dB(){var w=this,v=w.e
if((v&8)!==0)return
if(v>=256){v=w.e=v-256
if(v<256)if((v&128)!==0&&w.r.c!=null)w.r.cz(w)
else{v=(v&4294967291)>>>0
w.e=v
if((v&64)===0)w.ei(w.ghq())}}},
al(){var w=this,v=(w.e&4294967279)>>>0
w.e=v
if((v&8)===0)w.e4()
v=w.f
return v==null?$.j7():v},
e4(){var w,v=this,u=v.e=(v.e|8)>>>0
if((u&128)!==0){w=v.r
if(w.a===1)w.a=3}if((u&64)===0)v.r=null
v.f=v.hn()},
cP(){},
cQ(){},
hn(){return null},
e1(d){var w,v=this,u=v.r
if(u==null)u=v.r=new A.bL(B.f(v).h("bL<1>"))
u.m(0,d)
w=v.e
if((w&128)===0){w=(w|128)>>>0
v.e=w
if(w<256)u.cz(v)}},
ev(d){var w,v=this,u=B.f(v).c
u.a(d)
w=v.e
v.e=(w|64)>>>0
v.d.fc(v.a,d,u)
v.e=(v.e&4294967231)>>>0
v.e7((w&4)!==0)},
ex(d,e){var w,v=this,u=v.e,t=new A.rd(v,d,e)
if((u&1)!==0){v.e=(u|16)>>>0
v.e4()
w=v.f
if(w!=null&&w!==$.j7())w.c_(t)
else t.$0()}else{t.$0()
v.e7((u&4)!==0)}},
ew(){var w,v=this,u=new A.rc(v)
v.e4()
v.e=(v.e|16)>>>0
w=v.f
if(w!=null&&w!==$.j7())w.c_(u)
else u.$0()},
ei(d){var w,v=this
x.M.a(d)
w=v.e
v.e=(w|64)>>>0
d.$0()
v.e=(v.e&4294967231)>>>0
v.e7((w&4)!==0)},
e7(d){var w,v,u=this,t=u.e
if((t&128)!==0&&u.r.c==null){t=u.e=(t&4294967167)>>>0
w=!1
if((t&4)!==0)if(t<256){w=u.r
w=w==null?null:w.c==null
w=w!==!1}if(w){t=(t&4294967291)>>>0
u.e=t}}for(;;d=v){if((t&8)!==0){u.r=null
return}v=(t&4)!==0
if(d===v)break
u.e=(t^64)>>>0
if(v)u.cP()
else u.cQ()
t=(u.e&4294967231)>>>0
u.e=t}if((t&128)!==0&&t<256)u.r.cz(u)},
$idu:1,
$ieh:1}
A.iE.prototype={
bq(d,e,f,g){var w=this.$ti
w.h("~(1)?").a(d)
x.Y.a(f)
return this.a.lg(w.h("~(1)?").a(d),g,f,e)}}
A.cU.prototype={
scr(d){this.a=x.lT.a(d)},
gcr(){return this.a}}
A.ef.prototype={
f6(d){this.$ti.h("eh<1>").a(d).ev(this.b)}}
A.i3.prototype={
f6(d){d.ex(this.b,this.c)}}
A.lC.prototype={
f6(d){d.ew()},
gcr(){return null},
scr(d){throw B.d(B.aX("No events after a done."))},
$icU:1}
A.bL.prototype={
cz(d){var w,v=this
v.$ti.h("eh<1>").a(d)
w=v.a
if(w===1)return
if(w>=1){v.a=1
return}B.d8(new A.rO(v,d))
v.a=1},
m(d,e){var w=this,v=w.c
if(v==null)w.b=w.c=e
else{v.scr(e)
w.c=e}}}
A.fk.prototype={
av(){var w=this.a
if(w>=0)this.a=w+2},
dB(){var w=this,v=w.a-2
if(v<0)return
if(v===0){w.a=1
B.d8(w.gho())}else w.a=v},
al(){this.a=-1
this.c=null
return $.j7()},
kO(){var w,v=this,u=v.a-1
if(u===0){v.a=-1
w=v.c
if(w!=null){v.c=null
v.b.fa(w)}}else v.a=u},
$idu:1}
A.i7.prototype={
bq(d,e,f,g){var w=this.$ti
w.h("~(1)?").a(d)
x.Y.a(f)
w=new A.fk($.D,w.h("fk<1>"))
B.d8(w.gho())
w.c=x.M.a(f)
return w}}
A.eY.prototype={
B(d,e){return!1},
gt(d){var w=this
return new A.ep(w,w.a,w.c,w.$ti.h("ep<1>"))},
gl(d){return this.b},
a9(d){var w,v,u=this;++u.a
if(u.b===0)return
w=u.c
w.toString
v=w
do{w=v.b
w.toString
v.sel(null)
v.sbI(null)
v.sbH(null)
if(w!==u.c){v=w
continue}else break}while(!0)
u.c=null
u.b=0},
gau(d){var w
if(this.b===0)throw B.d(B.aX("No such element"))
w=this.c
w.toString
return w},
gH(d){return this.b===0},
kt(d,e,f){var w=this,v=w.$ti
v.h("1?").a(d)
v.c.a(e)
if(e.a!=null)throw B.d(B.aX("LinkedListEntry is already in a LinkedList"));++w.a
e.sel(w)
if(w.b===0){e.sbH(e)
e.sbI(e)
w.c=e;++w.b
return}v=d.c
v.toString
e.sbI(v)
e.sbH(d)
v.sbH(e)
d.sbI(e);++w.b},
hG(d){var w,v,u=this
u.$ti.c.a(d);++u.a
d.b.sbI(d.c)
w=d.c
v=d.b
w.sbH(v);--u.b
d.sbI(null)
d.sbH(null)
d.sel(null)
if(u.b===0)u.c=null
else if(d===u.c)u.c=v}}
A.ep.prototype={
gq(){var w=this.c
return w==null?this.$ti.c.a(w):w},
n(){var w=this,v=w.a
if(w.b!==v.a)throw B.d(B.am(w))
if(v.b!==0)v=w.e&&w.d===v.gau(0)
else v=!0
if(v){w.c=null
return!1}w.e=!0
v=w.d
w.c=v
w.d=v.b
return!0},
$iK:1}
A.cp.prototype={
sel(d){this.a=this.$ti.h("eY<cp.E>?").a(d)},
sbH(d){this.b=this.$ti.h("cp.E?").a(d)},
sbI(d){this.c=this.$ti.h("cp.E?").a(d)}}
A.cV.prototype={
ky(d,e){var w=this,v=B.f(w).h("cV<1>?")
v.a(d)
v.a(e)
w.b=e
w.a=d
if(d!=null)d.seq(w)
e.ses(w)},
ses(d){this.a=B.f(this).h("cV<1>?").a(d)},
seq(d){this.b=B.f(this).h("cV<1>?").a(d)}}
A.eg.prototype={
hv(){var w,v=this
v.c=null
w=v.a
if(w!=null)w.seq(v.b)
w=v.b
if(w!=null)w.ses(v.a)
v.a=v.b=null
return v.d},
fK(){return this}}
A.i5.prototype={
fK(){return null},
hv(){throw B.d(B.cK())}}
A.dU.prototype={
gl(d){return this.b},
m(d,e){var w,v,u=this,t=u.a,s=t.$ti
e=s.c.a(u.$ti.c.a(e))
w=s.h("eg<1>")
s=new A.eg(s.h("dU<1>?").a(u),e,w)
w=w.h("cV<1>?")
v=w.a(t.a)
w.a(t)
s.b=t
s.a=v
if(v!=null)v.seq(s)
t.ses(s);++u.b},
gH(d){var w=this.a
return w.b===w},
gt(d){return new A.i4(this,this.a.b,this.$ti.h("i4<1>"))},
i(d){return B.k4(this,"{","}")},
$iy:1}
A.i4.prototype={
n(){var w=this,v=w.b,u=v==null?null:v.fK()
if(u==null){w.a=w.b=w.c=null
return!1}v=w.a
if(v!=u.c)throw B.d(B.am(v))
w.c=u.d
w.b=u.b
return!0},
gq(){var w=this.c
return w==null?this.$ti.c.a(w):w},
$iK:1}
A.eZ.prototype={
gt(d){var w=this
return new A.ie(w,w.c,w.d,w.b,w.$ti.h("ie<1>"))},
gH(d){return this.b===this.c},
gl(d){return(this.c-this.b&this.a.length-1)>>>0},
M(d,e){var w,v,u=this,t=u.gl(0)
if(0>e||e>=t)B.a0(B.jX(e,t,u,null,"index"))
t=u.a
w=t.length
v=(u.b+e&w-1)>>>0
if(!(v>=0&&v<w))return B.b(t,v)
v=t[v]
return v==null?u.$ti.c.a(v):v},
m(d,e){var w,v,u,t,s=this,r=s.$ti
r.c.a(e)
C.b.j(s.a,s.c,e)
w=s.c
v=s.a.length
w=(w+1&v-1)>>>0
s.c=w
if(s.b===w){u=B.ae(v*2,null,!1,r.h("1?"))
r=s.a
w=s.b
t=r.length-w
C.b.aU(u,0,t,r,w)
C.b.aU(u,t,t+s.b,s.a,0)
s.b=0
s.c=s.a.length
s.a=u}++s.d},
i(d){return B.k4(this,"{","}")}}
A.ie.prototype={
gq(){var w=this.e
return w==null?this.$ti.c.a(w):w},
n(){var w,v,u=this,t=u.a
if(u.c!==t.d)B.a0(B.am(t))
w=u.d
if(w===u.b){u.e=null
return!1}t=t.a
v=t.length
if(!(w<v))return B.b(t,w)
u.e=t[w]
u.d=(w+1&v-1)>>>0
return!0},
$iK:1}
A.mW.prototype={}
A.lv.prototype={
m(d,e){var w,v,u,t,s,r=this
x.fm.a(e)
w=r.b
v=r.c
u=J.aU(e)
if(u.gl(e)>w.length-v){w=r.b
t=u.gl(e)+w.length-1
t|=C.d.b3(t,1)
t|=t>>>2
t|=t>>>4
t|=t>>>8
s=new Uint8Array((((t|t>>>16)>>>0)+1)*2)
w=r.b
C.y.cA(s,0,w.length,w)
r.b=s}w=r.b
v=r.c
C.y.cA(w,v,v+u.gl(e),e)
r.c=r.c+u.gl(e)},
aq(){this.a.$1(C.y.bD(this.b,0,this.c))}}
A.bz.prototype={
fJ(d){var w=1000,v=C.d.bB(d,w),u=C.d.aF(d-v,w),t=this.b+v,s=C.d.bB(t,w),r=this.c
return new A.bz(A.zS(this.a+C.d.aF(t-s,w)+u,s,r),s,r)},
I(d,e){if(e==null)return!1
return e instanceof A.bz&&this.a===e.a&&this.b===e.b&&this.c===e.c},
gE(d){return B.bY(this.a,this.b,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c)},
a4(d,e){var w
x.cs.a(e)
w=C.d.a4(this.a,e.a)
if(w!==0)return w
return C.d.a4(this.b,e.b)},
iK(){var w=this
if(w.c)return w
return new A.bz(w.a,w.b,!0)},
i(d){var w=this,v=A.w1(A.ky(w)),u=A.cF(A.wB(w)),t=A.cF(A.wx(w)),s=A.cF(A.wy(w)),r=A.cF(A.wA(w)),q=A.cF(A.wC(w)),p=A.nF(A.wz(w)),o=w.b,n=o===0?"":A.nF(o)
o=v+"-"+u
if(w.c)return o+"-"+t+" "+s+":"+r+":"+q+"."+p+n+"Z"
else return o+"-"+t+" "+s+":"+r+":"+q+"."+p+n},
iH(){var w=this,v=A.ky(w)>=-9999&&A.ky(w)<=9999?A.w1(A.ky(w)):A.zR(A.ky(w)),u=A.cF(A.wB(w)),t=A.cF(A.wx(w)),s=A.cF(A.wy(w)),r=A.cF(A.wA(w)),q=A.cF(A.wC(w)),p=A.nF(A.wz(w)),o=w.b,n=o===0?"":A.nF(o)
o=v+"-"+u
if(w.c)return o+"-"+t+"T"+s+":"+r+":"+q+"."+p+n+"Z"
else return o+"-"+t+"T"+s+":"+r+":"+q+"."+p+n},
$iar:1}
A.kr.prototype={
i(d){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."},
$iaB:1}
A.rH.prototype={
jH(){var w=self.crypto
if(w!=null)if(w.getRandomValues!=null)return
throw B.d(B.a4("No source of cryptographically secure random numbers available."))},
mJ(d){var w,v,u,t,s,r,q,p
if(d<=0||d>4294967296)throw B.d(A.aQ("max must be in range 0 < max \u2264 2^32, was "+d))
if(d>255)if(d>65535)w=d>16777215?4:3
else w=2
else w=1
v=this.a
v.$flags&2&&B.at(v,11)
v.setUint32(0,0,!1)
u=4-w
t=B.ax(Math.pow(256,w))
for(s=d-1,r=(d&s)>>>0===0;;){crypto.getRandomValues(J.zv(C.be.glG(v),u,w))
q=v.getUint32(0,!1)
if(r)return(q&s)>>>0
p=q%d
if(q-p+d<t)return p}}}
A.a1.prototype={
k(d,e){var w,v=this
if(!v.ej(e))return null
w=v.c.k(0,v.a.$1(v.$ti.h("a1.K").a(e)))
return w==null?null:w.b},
j(d,e,f){var w=this,v=w.$ti
v.h("a1.K").a(e)
v.h("a1.V").a(f)
if(!w.ej(e))return
w.c.j(0,w.a.$1(e),new B.R(e,f,v.h("R<a1.K,a1.V>")))},
v(d,e){this.$ti.h("E<a1.K,a1.V>").a(e).S(0,new A.mY(this))},
P(d){var w=this
if(!w.ej(d))return!1
return w.c.P(w.a.$1(w.$ti.h("a1.K").a(d)))},
S(d,e){this.c.S(0,new A.mZ(this,this.$ti.h("~(a1.K,a1.V)").a(e)))},
gH(d){return this.c.a===0},
gaa(){var w=this.c,v=B.f(w).h("aC<2>"),u=this.$ti.h("a1.K")
return B.hm(new B.aC(w,v),v.C(u).h("1(h.E)").a(new A.n_(this)),v.h("h.E"),u)},
gl(d){return this.c.a},
i(d){return B.p7(this)},
ej(d){return this.$ti.h("a1.K").b(d)},
$iE:1}
A.cD.prototype={
aY(){return new A.ja()}}
A.ja.prototype={
aK(){this.be()
A.wm()},
A(d){var w=null
return new A.dr(A.j(B.a([A.AX(B.a([A.uO(new A.mF(),"/","Home"),A.uO(new A.mG(),"/about","About")],x.kV))],x.i),"main",w,w,w),w)}}
A.eH.prototype={
A(d){var w=null,v=B.a6(["click",new A.mV(this)],x.N,x.v),u=x.i
return A.j(B.a([A.j(B.a([new B.t(this.c,w)],u),"btn-primary-black",v,w,w)],u),"btn-container",w,w,w)}}
A.eL.prototype={
A(d){var w=null
return A.eB(B.a([A.j(this.c,"custom-grid",w,w,w)],x.i),w,"customs")}}
A.jH.prototype={
A(d){var w,v=this,u=null,t=x.N
t=B.A(t,t)
t.j(0,"src",v.c)
t.j(0,"background",v.d)
w=C.d.i(v.e)
t.j(0,"speed",w)
t.j(0,"loop","")
t.j(0,"autoplay","")
return new B.ad("dotlottie-player",u,u,A.q(u,u,u,u,u,u,u,u,u,u,u,u,u,new A.k("px",v.x),u,u,u,u,u,u,u,u,u,u,u,new A.k("px",v.w),u),t,u,u,u)}}
A.kk.prototype={
A(d){var w,v,u,t,s=null,r=x.N
r=B.a6(["aria-label","Menu Toggle"],r,r)
w=this.d
v=w!=null
u=v?"images/close-svgrepo-com.svg":"images/menu-svgrepo-com.svg"
t=x.i
r=B.a([A.j1(B.a([A.aA(s,s,s,u,A.q(s,s,s,s,s,s,s,s,s,s,s,s,s,new A.k("px",40),s,s,s,s,s,s,s,s,s,s,s,new A.k("px",40),s),s)],t),r,"menu-toggle",s,this.c,s)],t)
if(v)r.push(A.j(B.a([w],t),"menu-overlay",s,s,s))
return new A.c4(r,s)}}
A.a2.prototype={
A(d){var w,v=null,u=this.d
u=u!=null?new A.k("px",u):v
w=this.c
u=A.q(v,v,v,v,v,v,v,v,v,v,v,v,v,w!=null?new A.k("px",w):v,v,v,v,v,v,v,v,v,v,v,v,u,v)
return A.j(B.a([],x.i),v,v,v,u)}}
A.dx.prototype={
A(d){var w=null,v=x.i,u=A.yi(B.a([new B.t(this.c,w)],v),"title_section")
return A.j(B.a([A.j(B.a([u,new A.a2(w,40,w),A.j(B.a([new B.t(this.d,w)],v),"section_content",w,w,w)],v),"section_title",w,w,w)],v),"section_overall",w,w,w)}}
A.jC.prototype={
A(d){var w,v,u,t,s,r,q,p=null,o="px",n=A.bF(d,$.ul(),x.u),m=x.i,l=B.a([],m)
if(n!=null)return new A.c4(l,p)
w=x.N
v=A.q(p,p,D.j,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.a6(["position","fixed","bottom","30px","left","50%","transform","translateX(-50%)","padding","15px 15px","border-radius","16px","display","flex","align-items","center","justify-content","space-between","font-family","Arial, sans-serif","z-index","1000","max-width","800px","gap","20px"],w,w),new A.dB(new A.k(o,0),new A.k(o,4),new A.k(o,12),new B.bo("rgba(0, 0, 0, 0.3)")),p,p,p,p)
u=A.q(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.a6(["display","flex","flex-direction","column","gap","6px","max-width","500px"],w,w),p,p,p,p,p)
t=A.q(p,p,p,p,D.F,p,D.e,p,p,D.K,p,p,p,p,p,new B.bI(new A.k(o,0)),p,p,new B.bI(new A.k(o,0)),p,p,p,p,p,p,p,p)
t=A.eA(B.a([new B.t("We use cookies to improve your experience.",p)],m),p,t)
s=A.q(p,p,p,p,p,p,D.e,p,D.t,D.K,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p)
r=A.q(p,p,p,p,D.F,p,D.e,p,p,D.K,p,p,p,p,p,new B.bI(new A.k(o,0)),p,p,new B.bI(new A.k(o,0)),p,p,p,p,p,p,p,p)
r=A.eA(B.a([new B.t("Learn more in our",p)],m),p,r)
q=A.q(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.a6(["color","#f5a623","text-decoration","none"],w,w),p,p,p,p,p)
u=A.j(B.a([t,A.j(B.a([r,new A.a2(p,5,p),A.d6(B.a([new B.t("Privacy Policy",p)],m),p,p,p,"/privacy-policy",p,q,p),new B.t(".",p)],m),p,p,p,s)],m),p,p,p,u)
s=A.q(p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.a6(["display","flex","gap","12px"],w,w),p,p,p,p,p)
q=A.q(p,p,D.bG,new A.cx(D.F,new A.k(o,1)),D.F,D.A,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.a6(["padding","8px 20px","border-radius","24px","font-weight","bold"],w,w),p,p,p,p,p)
r=x.v
t=B.a6(["click",new A.ny(d)],w,r)
q=A.j1(B.a([new B.t("Decline",p)],m),p,p,t,p,q)
t=A.q(p,p,D.F,p,D.j,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,B.a6(["border","none","padding","8px 20px","border-radius","24px","cursor","pointer","font-weight","bold"],w,w),p,p,p,p,p)
r=B.a6(["click",new A.nz(d)],w,r)
C.b.m(l,A.j(B.a([u,A.j(B.a([q,A.j1(B.a([new B.t("Accept",p)],m),p,p,r,p,t)],m),p,p,p,s)],m),p,p,p,v))
return new A.c4(l,p)}}
A.e_.prototype={
aY(){return new A.jT(new A.hh(null))}}
A.jT.prototype={
aK(){this.be()
this.ne()},
aI(){var w=this.f
if(w!=null)w.al()
this.dY()},
ne(){this.f=B.rj(B.o(b.G.window),"resize",x.bl.a(new A.oo(this)),!1,x.m)},
A(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null,f=x.N,e=A.bF(a1,$.bi(),f),d=a1.r.geH(),a0=B.aH(d).gcn()
if(a0.length!==0)B.d8(new A.oi())
w=new A.og(h)
v=new A.om(w)
u=B.aH(d).gX()
t=x.i
s=B.a([],t)
r=x.g3
q=B.a([],r)
p=u==="/"
if(!p)C.b.v(q,B.a([new B.cZ(A.l("header_home",e),"/")],r))
q.push(new B.cZ(A.l("header_about",e),"/about"))
if(p)C.b.v(q,B.a([new B.cZ(A.l("header_services",e),"#services"),new B.cZ(A.l("header_contact",e),"#contact"),new B.cZ(A.l("header_careers",e),"#careers")],r))
r=q.length
p=x.v
o=0
for(;o<q.length;q.length===r||(0,B.P)(q),++o){n=q[o]
m=B.a([],t)
l=n.b
k=l==="/about"||l==="/"
j=n.a
if(k)m.push(new A.kh(l,B.a([new B.t(j,g)],t),g))
else m.push(new A.d7(g,g,A.q(g,g,g,g,g,D.A,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,D.X,g,g),B.a6(["click",new A.oj(v,n,w)],f,p),B.a([new B.t(j,g)],t),g))
s.push(new A.d7(g,"nav-item",g,g,m,g))}s.push(new A.eG(new A.ok(),g))
s.push(A.j(B.a([new A.fe(g)],t),"theme_toggle",g,g,g))
i=new A.c4(B.a([new A.mr("nav-menu",s,g)],t),h.d)
f=B.a([A.d6(B.a([A.aA(g,g,g,"images/x_cross.png",A.q(g,g,g,g,D.j,g,g,g,g,g,g,g,g,new A.k("px",120),g,new A.er(new A.ag("%",5),g,g,g),g,g,new B.bI(new B.iw("rem",0.7)),g,new A.aR(new A.k("px",8)),g,g,g,g,new A.k("px",120),g),g)],t),g,g,g,"/",g,g,g)],t)
if(!h.e)f.push(i)
t=h.e?i:g
f.push(new A.kk(new A.ol(h),t,g))
return new A.mp(f,g)}}
A.by.prototype={
aY(){return new A.jr()}}
A.jr.prototype={
A(d){var w,v,u,t,s=this,r=null,q="px",p=s.d?D.l:D.h
p=A.q(r,r,p,new A.cx(D.f,new A.k(q,1)),r,r,D.e,r,D.q,r,r,r,r,r,r,new A.aI(r,new A.ag("%",5)),r,r,new A.aI(new A.k(q,40),new A.ag("%",5)),r,new A.aR(new A.k(q,45)),r,new A.dB(new A.k(q,0),new A.k(q,5),r,D.f),r,r,r,r)
w=A.q(D.r,r,r,r,r,r,D.e,r,r,r,r,r,r,r,D.x,r,r,r,r,r,r,r,r,r,r,new A.ag("%",100),r)
v=x.i
u=A.j(B.a([new B.t(s.a.c,r)],v),"card_process_index",r,r,r)
t=A.j(B.a([new B.t(s.a.d,r)],v),"card_process_title",r,r,r)
w=B.a([A.j(B.a([u,t,A.j(B.a([new B.t(s.d?"-":"+",r)],v),"icon-show-more",r,r,r)],v),r,r,r,w)],v)
if(s.d){u=A.q(r,r,D.f,r,r,r,r,r,r,r,r,r,r,new A.k(q,1),r,new A.aI(new A.k(q,30),r),r,r,r,r,r,r,r,r,r,r,r)
u=A.j(B.a([],v),r,r,r,u)
t=A.q(r,r,r,r,D.f,r,r,r,r,r,new A.k(q,18),D.o,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)
w.push(A.j(B.a([u,A.j(B.a([new B.t(s.a.e,r)],v),r,r,r,t)],v),"process_content",r,r,r))}return A.j1(w,r,r,r,new A.n1(s),p)}}
A.js.prototype={
A(d){var w=null,v=A.bF(d,$.bi(),x.N),u=x.i
return A.j(B.a([A.j(B.a([this.ek(A.l("case_studies_case1_content",v)),A.j(B.a([],u),"line",w,w,w),this.ek(A.l("case_studies_case2_content",v)),A.j(B.a([],u),"line",w,w,w),this.ek(A.l("case_studies_case3_content",v))],u),"inner_block",w,w,w)],u),"case_studies_block",w,w,w)},
ek(d){return new A.eG(new A.n2(d),null)}}
A.eK.prototype={
aY(){return new A.jA()}}
A.jA.prototype={
aK(){var w=this
w.be()
w.r=w.f=w.e=w.d=""},
cT(d,e,f,g){return this.l7(d,e,f,g)},
l7(d,e,f,g){var w=0,v=B.d5(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$cT=B.cz(function(h,a0){if(h===1){t.push(a0)
w=u}for(;;)switch(w){case 0:s.a0(new A.np(s))
r="service_mne3r5y"
q="template_pit433e"
p="62KVCj5RnTx0gL3xO"
o=B.aH("https://api.emailjs.com/api/v1.0/email/send")
u=3
l=x.N
k=B.a6(["Content-Type","application/json"],l,l)
w=6
return B.dL(A.E6(o,C.H.bm(B.a6(["service_id",r,"template_id",q,"user_id",p,"template_params",B.a6(["from_name",d,"from_email",e,"title",f,"message",g],l,l)],l,x.K)),k),$async$cT)
case 6:n=a0
if(n.b===200){A.aK("Email sent successfully")
s.a0(new A.nq(s))
A.w7(A.nN(0,5),new A.nr(s),x.P)}else{l=n
A.aK("Failed to send email: "+A.Dz(A.Cr(l.e).c.a.k(0,"charset")).cg(l.w))
s.a0(new A.ns(s))}u=1
w=5
break
case 3:u=2
i=t.pop()
m=B.G(i)
A.aK("Error sending email: "+B.m(m))
s.a0(new A.nt(s))
w=5
break
case 2:w=1
break
case 5:return B.d2(null,v)
case 1:return B.d1(t.at(-1),v)}})
return B.d3($async$cT,v)},
A(d){var w=null,v=A.bF(d,$.bi(),x.N),u=A.q(w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new A.ag("%",100),w,w,w,w,w,w,w,w,w,w),t=A.q(D.r,w,new B.bo("#F3F3F3"),w,w,w,D.e,w,D.t,w,w,w,w,w,D.b2,new A.aI(w,new A.ag("%",5)),w,w,new A.aI(w,new A.ag("%",5)),w,new A.aR(new A.k("px",45)),w,w,w,w,w,w),s=this.kd(v),r=A.q(w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w),q=x.i
return A.j(B.a([A.j(B.a([s,A.j(B.a([A.aA(w,"contact_image",300,"images/undraw_business-deal_nx2n.svg",w,w)],q),w,w,w,r)],q),w,w,w,t)],q),w,w,"contact",u)},
kC(d){var w=null,v="px",u=A.q(w,w,w,w,w,w,D.e,w,D.q,w,w,w,w,new A.k(v,92),D.x,w,w,w,w,w,w,w,w,w,w,w,w),t=A.l("contact_us_name_label",d),s=this.d
s===$&&B.B()
return A.j(B.a([new B.t(t,w),A.u1(new A.nn(this),A.q(w,w,D.h,w,D.f,w,w,w,w,w,new A.k(v,18),D.o,w,new A.k(v,58),w,w,w,w,new A.aI(w,new A.k(v,30)),w,new A.aR(new A.k(v,14)),w,w,w,w,w,w),D.B,s,x.N)],x.i),w,w,w,u)},
kh(d){var w=null,v="px",u=A.q(w,w,w,w,w,w,D.e,w,D.q,w,w,w,w,new A.k(v,92),D.x,w,w,w,w,w,w,w,w,w,w,w,w),t=A.l("contact_us_email_label",d),s=this.e
s===$&&B.B()
return A.j(B.a([new B.t(t,w),A.u1(new A.nj(this),A.q(w,w,D.h,w,D.f,w,w,w,w,w,new A.k(v,18),D.o,w,new A.k(v,58),w,w,w,w,new A.aI(w,new A.k(v,30)),w,new A.aR(new A.k(v,14)),w,w,w,w,w,w),D.B,s,x.N)],x.i),w,w,w,u)},
lk(d){var w=null,v="px",u=A.q(w,w,w,w,w,w,D.e,w,D.q,w,w,w,w,new A.k(v,92),D.x,w,w,w,w,w,w,w,w,w,w,w,w),t=A.l("contact_us_title_label",d),s=this.f
s===$&&B.B()
return A.j(B.a([new B.t(t,w),A.u1(new A.nv(this),A.q(w,w,D.h,w,D.f,w,w,w,w,w,new A.k(v,18),D.o,w,new A.k(v,58),w,w,w,w,new A.aI(w,new A.k(v,30)),w,new A.aR(new A.k(v,14)),w,w,w,w,w,w),D.B,s,x.N)],x.i),w,w,w,u)},
kB(d){var w,v=null,u="px",t=A.q(v,v,v,v,v,v,D.e,v,D.q,v,v,v,v,new A.k(u,223),D.x,v,v,v,v,v,v,v,v,v,v,v,v),s=A.l("contact_us_message_label",d),r=this.r
r===$&&B.B()
w=x.N
return A.j(B.a([new B.t(s,v),new A.a2(6,v,v),A.u1(new A.nl(this),A.q(v,v,D.h,new A.cx(D.f,new A.k(u,2)),D.f,v,v,v,v,v,new A.k(u,18),D.o,v,new A.k(u,170),v,v,v,v,new A.aI(new A.k(u,18),new A.k(u,30)),v,new A.aR(new A.k(u,14)),B.a6(["resize","none","white-space","pre-wrap","word-wrap","break-word","overflow-y","auto","vertical-align","top"],w,w),v,v,v,v,v),D.B,r,w)],x.i),v,v,v,t)},
kd(d){var w,v,u=this,t=null,s="px",r=x.i,q=B.a([u.kC(d),new A.a2(25,t,t),u.kh(d),new A.a2(25,t,t),u.lk(d),new A.a2(25,t,t),u.kB(d),new A.a2(20,t,t)],r),p=u.x
if(p!=null){w=C.a.B(p,"th\xe0nh c\xf4ng")
v=w?D.l:new B.bo("#ff6b6b")
v=A.q(t,t,v,t,t,t,t,t,t,t,t,t,t,t,t,new A.er(t,t,t,new A.k(s,20)),t,t,new B.bI(new A.k(s,15)),t,new A.aR(new A.k(s,8)),t,t,t,t,t,t)
w=w?D.f:D.h
w=A.q(t,t,t,t,w,t,t,t,t,t,new A.k(s,16),D.v,t,t,t,t,t,t,t,t,t,t,t,D.af,t,t,t)
q.push(A.j(B.a([A.j(B.a([new B.t(p,t)],r),t,t,t,w)],r),t,t,t,v))}q.push(new A.a2(20,t,t))
p=u.w
w=p?D.aF:D.A
v=p?new B.bo("#cccccc"):D.l
w=A.q(t,t,v,t,D.h,w,t,t,t,t,new A.k(s,18),D.v,t,new A.k(s,58),t,t,t,t,t,t,new A.aR(new A.k(s,14)),t,t,t,t,new A.ag("%",100),t)
p=p?t:new A.nh(u)
q.push(A.j1(B.a([new B.t(A.l("contact_us_issubmit",d),t)],r),t,t,t,p,w))
return A.j(q,"detail_text_field",t,t,t)}}
A.jD.prototype={
A(d){var w,v=null,u=A.bF(d,$.bi(),x.N),t=A.q(v,v,v,v,D.j,v,v,v,v,v,new A.k("px",30),D.v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v),s=x.i
t=A.j(B.a([new B.t(A.l("cta_title",u),v)],s),v,v,v,t)
w=A.q(v,v,v,v,D.j,v,v,v,v,v,new A.k("px",18),D.o,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v)
return A.j(B.a([A.j(B.a([A.j(B.a([t,new A.a2(20,v,v),A.j(B.a([new B.t(A.l("cta_description",u),v)],s),v,v,v,w),new A.a2(20,v,v),new A.eH(A.l("cta_button_text",u),new A.nD(),v)],s),"cta_text",v,v,v),A.j(B.a([A.aA(v,v,v,"images/intheoffice_image.svg",A.q(v,v,v,v,v,v,v,v,v,v,v,v,v,new A.ag("%",100),v,v,v,v,v,v,v,v,v,v,v,new A.ag("%",50),v),v)],s),"cta_image",v,v,v)],s),"cta_block",v,v,v)],s),"cta_overall",v,v,v)}}
A.h8.prototype={
A(d){var w,v,u=null,t="px",s=x.N,r=A.bF(d,$.bi(),s),q=A.q(u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.ag("%",100),u,u,u,u,u,u,u,u,u,u),p=A.q(D.r,u,u,u,u,u,D.e,u,D.t,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u),o=A.aA(u,u,40,"images/x_cross.png",u,40),n=A.q(u,u,u,u,D.h,u,u,u,u,u,new A.k(t,30),D.v,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u),m=x.i
p=A.j(B.a([o,new A.a2(u,6,u),A.j(B.a([new B.t(A.l("footer_company_name",r),u)],m),u,u,u,n)],m),u,u,u,p)
n=A.q(u,u,u,u,D.h,u,D.e,u,D.t,u,new A.k(t,18),D.o,u,u,u,u,u,u,u,u,u,u,u,u,new A.dH(D.ag),u,u)
n=A.j(B.a([new B.t(A.l("footer_about_us",r),u),new A.a2(u,20,u),new B.t(A.l("footer_services",r),u),new A.a2(u,20,u),new B.t(A.l("footer_user_case",r),u),new A.a2(u,20,u),new B.t(A.l("footer_pricing",r),u)],m),u,u,u,n)
o=A.q(u,u,u,u,u,u,D.e,u,D.t,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u)
o=A.j(B.a([p,n,A.j(B.a([A.aA(u,u,30,"images/instagram_icon.png",u,30),new A.a2(u,20,u),A.aA(u,u,30,"images/facebook_icon.png",u,30),new A.a2(u,20,u),A.aA(u,u,30,"images/twitter_icon.png",u,30)],m),u,u,u,o)],m),"footer_header",u,u,u)
n=A.q(u,u,D.l,u,D.bE,u,D.e,u,u,D.K,u,u,u,u,D.C,u,u,u,new B.bI(new A.k(t,5)),u,new A.aR(new A.k(t,14)),u,u,D.af,u,new A.k(t,120),u)
n=A.j(B.a([new B.t(A.l("footer_contact_us",r),u)],m),u,u,u,n)
p=A.q(u,u,u,u,D.h,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.dH(D.P),u,u)
p=A.j(B.a([A.d6(B.a([new B.t(A.l("footer_email_label",r),u)],m),u,u,u,"mailto:crosstechedu@gmail.com",u,p,u)],m),u,u,u,u)
w=A.q(u,u,u,u,D.h,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.dH(D.P),u,u)
w=A.j(B.a([A.d6(B.a([new B.t(A.l("footer_phone_label",r),u)],m),u,u,u,"tel:0338305895",u,w,u)],m),u,u,u,u)
v=A.q(u,u,u,u,D.h,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.dH(D.P),u,u)
v=A.j(B.a([n,new A.a2(20,u,u),p,new A.a2(20,u,u),w,new A.a2(20,u,u),A.j(B.a([A.d6(B.a([new B.t(A.l("footer_address_label",r),u)],m),u,u,u,"https://maps.app.goo.gl/8RR39Ge1WESWiPcj6",u,v,D.E)],m),u,u,u,u)],m),"footer_content_us",u,u,u)
w=A.q(u,u,u,D.aA,u,u,u,u,u,u,u,u,u,new A.ag("%",100),u,u,u,u,u,u,u,u,u,u,u,new A.ag("%",100),u)
s=B.a6(["frameborder","0","style","border:0;","allowfullscreen","","aria-hidden","false","tabindex","0"],s,s)
w=A.j(B.a([v,A.j(B.a([A.yl(B.a([],m),s,"map","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.8291308260964!2d105.80479707504539!3d21.079485680582636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abe65144a209%3A0xaf7eeca92c256d9e!2sCross%20Technology%20%26%20Education!5e0!3m2!1sen!2sus!4v1747126150721!5m2!1sen!2sus",w)],m),"footer_map",u,u,u)],m),"footer_body",u,u,u)
s=A.q(u,u,u,new A.lS(new A.mR(D.h,new A.k(t,1))),D.h,u,D.e,u,u,u,u,u,u,u,u,u,u,u,new A.er(u,new A.k(t,50),u,u),u,u,u,u,u,u,u,u)
v=A.l("footer_copyright",r)
p=A.q(u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.dH(D.ag),u,u)
return A.j(B.a([A.j(B.a([o,new A.a2(20,u,u),w,new A.a2(20,u,u),A.j(B.a([new B.t(v,u),new A.a2(u,40,u),A.j(B.a([new B.t(A.l("footer_privacy_policy",r),u)],m),u,u,u,p)],m),u,u,u,s)],m),"footer_block",u,u,u)],m),u,u,u,q)}}
A.jQ.prototype={
A(d){var w,v,u,t,s=null,r=A.bF(d,$.bi(),x.N),q=[new A.cO(A.l("team_member1_name",r),A.l("team_member1_position",r),A.l("team_member1_content",r),"images/NguyenQuyenAnh.png","Nguy\u1ec5n Quy\u1ec1n Anh","https://boxingnguyen.github.io/",s),new A.cO(A.l("team_member2_name",r),A.l("team_member2_position",r),A.l("team_member2_content",r),"images/viettran.png","Tr\u1ea7n Vi\u1ec7t",s,s),new A.cO(A.l("team_member3_name",r),A.l("team_member3_position",r),A.l("team_member3_content",r),"images/Ph\xf9ng Quang Huy.JPG","Ph\xf9ng Quang Huy",s,s),new A.cO(A.l("team_member4_name",r),A.l("team_member4_position",r),A.l("team_member4_content",r),"images/B\xf9i B\u1ea3o Phong.JPG","B\xf9i B\u1ea3o Phong",s,s),new A.cO(A.l("team_member5_name",r),A.l("team_member5_position",r),A.l("team_member5_content",r),"images/dangtung.png","Nguy\u1ec5n \u0110\u0103ng T\xf9ng",s,s),new A.cO(A.l("team_member6_name",r),A.l("team_member6_position",r),A.l("team_member6_content",r),"images/Le\u0302 Vie\u0323\u0302t Hu\u0300ng.jpeg","L\xea Vi\u1ec7t H\xf9ng",s,s)],p=A.q(s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.ag("%",100),s,s,s,s,s,s,s,s,s,s),o=A.q(s,s,s,s,s,s,D.e,s,D.q,s,s,s,s,s,s,new A.aI(s,new A.ag("%",5)),s,s,s,s,s,s,s,s,s,s,s),n=x.i,m=B.a([],n)
for(w=0;w<2;++w){v=w*3
if(!(v<6))return B.b(q,v)
u=q[v]
t=v+1
if(!(t<6))return B.b(q,t)
t=q[t]
v+=2
if(!(v<6))return B.b(q,v)
m.push(new A.eL(B.a([u,t,q[v]],n),s))}v=A.q(D.aj,s,s,s,s,s,D.e,s,D.q,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new A.ag("%",100),s)
m.push(A.j(B.a([new A.eH(A.l("team_see_all_team",r),s,s)],n),s,s,s,v))
return A.j(B.a([A.j(m,s,s,s,o)],n),s,s,s,p)}}
A.jS.prototype={
A(d){var w=null,v=A.bF(d,$.bi(),x.N),u=x.i
return A.j(B.a([A.j(B.a([A.j(B.a([A.j(B.a([new B.t(A.l("header_home_page_title",v),w)],u),"w500-60-custom",w,w,w),new A.a2(35,w,w),A.j(B.a([new B.t(A.l("header_home_page_subtitle",v),w)],u),"w400-20-custom",w,w,w),new A.a2(35,w,w),new A.eH(A.l("header_home_page_button",v),new A.od(),w)],u),"text-header-web",w,w,w),A.yl(B.a([],u),w,"primary_image","https://lottie.host/embed/3a7f8b85-040f-422b-a652-b0cb1561e655/AnFjBAGkJL.lottie",w)],u),"header-web-padding",w,w,w)],u),"header-web",w,w,w)}}
A.k2.prototype={
A(d){var w,v=this,u=null,t="px",s=A.q(u,u,v.c,new A.cx(D.f,new A.k(t,1)),u,u,D.e,u,D.t,u,u,u,u,u,D.x,u,u,u,new B.bI(new A.k(t,50)),u,new A.aR(new A.k(t,45)),u,new A.dB(new A.k(t,0),new A.k(t,5),u,D.f),u,u,new A.ag("%",100),u),r=x.i,q=B.a([],r),p=v.x.split(" "),o=p.length,n=v.d,m=v.e,l=0
for(;l<o;++l){w=p[l]
q.push(new A.j5(A.q(u,u,n,u,m,u,u,u,u,u,new A.k(t,30),D.v,u,u,u,u,u,u,new A.aI(new A.k(t,4),new A.k(t,6)),u,new A.aR(new A.k(t,4)),u,u,u,u,u,u),B.a([new B.t(w,u)],r),u))}q=A.j(q,"service_word",u,u,u)
p=A.q(D.r,u,u,u,u,u,D.e,u,D.t,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.k(t,230),u)
o=A.aA(u,u,20,"images/arrow_up_right.svg",A.q(u,u,D.h,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new B.bI(new A.k(t,10)),u,new A.aR(new A.k(t,20)),u,u,u,u,u,u),20)
n=A.q(u,u,u,u,v.f,u,u,u,u,u,new A.k(t,20),D.o,u,u,u,u,u,u,u,u,u,u,u,D.L,u,u,u)
q=A.j(B.a([q,new A.a2(20,u,u),A.j(B.a([o,new A.a2(u,15,u),A.j(B.a([new B.t(v.y,u)],r),u,u,u,n)],r),u,u,u,p)],r),"service_content",u,u,u)
p=A.aA(u,"service_image",200,v.Q,u,200)
return A.j(B.a([q,p],r),u,u,u,s)}}
A.ki.prototype={
A(d){var w=null,v=x.i
return A.j(B.a([A.j(B.a([A.d6(B.a([A.aA(w,w,w,"images/jvb_logo.svg",w,w)],v),w,w,w,"https://jvb-corp.com/vi/",w,w,D.E),A.d6(B.a([A.aA(w,w,w,"images/ited.jpg",w,w)],v),w,w,w,"https://ited.edu.vn/",w,w,D.E),A.d6(B.a([A.aA(w,w,w,"images/vfast.png",w,w)],v),w,w,w,"https://vfastsoft.com/",w,w,D.E),A.aA(w,w,w,"images/LaiXeVanXuan.jpg",w,w)],v),"list-logo-content",w,w,w)],v),"list-logo-container",w,w,w)}}
A.cO.prototype={
A(d){var w,v,u=this,t=null,s="px",r=u.w,q=x.i
if(r!=null){w=A.q(t,t,t,t,D.j,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,D.X,t,t)
v=A.q(t,t,D.T,new A.cx(D.j,new A.k(s,1)),t,t,t,t,t,t,t,t,t,t,t,t,t,t,new A.aI(new A.k(s,40),new A.k(s,35)),t,new A.aR(new A.k(s,45)),t,new A.dB(new A.k(s,0),new A.k(s,5),t,D.j),t,t,t,t)
w=A.d6(B.a([A.j(B.a([u.hf(),u.h9(),u.fY()],q),t,t,t,v)],q),t,t,t,r,t,w,D.E)
r=w}else{r=A.q(t,t,D.T,new A.cx(D.j,new A.k(s,1)),t,t,t,t,t,t,t,t,t,t,t,t,t,t,new A.aI(new A.k(s,40),new A.k(s,35)),t,new A.aR(new A.k(s,45)),t,new A.dB(new A.k(s,0),new A.k(s,5),t,D.j),t,t,t,t)
r=A.j(B.a([u.hf(),u.h9(),u.fY()],q),t,t,t,r)}return r},
hf(){var w,v=this,u=null,t="px",s=A.q(u,u,u,u,u,u,D.e,u,D.t,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u),r=x.i,q=A.j(B.a([A.aA(v.r,u,130,v.f,A.q(u,u,u,new A.cx(D.l,new A.k(t,2)),u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.aR(new A.k(t,20)),u,u,u,u,u,u),130)],r),u,u,u,u),p=A.q(D.ak,u,u,u,u,u,D.e,u,D.q,u,u,u,u,u,D.C,u,u,u,u,u,u,u,u,u,u,new A.ag("%",100),u),o=A.q(u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new A.ag("%",100),u),n=A.q(u,u,u,u,D.j,u,u,u,u,u,new A.k(t,20),D.v,u,u,u,u,u,u,u,u,u,u,u,D.L,u,new A.ag("%",100),u)
n=A.j(B.a([new B.t(v.c,u)],r),u,u,u,n)
w=A.q(u,u,u,u,D.j,u,u,u,u,u,new A.k(t,18),D.o,u,u,u,u,u,u,u,u,u,u,u,D.L,u,u,u)
return A.j(B.a([q,new A.a2(u,20,u),A.j(B.a([A.j(B.a([n,A.j(B.a([new B.t(v.d,u)],r),u,u,u,w)],r),u,u,u,o)],r),u,u,u,p)],r),u,u,u,s)},
h9(){var w=null,v=A.q(w,w,D.j,w,w,w,w,w,w,w,w,w,w,new A.k("px",1),w,new A.aI(new A.k("px",28),w),w,w,w,w,w,w,w,w,w,w,w)
return A.j(B.a([],x.i),w,w,w,v)},
fY(){var w=null,v=A.q(w,w,w,w,D.j,w,w,w,w,w,new A.k("px",18),D.o,w,w,w,w,w,w,w,w,w,w,w,D.L,w,w,w)
return A.j(B.a([new B.t(this.e,w)],x.i),w,w,w,v)}}
A.kt.prototype={
A(d){var w,v,u,t,s,r,q,p=null,o=A.bF(d,$.bi(),x.N),n=A.l("our_service_seo_title",o)
n=A.oT(new B.bo("#F3F3F3"),D.f,D.l,A.l("our_service_seo_content",o),D.f,"images/mobile_image.svg",D.l,n,D.f)
w=A.l("our_service_ppc_title",o)
w=A.oT(D.l,D.f,D.h,A.l("our_service_ppc_content",o),D.f,"images/web_image.svg",D.l,w,D.f)
v=A.l("our_service_smm_title",o)
v=A.oT(D.f,D.h,D.h,A.l("our_service_smm_content",o),D.h,"images/employee_supply_image.svg",D.l,v,D.f)
u=A.l("our_service_email_title",o)
t=[n,w,v,A.oT(new B.bo("#F3F3F3"),D.f,D.l,A.l("our_service_email_content",o),D.f,"images/programing_image.svg",D.l,u,D.f)]
u=A.q(D.r,D.N,p,p,p,p,D.e,p,D.q,p,p,p,p,p,D.C,p,new A.ag("%",100),p,p,p,p,p,p,p,p,p,p)
v=x.i
w=B.a([],v)
for(s=0;s<2;++s){n=A.q(D.r,D.N,p,p,p,p,D.e,p,p,p,p,p,p,p,D.C,p,new A.ag("%",100),p,new A.aI(p,new A.ag("%",10)),p,p,p,p,p,p,p,p)
r=s*2
if(!(r<4))return B.b(t,r)
q=t[r];++r
if(!(r<4))return B.b(t,r)
w.push(new A.d7(p,p,n,p,B.a([new A.eL(B.a([q,t[r]],v),p)],v),p))}return A.j(w,p,p,p,u)}}
A.kA.prototype={
A(d){var w,v,u,t,s=null
A.aK("the deo nao")
w=A.bF(d,$.bi(),x.N)
v=A.q(D.r,D.N,s,s,s,s,s,s,s,s,s,s,s,s,D.C,s,new A.ag("%",100),s,s,s,s,s,s,s,s,s,s)
u=A.q(s,s,s,s,s,s,D.e,s,D.q,s,s,s,new A.oc(new A.k("px",30)),s,s,s,s,s,s,s,s,s,s,s,s,new A.ag("%",100),s)
t=x.i
return A.j(B.a([A.j(B.a([new A.by("01",A.l("process_consultation_title",w),A.l("process_consultation_content",w),s),new A.by("02",A.l("process_research_title",w),A.l("process_research_content",w),s),new A.by("03",A.l("process_implementation_title",w),A.l("process_implementation_content",w),s),new A.by("04",A.l("process_monitoring_title",w),A.l("process_monitoring_content",w),s),new A.by("05",A.l("process_reporting_title",w),A.l("process_reporting_content",w),s),new A.by("06",A.l("process_improvement_title",w),A.l("process_improvement_content",w),s),new A.by("07",A.l("step7_label",w),A.l("step7_content",w),s),new A.by("08",A.l("step8_label",w),A.l("step8_content",w),s)],t),s,s,s,u)],t),s,s,s,v)}}
A.fe.prototype={
aY(){return new A.l7()}}
A.l7.prototype={
aK(){this.be()
this.d=B.r(B.J(B.o(b.G.document).documentElement).className)==="dark"},
A(d){var w=null,v=x.i,u=B.a([],v),t=this.d?"dark":"light",s=x.N
u.push(new A.eD(D.ao,B.a6(["class",t],s,s),D.b8,w))
s=B.a6(["aria-label","Theme Toggle"],s,s)
t=A.q(w,w,w,w,w,w,w,w,w,w,new A.k("px",30),w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w)
u.push(A.j1(B.a([A.aA(w,w,w,this.d?"images/moon.svg":"images/sun.svg",w,w)],v),s,"theme-toggle",w,new A.qG(this),t))
return new A.c4(u,w)}}
A.de.prototype={
aY(){return new A.lm()}}
A.lm.prototype={
A(a2){var w=this,v=null,u="container",t="section",s="grid grid-2",r="section-title",q="image-container",p="section section-alt",o="vision-card",n="vision-title",m="vision-text",l="section-header",k=x.N,j=A.bF(a2,$.bi(),k),i=x.i,h=A.eB(B.a([A.j(B.a([A.yi(B.a([new B.t("Cross Technology and Education",v)],i),"hero-title")],i),u,v,v,v)],i),"hero",v),g=A.eB(B.a([A.j(B.a([A.j(B.a([A.j(B.a([A.j2(B.a([new B.t(A.l("about_title",j),v)],i),r),A.j(B.a([A.eA(B.a([new B.t(A.l("about_description",j),v)],i),"description-text",v)],i),"space-y",v,v,v)],i),v,v,v,v),A.j(B.a([A.aA("\u0110\u1ed9i ng\u0169 Cross Tech","team-image",v,"images/office1.jpg",v,v),A.j(B.a([],i),"image-overlay",v,v,v)],i),q,v,v,v)],i),s,v,v,v)],i),u,v,v,v)],i),t,v),f=A.eB(B.a([A.j(B.a([A.j(B.a([A.j(B.a([A.aA(v,v,80,"images/vision.png",v,80)],i),"vision-icon",v,v,v),A.j2(B.a([new B.t(A.l("about_goal_vision_title",j),v)],i),n),A.vf(B.a([new B.t(A.l("about_goal_vision_description",j),v)],i),m)],i),o,v,v,v)],i),u,v,v,v)],i),p,v),e=A.eB(B.a([A.j(B.a([A.j(B.a([A.j(B.a([A.aA(v,v,80,"images/mission.png",v,80)],i),"vision-icon purple-icon",v,v,v),A.j2(B.a([new B.t(A.l("about_goal_mission_title",j),v)],i),n),A.vf(B.a([new B.t(A.l("about_goal_mission_description",j),v)],i),m)],i),o,v,v,v)],i),u,v,v,v)],i),t,v),d=A.j(B.a([A.j2(B.a([new B.t(A.l("about_goal_philosophy_title",j),v)],i),r)],i),l,v,v,v),a0=A.l("about_goal_philosophy_description",j),a1=A.l("about_goal_philosophy_description_part2",j)
a1=A.eB(B.a([A.j(B.a([d,A.j(B.a([A.j(B.a([A.j(B.a([A.aA("Philosophy Icon",v,70,"images/philosophy.png",v,90)],i),"quote-icon",v,v,v),A.vf(B.a([new B.t(a0,v)],i),"quote-text"),A.eA(B.a([new B.t(a1,v)],i),"quote-author",v)],i),"quote-card",v,v,v)],i),s,v,v,v)],i),u,v,v,v)],i),p,v)
a0=A.eB(B.a([A.j(B.a([A.j(B.a([A.j2(B.a([new B.t(A.l("about_key_value_title",j),v)],i),r)],i),l,v,v,v),new A.eL(B.a([w.c6("\ud83c\udfaf",A.l("about_key_value_honesty_title",j),A.l("about_key_value_honesty_description",j),"cyan"),w.c6("\u2b50",A.l("about_key_value_responsibility_title",j),A.l("about_key_value_responsibility_description",j),"purple"),w.c6("\ud83e\udd1d",A.l("about_key_value_passion_title",j),A.l("about_key_value_passion_description",j),"blue"),w.c6("\ud83c\udf31",A.l("about_key_value_professionalism_title",j),A.l("about_key_value_professionalism_description",j),"green"),w.c6("\ud83d\ude0a",A.l("about_key_value_smile_title",j),A.l("about_key_value_smile_description",j),"pink")],i),v)],i),u,v,v,v)],i),t,v)
d=A.eB(B.a([A.j(B.a([A.j(B.a([A.j2(B.a([new B.t(A.l("about_culture_title",j),v)],i),r),A.eA(B.a([new B.t(A.l("about_culture_sub_title",j),v)],i),"section-subtitle",v)],i),l,v,v,v),A.j(B.a([A.j(B.a([A.j(B.a([A.j(B.a([A.j(B.a([new A.mo("feature-title",B.a([new B.t(A.l("about_culture_description",j),v)],i),v)],i),v,v,v,v)],i),"culture-feature",v,v,v)],i),"culture-features",v,v,v)],i),v,v,v,v),A.j(B.a([A.aA("V\u0103n h\xf3a c\xf4ng ty","culture-image",v,"images/office.jpg",v,v),A.j(B.a([],i),"image-overlay purple-overlay",v,v,v)],i),q,v,v,v)],i),"grid grid-2 culture-main",v,v,v),A.j(B.a([w.e3("\ud83c\udf89",A.l("about_culture_card_fun_title",j),A.l("about_culture_card_fun_content",j)),w.e3("\ud83c\udfc6",A.l("about_culture_card_award_title",j),A.l("about_culture_card_award_content",j)),w.e3("\ud83d\udcaa",A.l("about_culture_card_welfare_title",j),A.l("about_culture_card_welfare_content",j))],i),"grid grid-3",v,v,v)],i),u,v,v,v)],i),p,v)
k=A.q(v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,B.a6(["background","var(--footerAltBackground)"],k,k),v,v,v,v,v)
return A.j(B.a([D.aL,h,g,f,e,a1,a0,d,A.j(B.a([new A.h8(v)],i),v,v,v,k)],i),"about-new-page",v,v,v)},
c6(d,e,f,g){var w=null,v=x.i
return A.j(B.a([A.j(B.a([new B.t(d,w)],v),"card-icon card-icon-"+g,w,w,w),A.yj(B.a([new B.t(e,w)],v),"card-title "+g+"-text"),A.eA(B.a([new B.t(f,w)],v),"card-description",w)],v),"card card-center",w,w,w)},
e3(d,e,f){var w=null,v=x.i
return A.j(B.a([A.j(B.a([new B.t(d,w)],v),"quote-icon",w,w,w),A.yj(B.a([new B.t(e,w)],v),"card-title"),A.eA(B.a([new B.t(f,w)],v),"card-description",w)],v),"quote-card",w,w,w)}}
A.dl.prototype={
aY(){return new A.jV()}}
A.jV.prototype={
aK(){this.be()
this.d=!1
this.e=!A.wm()},
A(d){var w=null,v=x.N,u=A.bF(d,$.bi(),v),t=x.i,s=B.a([],t)
if(this.d)C.b.m(s,new A.kj(w))
else if(!this.e){v=A.q(w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,B.a6(["background","var(--gradientBackground)"],v,v),w,w,w,w,w)
C.b.m(s,A.j(B.a([new A.jC(w),new A.e_(w),new A.jS(w),new A.ki(w),A.j(B.a([new A.dx(A.l("home_service_title",u),A.l("home_service_content",u),w),new A.kt(w)],t),w,w,"services",w),new A.jD(w),A.j(B.a([new A.dx(A.l("home_case_studies_title",u),A.l("home_case_studies_content",u),w),new A.js(w)],t),w,w,"case-studies",w),A.j(B.a([new A.dx(A.l("home_process_title",u),A.l("home_process_content",u),w),new A.kA(w)],t),w,w,"process",w),A.j(B.a([new A.dx(A.l("home_team_title",u),A.l("home_team_content",u),w),new A.jQ(w)],t),w,w,"careers",w),A.j(B.a([new A.dx(A.l("home_contact_us_title",u),A.l("home_contact_us_content",u),w),new A.eK(w)],t),w,w,"contact",w),new A.a2(140,w,w),new A.h8(w)],t),w,w,w,v))}return new A.c4(s,w)}}
A.kj.prototype={
A(d){var w=null,v=A.q(w,w,w,w,D.j,w,w,w,w,w,new A.k("px",16),D.v,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w),u=x.i
return A.j(B.a([A.j(B.a([new A.jH("https://lottie.host/5ab9acca-7662-4dcf-8ac8-dc4670cb16dd/aE8Z02PyVA.lottie","transparent",1,!0,!0,100,100,w),new A.a2(30,w,w),A.eA(B.a([new B.t("Loading...",w)],u),w,v)],u),"loading-spinner",w,w,w)],u),"loading-container",w,w,w)}}
A.nB.prototype={
jL(d){var w=this,v=w.w
v===$&&B.B()
v.a+=B.m(d)
w.at=!1
w.Q=!0
w.l3()},
l3(){var w,v=this
v.CW=v.ax=v.ch=v.ay=0
w=v.cx
w===$&&B.B()
w.a=""},
hx(){var w,v=this,u=v.cx
u===$&&B.B()
u=u.a
w=u.charCodeAt(0)==0?u:u
if(0>=w.length)return B.b(w,0)
v.jL(w[0])
v.z=C.a.K(w,1)
return v.er()},
er(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=this,a4=a3.z
if(a4!=null){w=a3.y
v=a3.x
a3.x=a4
a3.y=0
a3.z=null
u=a3.er()
t=a3.y
if(t<a4.length)a3.z=C.a.K(a4,t)
a3.y=w
a3.x=v
if(u.a!==D.z)return u}for(a4=a3.a,t=a3.d,s=a3.c,r=a3.b,q=B.m(s);p=a3.y,o=a3.x,n=o.length,p<n;){if(!(p>=0))return B.b(o,p)
m=o[p];++p
a3.y=p
o=a3.CW
n=o>0
l=n||a3.ax>0||a3.ay>0||a3.ch>0
k=a3.as
j=k&&!a3.at
i=a3.Q
i===$&&B.B()
i=!i
if(i)h=!l||a3.ay>0
else h=!1
if(k)g=!l||a3.ch>0
else g=!1
k=!j
if(k)f=!l||a3.ax>0
else f=!1
if(k)e=!l||n
else e=!1
if(h){n=a3.ay
if(!(n<r.length))return B.b(r,n)
d=m===r[n]}else d=!1
n=d?++a3.ay:a3.ay=0
if(g){k=a3.ch
if(!(k<s.length))return B.b(s,k)
k=m===s[k]}else k=!1
if(k){k=++a3.ch
d=!0}else{a3.ch=0
k=0}if(e){if(!(o<t.length))return B.b(t,o)
a0=m===t[o]}else a0=!1
if(a0){++o
a3.CW=o
d=!0}else{a3.CW=0
o=0}if(f){a0=a3.ax
if(!(a0<a4.length))return B.b(a4,a0)
a0=m===a4[a0]}else a0=!1
if(a0){a0=++a3.ax
d=!0}else{a3.ax=0
a0=0}if(d){a1=a3.cx
a1===$&&B.B()
a1.a+=m}if(l&&!d){a3.y=p-1
u=a3.hx()
if(u.a!==D.z)return u
continue}if(!d){p=a3.w
p===$&&B.B()
p.a+=m
a3.at=!1
a3.Q=!0
a3.CW=a3.ax=a3.ch=a3.ay=0
p=a3.cx
p===$&&B.B()
p.a=""
continue}if(n===r.length){a3.CW=a3.ax=a3.ch=a3.ay=0
p=a3.cx
p===$&&B.B()
p.a=""
if(i)a3.as=a3.Q=!0
p=0
o=0
n=0}else{n=a0
p=o
o=k}if(o===s.length){a3.CW=a3.ax=a3.ch=a3.ay=0
p=a3.cx
p===$&&B.B()
p.a=""
if(a3.at){o=a3.w
o===$&&B.B()
o.a+=q
a3.at=!1
a3.Q=!0
p.a=""}else a3.at=!0
p=0
o=0}else o=n
if(p===t.length){a3.CW=a3.ax=a3.ch=a3.ay=0
a4=a3.cx
a4===$&&B.B()
a4.a=""
a3.as=a3.Q=!1
a2=a3.at
a3.at=!1
return new A.hx(D.ab,a2)}if(o===a4.length){a3.CW=a3.ax=a3.ch=a3.ay=0
a4=a3.cx
a4===$&&B.B()
a4.a=""
a3.as=a3.Q=!1
a2=a3.at
a3.at=!1
return new A.hx(D.bi,a2)}}return new A.hx(D.z,a3.at)},
lM(d,e,f){var w,v,u,t,s,r=this,q=r.x
if(q==null){r.x=d
r.y=0}for(w=null;;){w=r.er()
v=w.a
for(;;){q=!1
if(v===D.z)q=r.CW>0||r.ax>0||r.ay>0||r.ch>0
if(!q)break
w=r.hx()
v=w.a}q=r.w
q===$&&B.B()
u=q.a
t=u.charCodeAt(0)==0?u:u
q.a=""
q=v===D.z
if(q&&!w.b&&t.length===0&&e.length===0)break
if(!w.b){s=C.a.bx(t)
u=B.pg(s,null)
if(u==null)u=A.AJ(s)
C.b.m(e,u==null?t:u)}else C.b.m(e,t)
if(v===D.ab)break
if(q)break}return w},
lN(d,e,f){return this.lM(d,e,f,x.z)},
lL(d,e){var w,v,u,t=B.a([],e.h("x<n<0>>"))
for(w=e.h("x<0>");;){v=B.a([],w)
u=this.lN(d,v,!0)
if(v.length!==0)C.b.m(t,v)
if(u.a===D.z)break}return t}}
A.hy.prototype={
i(d){return this.a}}
A.hx.prototype={}
A.jm.prototype={
cU(d,e,f,g,h){return this.l8(d,e,x.n.a(f),g,h)},
l8(d,e,f,g,h){var w=0,v=B.d5(x.cD),u,t=this,s,r
var $async$cU=B.cz(function(i,j){if(i===1)return B.d1(j,v)
for(;;)switch(w){case 0:s=A.AR(d,e)
s.r.v(0,f)
s.slF(g)
r=A
w=3
return B.dL(t.c3(s),$async$cU)
case 3:u=r.q4(j)
w=1
break
case 1:return B.d2(u,v)}})
return B.d3($async$cU,v)},
$ina:1}
A.fM.prototype={
b5(){if(this.w)throw B.d(B.aX("Can't finalize a finalized Request."))
this.w=!0
return D.ap},
i(d){return this.a+" "+this.b.i(0)}}
A.mQ.prototype={
fG(d,e,f,g,h,i,j){var w=this.b
if(w<100)throw B.d(B.a5("Invalid status code "+w+".",null))
else{w=this.d
if(w!=null&&w<0)throw B.d(B.a5("Invalid content length "+B.m(w)+".",null))}}}
A.jo.prototype={
c3(d){return this.j0(d)},
j0(a7){var w=0,v=B.d5(x.hL),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6
var $async$c3=B.cz(function(a8,a9){if(a8===1){s.push(a9)
w=t}for(;;)switch(w){case 0:if(r.c)throw B.d(A.vX("HTTP request failed. Client is already closed.",a7.b))
a7.j4()
f=x.oU
e=new A.dA(null,null,null,null,f)
e.e2(a7.y)
e.fS()
w=3
return B.dL(new A.eI(new A.dE(e,f.h("dE<1>"))).iG(),$async$c3)
case 3:q=a9
t=5
f=B.o(b.G.window)
e=a7.b
d=e.i(0)
a0=!J.mC(q)?q:null
a1=x.N
p=B.A(a1,x.K)
o=a7.y.length
n=null
if(o!=null){n=o
J.mA(p,"content-length",n)}for(a2=a7.r,a2=new B.b2(a2,B.f(a2).h("b2<1,2>")).gt(0);a2.n();){a3=a2.d
a3.toString
m=a3
J.mA(p,m.a,m.b)}p=A.vo(p)
p.toString
B.o(p)
a2=B.o(r.a.signal)
w=8
return B.dL(A.vq(B.o(f.fetch(d,{method:a7.a,headers:p,body:a0,credentials:"same-origin",redirect:"follow",signal:a2})),x.m),$async$c3)
case 8:l=a9
k=B.bN(B.o(l.headers).get("content-length"))
j=k!=null?B.pg(k,null):null
if(j==null&&k!=null){p=A.vX("Invalid content-length header ["+k+"].",e)
throw B.d(p)}i=B.A(a1,a1)
p=B.o(l.headers)
f=new A.mT(i)
if(typeof f=="function")B.a0(B.a5("Attempting to rewrap a JS function.",null))
a4=function(b0,b1){return function(b2,b3,b4){return b0(b1,b2,b3,b4,arguments.length)}}(A.Ci,f)
a4[$.uk()]=f
p.forEach(a4)
p=A.iZ(a7,l)
f=B.ax(l.status)
e=i
a0=j
B.aH(B.r(l.url))
a1=B.r(l.statusText)
p=new A.l_(A.Ej(p),a7,f,a1,a0,e,!1,!0)
p.fG(f,a0,e,!1,!0,a1,a7)
u=p
w=1
break
t=2
w=7
break
case 5:t=4
a6=s.pop()
h=B.G(a6)
g=B.a_(a6)
A.vc(h,g,a7)
w=7
break
case 4:w=2
break
case 7:case 1:return B.d2(u,v)
case 2:return B.d1(s.at(-1),v)}})
return B.d3($async$c3,v)}}
A.eI.prototype={
iG(){var w=new B.z($.D,x.jz),v=new B.bv(w,x.iq),u=new A.lv(new A.mX(v),new Uint8Array(1024))
this.bq(x.nw.a(u.geB(u)),!0,u.glI(),v.gi1())
return w}}
A.eJ.prototype={
i(d){var w=this.b.i(0)
return"ClientException: "+this.a+", uri="+w},
$iaB:1}
A.kJ.prototype={
geO(){var w,v,u=this
if(u.gbh()==null||!u.gbh().c.a.P("charset"))return u.x
w=u.gbh().c.a.k(0,"charset")
w.toString
v=A.w2(w)
return v==null?B.a0(B.aw('Unsupported encoding "'+w+'".',null,null)):v},
slF(d){var w,v=this,u=x.f4.a(v.geO().bm(d))
v.jU()
v.y=A.yu(u)
w=v.gbh()
if(w==null){u=x.N
v.sbh(A.p9("text","plain",B.a6(["charset",v.geO().gb9()],u,u)))}else if(!w.c.a.P("charset")){u=x.N
v.sbh(w.lH(B.a6(["charset",v.geO().gb9()],u,u)))}},
gbh(){var w=this.r.k(0,"content-type")
if(w==null)return null
return A.ws(w)},
sbh(d){this.r.j(0,"content-type",d.i(0))},
jU(){if(!this.w)return
throw B.d(B.aX("Can't modify a finalized Request."))}}
A.f6.prototype={}
A.hN.prototype={}
A.l_.prototype={}
A.fN.prototype={}
A.f1.prototype={
lH(d){var w,v
x.n.a(d)
w=x.N
v=B.uF(this.c,w,w)
v.v(0,d)
return A.p9(this.a,this.b,v)},
i(d){var w=new B.as(""),v=this.a
w.a=v
v+="/"
w.a=v
w.a=v+this.b
v=this.c
v.a.S(0,v.$ti.h("~(1,2)").a(new A.pc(w)))
v=w.a
return v.charCodeAt(0)==0?v:v}}
A.eG.prototype={
A(d){return this.c.$1(d)}}
A.jR.prototype={
A(d){var w=null,v=x.i,u=B.a([],v)
u.push(new B.ad("title",w,w,w,w,w,B.a([new B.t(this.c,w)],v),w))
return new A.eD(D.an,w,u,w)}}
A.fL.prototype={
a3(){return"AttachTarget."+this.b}}
A.eD.prototype={
ar(){var w=B.cJ(x.h),v=($.ao+1)%16777215
$.ao=v
return new A.lt(null,!1,!1,w,v,this,C.k)},
gbw(){return this.b}}
A.lt.prototype={
bK(){var w=this.f
w.toString
return x.I.a(w).d},
b4(){var w,v,u=this.f
u.toString
x.I.a(u)
w=this.e
w.toString
w=new A.ck(B.a([],x.kG),u.b,w)
w.cL("")
v=A.df(w.x)
C.b.m(v.f,w)
v.r=!0
w.seD(u.c)
return w},
bc(d){var w
x.j.a(d)
w=this.f
w.toString
x.I.a(w)
d.sbw(w.b)
d.seD(w.c)},
cd(){var w,v
this.fs()
w=this.d$
w.toString
x.j.a(w)
v=this.e
v.toString
w.slW(v)},
bl(){var w,v
this.jq()
w=this.d$
w.toString
x.j.a(w)
v=A.df(w.x)
C.b.J(v.f,w)
v.bY()}}
A.ck.prototype={
sbw(d){var w=this,v=w.x
if(v===d)return
v=A.df(v)
C.b.J(v.f,w)
v.bY()
w.x=d
v=A.df(d)
C.b.m(v.f,w)
v.r=!0
A.df(w.x).bY()},
seD(d){x.n.a(d)
if(this.y==d)return
this.y=d
A.df(this.x).bY()},
slW(d){if(this.z===d)return
this.z=d
A.df(this.x).iM(!0)},
bj(d,e){var w,v,u,t,s=this
d.a=s
try{w=d.ga6()
v=e==null?null:e.ga6()
if(v==null&&C.b.B(s.w,w))return
if(v!=null&&!C.b.B(s.w,v))v=null
u=s.w
C.b.J(u,w)
t=v!=null?C.b.aJ(u,v)+1:0
C.b.dc(u,t,w)
A.df(s.x).bY()}finally{d.b5()}},
J(d,e){C.b.J(this.w,e.ga6())
e.a=null
A.df(this.x).bY()}}
A.ji.prototype={
gcj(){var w,v=this,u=v.b
if(u===$){w=B.J(B.o(b.G.document).querySelector(v.a.b))
w.toString
v.b!==$&&B.c1()
v.b=w
u=w}return u},
ghV(){var w,v=this,u=v.d
if(u===$){w=new A.mM(v).$0()
v.d!==$&&B.c1()
v.d=w
u=w}return u},
gio(){return new B.cf(this.mB(),x.hW)},
mB(){var w=this
return function(){var v=0,u=1,t=[],s,r
return function $async$gio(d,e,f){if(e===1){t.push(f)
v=u}for(;;)switch(v){case 0:s=w.ghV()
r=B.J(s.a.nextSibling)
case 2:if(!(r!=null&&r!==s.b)){v=3
break}v=4
return d.b=r,1
case 4:r=B.J(r.nextSibling)
v=2
break
case 3:return 0
case 1:return d.c=t.at(-1),3}}}},
gmu(){var w,v,u,t,s,r=this,q=r.e
if(q===$){w=B.A(x.N,x.m)
for(v=r.gio(),u=v.$ti,v=new B.d_(v.a(),u.h("d_<1>")),u=u.c;v.n();){t=v.b
if(t==null)t=u.a(t)
s=r.cp(t)
if(typeof s=="string")w.j(0,s,t)}r.e!==$&&B.c1()
r.e=w
q=w}return q},
cp(d){var w,v,u,t,s,r=d instanceof $.um()
if(!r)return null
A:{w=B.r(d.id)
r=w.length!==0
v=w
u=null
if(r){r=v
break A}t=B.r(d.tagName)
if("TITLE"!==t)r="BASE"===t
else r=!0
if(r){r="__"+B.r(d.tagName)
break A}if("META"===t){s=B.J(B.o(d.attributes).getNamedItem("name"))
B:{if(x.m.b(s)){r="__meta:"+B.r(s.value)
break B}r=u
break B}break A}r=u
break A}return r},
iM(a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this
if(a1||a0.r){C.b.b1(a0.f,new A.mN())
a0.r=!1}w=a0.a
if(w.c){v=a0.c
if(v===$){u=A.AC(B.o(a0.gcj().attributes))
a0.c!==$&&B.c1()
a0.c=u
v=u}for(t=a0.f,s=t.length,r=0;r<t.length;t.length===s||(0,B.P)(t),++r){q=t[r].y
if(q!=null)v.v(0,q)}p=B.eX(x.N)
for(o=0;t=a0.gcj(),o<B.ax(B.o(t.attributes).length);++o)p.m(0,B.r(B.J(B.o(t.attributes).item(o)).name))
if(v.a!==0)for(s=new B.b2(v,B.f(v).h("b2<1,2>")).gt(0);s.n();){n=s.d
m=n.a
B.jj(t,m,n.b)
p.J(0,m)}if(p.a!==0)for(s=B.v_(p,p.r,p.$ti.c),m=s.$ti.c;s.n();){l=s.d
if(l==null)l=m.a(l)
t.removeAttribute(l)}}if(w.d){w=a0.gmu()
t=x.m
k=B.wq(w,x.N,t)
j=B.b3(new B.aC(w,B.f(w).h("aC<2>")),t)
for(w=a0.f,t=w.length,r=0;r<w.length;w.length===t||(0,B.P)(w),++r)for(s=w[r].w,m=s.length,i=0;i<s.length;s.length===m||(0,B.P)(s),++i){h=s[i]
g=a0.cp(h)
if(g!=null){f=k.k(0,g)
k.j(0,g,h)
if(f!=null){C.b.j(j,C.b.aJ(j,f),h)
continue}}C.b.m(j,h)}w=a0.ghV()
e=B.J(w.a.nextSibling)
for(t=j.length,r=0;r<j.length;j.length===t||(0,B.P)(j),++r){h=j[r]
if(e==null||e===w.b)B.o(a0.gcj().insertBefore(h,e))
else if(e===h)e=B.J(e.nextSibling)
else if(a0.cp(h)!=null&&a0.cp(h)==a0.cp(e)){s=B.J(e.parentNode)
if(s!=null)B.o(s.replaceChild(h,e))
e=B.J(h.nextSibling)}else B.o(a0.gcj().insertBefore(h,e))}for(;;){if(!(e!=null&&e!==w.b))break
d=B.J(e.nextSibling)
t=B.J(e.parentNode)
if(t!=null)B.o(t.removeChild(e))
e=d}}},
bY(){return this.iM(!1)},
gbw(){return this.a}}
A.mp.prototype={
A(d){var w=null
return new B.ad("header",w,w,w,w,w,this.w,w)}}
A.ml.prototype={
A(d){var w=null
return new B.ad("h1",w,this.d,w,w,w,this.w,w)}}
A.mm.prototype={
A(d){var w=null
return new B.ad("h2",w,this.d,w,w,w,this.w,w)}}
A.mn.prototype={
A(d){var w=null
return new B.ad("h3",w,this.d,w,w,w,this.w,w)}}
A.mo.prototype={
A(d){var w=null
return new B.ad("h4",w,this.d,w,w,w,this.w,w)}}
A.mr.prototype={
A(d){var w=null
return new B.ad("nav",w,this.d,w,w,w,this.w,w)}}
A.mv.prototype={
A(d){var w=null
return new B.ad("section",this.c,this.d,w,w,w,this.w,w)}}
A.me.prototype={
A(d){var w=null,v=x.N
return new B.ad("blockquote",w,this.e,w,B.A(v,v),w,this.x,w)}}
A.d7.prototype={
A(d){var w=this
return new B.ad("div",w.c,w.d,w.e,null,w.r,w.w,null)}}
A.mu.prototype={
A(d){var w=null
return new B.ad("p",w,this.d,this.e,w,w,this.w,w)}}
A.mg.prototype={
A(d){var w=this,v=x.N,u=B.A(v,v),t=w.y
if(t!=null)u.v(0,t)
v=B.A(v,x.v)
t=w.z
if(t!=null)v.v(0,t)
v.v(0,A.tQ().$1$1$onClick(w.f,x.H))
return new B.ad("button",null,w.w,w.x,u,v,w.Q,null)}}
A.j4.prototype={
A(d){var w,v=this,u=null,t=x.N,s=B.A(t,t)
s.j(0,"type",v.c.c)
s.j(0,"value",v.e)
w=A.xH(u)
if(w!=null)s.j(0,"checked",w)
w=A.xH(u)
if(w!=null)s.j(0,"indeterminate",w)
t=B.A(t,x.v)
t.v(0,A.tQ().$1$2$onChange$onInput(u,v.x,v.$ti.c))
return new B.ad("input",u,u,v.as,s,t,u,u)}}
A.a9.prototype={
a3(){return"InputType."+this.b}}
A.mt.prototype={
A(d){var w=null,v=x.N
v=B.A(v,v)
v.v(0,this.y)
return new B.ad("option",w,w,this.x,v,w,this.Q,w)}}
A.mw.prototype={
A(d){var w=null,v=x.N,u=B.A(v,x.v)
u.v(0,this.ch)
u.v(0,A.tQ().$1$2$onChange$onInput(w,w,x.bF))
return new B.ad("select",w,w,this.ax,B.A(v,v),u,this.CW,w)}}
A.j3.prototype={
A(d){var w,v=this,u=null,t=x.N
t=B.A(t,t)
w=v.c
if(w!=null)t.j(0,"alt",w)
w=v.e
w=w==null?u:C.d.i(w)
if(w!=null)t.j(0,"width",w)
w=v.f
w=w==null?u:C.d.i(w)
if(w!=null)t.j(0,"height",w)
t.j(0,"src",v.w)
return new B.ad("img",u,v.z,v.Q,t,u,u,u)}}
A.mq.prototype={
A(d){var w,v=this,u=x.N
u=B.A(u,u)
w=v.ax
if(w!=null)u.v(0,w)
u.j(0,"src",v.c)
return new B.ad("iframe",null,v.as,v.at,u,null,v.ch,null)}}
A.md.prototype={
A(d){var w,v=this,u=null,t=x.N,s=B.A(t,t)
s.j(0,"href",v.c)
w=v.d==null?u:"_blank"
if(w!=null)s.j(0,"target",w)
t=B.A(t,x.v)
w=v.as
if(w!=null)t.v(0,w)
t.v(0,A.tQ().$1$1$onClick(u,x.H))
return new B.ad("a",u,v.y,v.z,s,t,v.at,u)},
gbw(){return this.d}}
A.qE.prototype={
a3(){return"Target."+this.b},
gR(){return"_blank"}}
A.mf.prototype={
A(d){var w=null
return new B.ad("br",w,w,w,w,w,w,w)}}
A.j5.prototype={
A(d){var w=null
return new B.ad("span",w,w,this.e,w,w,this.w,w)}}
A.nG.prototype={
a3(){return"Display."+this.b}}
A.lu.prototype={
gZ(){var w=x.N
return B.a6(["border","none"],w,w)},
$ijn:1}
A.cx.prototype={
gZ(){var w,v=B.a([],x.s)
v.push("solid")
v.push("var("+this.b.a+")")
w=this.c
v.push(B.an(w.b)+w.a)
w=x.N
return B.a6(["border",C.b.T(v," ")],w,w)},
$ijn:1}
A.lS.prototype={
gZ(){var w,v,u=x.N
u=B.A(u,u)
u.j(0,"border-top-style","solid")
w=this.b
v=w.b.a
if(v!=null)u.j(0,"border-top-color",v)
w=w.c
w=B.an(w.b)+w.a
if(w!=null)u.j(0,"border-top-width",w)
return u},
$ijn:1}
A.mR.prototype={}
A.mS.prototype={
a3(){return"BorderStyle."+this.b}}
A.aR.prototype={
gZ(){var w=this.a,v=x.N
return B.a6(["border-radius",B.an(w.b)+w.a],v,v)},
$izD:1}
A.dB.prototype={
gR(){var w=this,v=B.a([],x.s),u=w.a
v.push(B.an(u.b)+u.a)
u=w.b
v.push(B.an(u.b)+u.a)
u=w.c
if(u!=null){u=B.an(u.b)+u.a
v.push(u==null?"0":u)}v.push(w.e.gR())
return C.b.T(v," ")},
$izG:1}
A.jE.prototype={}
A.dJ.prototype={
gR(){return"var("+this.a+")"},
$ius:1}
A.m9.prototype={}
A.lL.prototype={
gZ(){var w,v=x.N
v=B.A(v,v)
w=B.an(this.a)
v.j(0,"flex-grow",w)
return v},
$iA1:1}
A.mE.prototype={
a3(){return"AlignSelf."+this.b}}
A.jL.prototype={
a3(){return"FlexDirection."+this.b}}
A.nV.prototype={
a3(){return"FlexWrap."+this.b}}
A.hg.prototype={
a3(){return"JustifyContent."+this.b}}
A.fI.prototype={
a3(){return"AlignItems."+this.b}}
A.oc.prototype={
gZ(){var w,v,u=x.N
u=B.A(u,u)
w=this.a
v=B.an(w.b)
u.j(0,"row-gap",v+w.a)
return u}}
A.ik.prototype={
gZ(){var w=x.N
return B.a6(["position",this.a],w,w)},
$iwu:1}
A.lT.prototype={
gZ(){var w=x.N
w=B.wq(A.ik.prototype.gZ.call(this),w,w)
return w}}
A.ll.prototype={}
A.m7.prototype={}
A.er.prototype={
gZ(){var w,v,u,t,s,r,q=this,p=null,o=q.b,n=o==null
if(!n&&q.c!=null&&q.d!=null&&q.a!=null){n=B.an(o.b)
o=o.a
w=q.c
if(w==null)w=x.nQ.a(w)
v=B.an(w.b)
u=q.d
if(u==null)u=x.nQ.a(u)
t=B.an(u.b)
s=q.a
if(s==null)s=x.nQ.a(s)
r=x.N
return B.a6(["",n+o+" "+(v+w.a)+" "+(t+u.a)+" "+(B.an(s.b)+s.a)],r,r)}else{w=x.N
w=B.A(w,w)
o=n?p:B.an(o.b)+o.a
if(o!=null)w.j(0,"top",o)
o=q.a
o=o==null?p:B.an(o.b)+o.a
if(o!=null)w.j(0,"left",o)
o=q.c
o=o==null?p:B.an(o.b)+o.a
if(o!=null)w.j(0,"right",o)
o=q.d
o=o==null?p:B.an(o.b)+o.a
if(o!=null)w.j(0,"bottom",o)
return w}},
$ikV:1}
A.aI.prototype={
gZ(){var w=this,v=null,u=w.a,t=u==null,s=!t&&w.b!=null,r=x.N
if(s){t=w.b
return B.a6(["",B.an(u.b)+u.a+" "+(B.an(t.b)+t.a)],r,r)}else{s=B.A(r,r)
r=t?v:B.an(u.b)+u.a
if(r!=null)s.j(0,"top",r)
u=t?v:B.an(u.b)+u.a
if(u!=null)s.j(0,"bottom",u)
u=w.b
t=u==null
r=t?v:B.an(u.b)+u.a
if(r!=null)s.j(0,"left",r)
u=t?v:B.an(u.b)+u.a
if(u!=null)s.j(0,"right",u)
return s}},
$ikV:1}
A.l4.prototype={
a3(){return"TextAlign."+this.b}}
A.jM.prototype={
a3(){return"FontWeight."+this.b}}
A.hS.prototype={
gR(){return"none"}}
A.l5.prototype={
a3(){return"TextDecorationLineKeyword."+this.b},
$ihS:1,
gR(){return"underline"}}
A.hR.prototype={
gR(){return"none"}}
A.dH.prototype={
gR(){var w=B.a([],x.s)
w.push(this.a.gR())
return C.b.T(w," ")},
$ihR:1}
A.ag.prototype={}
A.k.prototype={}
A.ct.prototype={
aT(d,e,f){var w=this.$ti.C(f).h("1/(2)").a(d).$1(this.a)
if(f.h("V<0>").b(w))return w
return new A.ct(w,f.h("ct<0>"))},
ab(d,e){return this.aT(d,null,e)},
c_(d){var w,v,u,t,s,r,q=this
x.mY.a(d)
try{w=d.$0()
if(x.pg.b(w)){t=w.ab(new A.qD(q),q.$ti.c)
return t}return q}catch(s){v=B.G(s)
u=B.a_(s)
t=B.tr(v,u)
r=new B.z($.D,q.$ti.h("z<1>"))
r.bg(t)
return r}},
$iV:1}
A.c4.prototype={
ar(){var w=B.cJ(x.h),v=($.ao+1)%16777215
$.ao=v
return new A.lM(null,!1,!1,w,v,this,C.k)}}
A.lM.prototype={
bK(){var w=this.f
w.toString
return x.gF.a(w).b},
b4(){var w=this.CW.d$
w.toString
return B.zV(w,null)},
bc(d){x.mj.a(d)}}
A.c5.prototype={
ar(){return A.Ah(this)}}
A.aW.prototype={
gu(){return x.ig.a(B.u.prototype.gu.call(this))},
d2(){return this.gu().b},
cc(){var w,v,u=this,t=u.a,s=t==null?null:t.z
t=x.ha
w=x.a3
v=s!=null?B.wb(s,t,w):B.eQ(t,w)
u.z=v
v.j(0,B.az(u.gu()),u)},
iY(d){return this.ry.k(0,d)},
dR(d,e){this.ry.j(0,d,e)},
iP(d,e){this.dR(d,null)},
bM(d){x.ig.a(d)
if(this.gu().fg(d))this.mM(d)
this.cC(d)},
mM(d){var w,v,u
for(w=this.ry,v=B.f(w),w=new B.el(w,w.e8(),v.h("el<1>")),v=v.c;w.n();){u=w.d;(u==null?v.a(u):u).ci()}},
eM(d){},
eJ(d){this.ry.J(0,d)}}
A.e0.prototype={}
A.dZ.prototype={
gk9(){return $.nd.k(0,this)}}
A.hh.prototype={
i(d){if(B.az(this)===D.bw)return"[GlobalKey#"+A.yt(this)+"]"
return"["+("<optimized out>#"+A.yt(this))+"]"}}
A.bn.prototype={
ar(){var w=this.aY(),v=($.ao+1)%16777215
$.ao=v
v=new A.kX(w,v,this,C.k)
w.c=v
w.sfX(this)
return v}}
A.aq.prototype={
aK(){},
d6(d){B.f(this).h("aq.T").a(d)},
a0(d){x.M.a(d).$0()
this.c.bU()},
aI(){},
sfX(d){this.a=B.f(this).h("aq.T?").a(d)}}
A.e3.prototype={}
A.kX.prototype={
d2(){return this.ry.A(this)},
ag(){var w,v=this
if(v.w.c){w=v.ry
w.toString
if(x.eg.b(w))v.r.toString}v.kq()
v.dU()},
kq(){try{this.ry.aK()}finally{}this.ry.toString},
bt(){var w,v=this
if(v.w.c&&v.to!=null){w=x.P
return B.w6(v.to.ab(new A.qv(v),w),new A.qw(v),w,x.K)}if(v.x1){v.ry.toString
v.x1=!1}v.cB()},
c4(d){var w
x.mi.a(d)
w=this.ry
w.toString
B.f(w).h("aq.T").a(d)
return!0},
ac(d){x.mi.a(d)
this.dW(d)
this.ry.sfX(d)},
bM(d){x.mi.a(d)
try{this.ry.d6(d)}finally{}this.cC(d)},
cd(){this.fs()
this.ry.toString
this.bU()},
a5(){this.ry.toString
this.j8()},
bX(){var w=this
w.cE()
w.ry.aI()
w.ry=w.ry.c=null},
ci(){this.ft()
this.x1=!0}}
A.M.prototype={
ar(){var w=($.ao+1)%16777215
$.ao=w
return new A.kY(w,this,C.k)}}
A.kY.prototype={
gu(){return x.ft.a(B.u.prototype.gu.call(this))},
ag(){if(this.w.c)this.r.toString
this.dU()},
c4(d){x.ft.a(B.u.prototype.gu.call(this))
return!0},
d2(){return x.ft.a(B.u.prototype.gu.call(this)).A(this)},
bt(){this.w.toString
this.cB()}}
A.hA.prototype={
bL(){var w,v,u=this,t=u.f,s=x.w
t=B.b3(new B.aC(t,B.f(t).h("aC<2>")),s)
w=u.r
C.b.v(t,new B.aC(w,B.f(w).h("aC<2>")))
for(w=t.length,v=0;v<t.length;t.length===w||(0,B.P)(t),++v)t[v].aq()
u.f=u.d
t=x.jh
u.d=B.A(t,s)
u.r=u.e
u.e=B.A(t,s)},
a5(){var w,v,u=this,t=u.d,s=x.w
t=B.b3(new B.aC(t,B.f(t).h("aC<2>")),s)
w=u.f
C.b.v(t,new B.aC(w,B.f(w).h("aC<2>")))
w=u.e
C.b.v(t,new B.aC(w,B.f(w).h("aC<2>")))
w=u.r
C.b.v(t,new B.aC(w,B.f(w).h("aC<2>")))
for(w=t.length,v=0;v<t.length;t.length===w||(0,B.P)(t),++v)t[v].aq()
t=x.jh
u.f=B.A(t,s)
u.d=B.A(t,s)
u.r=B.A(t,s)
u.e=B.A(t,s)},
fk(d,e){var w,v,u,t,s=this
e.h("bf<0>").a(d)
w=A.hC(s.a,!0)
v=x.b.a(A.aW.prototype.gu.call(w)).d
w=s.c
if(w!=null&&w!==v)s.a5()
s.c=v
if(!s.d.P(d)){u=s.f.J(0,d)
if(u!=null)s.d.j(0,d,u)
else{t=v.im(d,new A.pj(s,d,e),e)
s.d.j(0,d,t)}}w=s.d.k(0,d)
w.toString
return e.a(A.uK(w,x.X).gdI())}}
A.qC.prototype={
nm(d){var w,v,u,t,s,r
x.h9.a(d)
if(d==null)return
this.a.toString
w=this.ok$
v=0
for(;!1;++v){u=D.b6[v]
if(!d.P(u.gib()))continue
t=d.k(0,u.gib())
s=u.gnt()
r=t!=null
C.b.m(w,u.nu(r?s.cg(t):t))}}}
A.dr.prototype={
aY(){return new A.kH(B.A(x.N,x.X),B.a([],x.T))}}
A.kH.prototype={
aK(){this.jz()
this.kp()},
kp(){var w,v,u,t,s,r,q,p,o,n=this,m=null
if(n.r)return
n.r=!0
w=n.c.fl(x.b)
w=w==null?m:w.gu()
x.dU.a(w)
v=w==null?m:w.d
w=$.vy()
u=n.c.r
u.toString
t=w.$ti.c
t=B.a([new A.da(w,A.vs(t.a(u),t))],x.T)
C.b.v(t,n.ok$)
n.a.toString
C.b.v(t,D.a9)
n.a.toString
s=D.I.dH()
u=B.a([],x.l3)
w=v==null
r=w?0:v.f+1
q=$.D
p=w?m:v.e
o=B.a([],x.m5)
if(w)o.push(D.ar)
if(!w)C.b.v(o,v.z)
w=w?m:v.r
if(w==null)w=v
o=new A.aE(s,q.gmo(),p,r,w,v,u,o)
o.jB(m,m,t,v,m)
n.d!==$&&B.cA()
n.d=o},
d6(d){this.fF(x.e8.a(d))
this.f=!0},
A(d){var w,v,u,t,s=this
if(s.f){s.f=!1
w=s.d
w===$&&B.B()
v=$.vy()
u=d.r
u.toString
t=v.$ti.c
t=B.a([new A.da(v,A.vs(t.a(u),t))],x.T)
s.a.toString
C.b.v(t,D.a9)
w.nl(t)}w=s.d
w===$&&B.B()
return new A.fg(w,s.a.d,null)},
aI(){var w=this.d
w===$&&B.B()
w.fZ(!0)
this.dY()},
$ie3:1}
A.fg.prototype={
fg(d){return this.d!==x.b.a(d).d},
ar(){var w=B.eQ(x.h,x.X),v=($.ao+1)%16777215
$.ao=v
return new A.iJ(w,v,this,C.k)}}
A.iJ.prototype={
gu(){return x.b.a(A.aW.prototype.gu.call(this))},
bs(d,e){x.b.a(A.aW.prototype.gu.call(this)).d.gbJ().b.m(0,this)
this.j5(d,e)},
iP(d,e){var w,v=x.p.a(this.cF(d))
if(v==null){v=x.jh
w=x.w
w=new A.hA(d,B.A(v,w),B.A(v,w),B.A(v,w),B.A(v,w))
v=w}this.fz(d,v)},
fo(d){return this.h7(d)},
fp(d){return this.h7(d)},
h7(d){var w={}
this.cm=d
w.a=!1
A.w8(new A.rX(w,this),x.P)
return new A.rY(w,this,d)},
dR(d,e){this.fz(d,x.iy.a(e))},
eM(d){var w=x.p.a(this.cF(d))
if(w!=null)w.bL()
this.ja(d)},
eJ(d){var w=x.p.a(this.cF(d))
if(w!=null)w.a5()
this.j9(d)},
bX(){var w=this
w.i7=!1
x.b.a(A.aW.prototype.gu.call(w)).d.gbJ().b.J(0,w)
w.cE()},
bt(){var w=this.cm
this.cm=null
if(w!=null)w.$0()
return this.cB()},
$ifi:1}
A.im.prototype={
aK(){this.be()
A.DU(this)}}
A.q9.prototype={
A(d){var w=d.d,v=w==null
if((v?$.vv():w).a.length===0)return new B.t("",null)
if(v)w=$.vv()
return new A.hb(d,this.jR(w,d.e),null)},
jR(d,e){var w,v,u
x.ln.a(e)
try{v=this.fM(d,0,e)
return v}catch(u){v=B.G(u)
if(v instanceof A.iA){w=v
return this.jQ(w,d.d)}else throw u}},
fM(d,e,f){var w,v,u,t,s,r,q,p,o
x.ln.a(f)
w=d.a
if(!(e<w.length))return B.b(w,e)
v=w[e]
u=v.d
if(u!=null)throw B.d(A.BM("Match error found during build phase",u))
t=v.a
s=d.d
r=s.i(0)
q=x.N
q=B.uF(d.c,q,q)
p=s.gdq()
s=s.gdr()
o=e+1
if(w.length>o)return this.fM(d,o,f)
return this.jT(new A.bu(r,v.b,null,t.b,d.b,q,p,s,v.c,u),t,f)},
jT(d,e,f){x.ln.a(f)
return new A.ha(d,new A.eG(new A.qa(e.e,d),null),null)},
jQ(d,e){e.i(0)
e.gX()
e.gdq()
e.gdr()
return new A.jI(new B.fn(d),null)}}
A.iA.prototype={
i(d){var w=this.b
return this.a+" "+B.m(w==null?"":w)}}
A.f8.prototype={
i(d){return"RouterConfiguration: "+B.m(this.a)},
jS(d,e){var w,v
x.hb.a(e)
for(w=e.length,v=0;v<e.length;e.length===w||(0,B.P)(e),++v)A.ya(d,e[v].b)}}
A.kh.prototype={
A(d){var w,v=this,u=null,t=new A.p_(v,d).$0(),s=B.A(x.N,x.v)
s.j(0,"mouseover",new A.p0(v,d))
s.j(0,"click",new A.p1(v,d))
w=B.a([],x.i)
C.b.v(w,v.as)
return A.d6(w,u,u,s,t,u,u,u)},
gbw(){return null}}
A.ds.prototype={}
A.f9.prototype={
i9(d,e){var w,v=B.aH(A.y8(d)),u=x.N,t=B.A(u,u)
x.je.a(t)
w=A.CF(e,v.gX(),"",t,v.gX(),this.a.a)
if(w==null)B.a0(A.AB("no routes for location",v.i(0)))
return new A.ak(w,A.qf(w),t,v)},
mj(d){return this.i9(d,null)}}
A.ak.prototype={
gdD(){var w=this.a
return new B.c9(w,B.O(w).h("c9<1>")).b6(0,null,new A.qg(),x.jv)},
gmv(){var w=this.a
return w.length===1&&C.b.gau(w).d!=null},
i(d){return"RouteMatchList("+this.b+")"}}
A.f0.prototype={
i(d){return this.a}}
A.jI.prototype={
A(d){var w=null,v=this.c
v=v==null?w:v.i(0)
if(v==null)v="page not found"
return A.j(B.a([new B.t("Page Not Found",w),new A.mf(w),new B.t(v,w)],x.i),w,w,w,w)}}
A.hb.prototype={
fg(d){x.hj.a(d)
return!0}}
A.ha.prototype={
fg(d){return!this.d.I(0,x.hn.a(d).d)}}
A.qb.prototype={
mW(d,e,f){var w,v,u,t,s=A.rg()
try{s.si8(this.b.i9(d,f))}catch(w){if(B.G(w) instanceof A.f0){A.aK("No initial matches: "+d)
v=B.a([],x.E)
u=B.aH(A.y8(d))
s.si8(new A.ak(v,A.qf(v),C.D,u))}else throw w}v=new A.qc(d)
t=A.E8().$5$extra(e,s.cR(),this.a,this.b,f)
if(t instanceof A.ak)return v.$1(t)
return t.ab(v,x.Z)}}
A.pf.prototype={}
A.jU.prototype={
mt(d,e){var w
x.aD.a(e)
w=B.rj(B.o(b.G.window),"popstate",x.bl.a(new A.oL(e)),!1,x.m)
return w.gd3()},
iz(d,e,f){var w=B.o(B.o(b.G.window).history),v=A.vo(e),u=f==null?d:f
w.replaceState(v,u,d)},
nc(d,e){return this.iz(d,null,e)},
$iAg:1}
A.kM.prototype={$iAW:1}
A.f7.prototype={}
A.kL.prototype={}
A.dt.prototype={
jC(d,e,f,g,h){var w=this,v=w.c,u=x.N
u=new A.f8(v,5,new A.qn(),B.A(u,u))
u.jS("",v)
w.r!==$&&B.cA()
w.r=u
w.w!==$&&B.cA()
w.w=new A.qb(u,new A.f9(u))
w.x!==$&&B.cA()
w.x=new A.q9(null)},
aY(){return new A.hD(B.A(x.K,x.oN))}}
A.hD.prototype={
aK(){var w,v,u=this
u.be()
w=$.mx()
v=u.c
v.toString
u.f=w.a.mt(v,new A.qm(u))
if(u.d==null)u.ie()},
d6(d){var w
x.nA.a(d)
this.fF(d)
w=this.a
w.toString
if(w===d)return
this.ie()},
ie(){var w=this,v=w.c.r.geH()
return w.hc(v).ab(w.ghs(),x.Z).ab(new A.ql(w,v),x.H)},
hK(d,e,f,g){return this.hd(d,e).ab(new A.qj(this,g,d,f),x.H)},
ln(d,e){return this.hK(d,e,!1,!0)},
kW(d){var w,v,u,t=x.Z
t.a(d)
w=B.a([],x.mn)
for(v=d.a.length,u=0;u<v;++u);return A.AT(w).ab(new A.qh(d),t)},
hd(d,e){var w,v=this.a.w
v===$&&B.B()
w=this.c
w.toString
return v.mW(d,w,e)},
hc(d){return this.hd(d,null)},
hi(d){var w=this.c.r.ghW()
return(C.a.an(w,"/")?C.a.p(w,0,w.length-1):w)+d},
aI(){var w=this.f
if(w!=null)w.$0()
this.f=null
this.dY()},
A(d){var w=B.a([],x.i),v=this.d,u=v==null?null:v.gdD()
if(u!=null)w.push(new A.jR(u,null))
v=this.a.x
v===$&&B.B()
w.push(v.A(this))
return new A.c4(w,null)}}
A.lX.prototype={}
A.bu.prototype={
I(d,e){var w=this
if(e==null)return!1
return e instanceof A.bu&&e.a===w.a&&e.b===w.b&&e.d==w.d&&e.e==w.e&&e.f===w.f&&e.r===w.r&&e.w===w.w&&J.Q(e.x,w.x)&&e.y==w.y},
gE(d){var w=this
return B.bY(w.a,w.b,w.c,w.d,w.e,w.f,w.r,w.w,w.x,w.y)}}
A.jB.prototype={
hQ(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var w
A.y5("absolute",B.a([d,e,f,g,h,i,j,k,l,m,n,o,p,q,r],x.t))
w=this.a
w=w.ae(d)>0&&!w.b7(d)
if(w)return d
w=this.b
return this.il(0,w==null?A.vi():w,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r)},
lx(d){var w=null
return this.hQ(d,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
il(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var w=B.a([e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t],x.t)
A.y5("join",w)
return this.my(new B.hX(w,x.lS))},
mx(d,e,f){var w=null
return this.il(0,e,f,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
my(d){var w,v,u,t,s,r,q,p,o,n
x.bq.a(d)
for(w=d.$ti,v=w.h("v(h.E)").a(new A.nw()),u=d.gt(0),w=new B.cT(u,v,w.h("cT<h.E>")),v=this.a,t=!1,s=!1,r="";w.n();){q=u.gq()
if(v.b7(q)&&s){p=A.f2(q,v)
o=r.charCodeAt(0)==0?r:r
r=C.a.p(o,0,v.bW(o,!0))
p.b=r
if(v.cq(r))C.b.j(p.e,0,v.gbC())
r=p.i(0)}else if(v.ae(q)>0){s=!v.b7(q)
r=q}else{n=q.length
if(n!==0){if(0>=n)return B.b(q,0)
n=v.eG(q[0])}else n=!1
if(!n)if(t)r+=v.gbC()
r+=q}t=v.cq(q)}return r.charCodeAt(0)==0?r:r},
c5(d,e){var w=A.f2(e,this.a),v=w.d,u=B.O(v),t=u.h("a8<1>")
v=B.b3(new B.a8(v,u.h("v(1)").a(new A.nx()),t),t.h("h.E"))
w.smX(v)
v=w.b
if(v!=null)C.b.dc(w.d,0,v)
return w.d},
f3(d){var w
if(!this.kE(d))return d
w=A.f2(d,this.a)
w.f2()
return w.i(0)},
kE(d){var w,v,u,t,s,r,q,p=this.a,o=p.ae(d)
if(o!==0){if(p===$.j9())for(w=d.length,v=0;v<o;++v){if(!(v<w))return B.b(d,v)
if(d.charCodeAt(v)===47)return!0}u=o
t=47}else{u=0
t=null}for(w=d.length,v=u,s=null;v<w;++v,s=t,t=r){if(!(v>=0))return B.b(d,v)
r=d.charCodeAt(v)
if(p.aO(r)){if(p===$.j9()&&r===47)return!0
if(t!=null&&p.aO(t))return!0
if(t===46)q=s==null||s===46||p.aO(s)
else q=!1
if(q)return!0}}if(t==null)return!0
if(p.aO(t))return!0
if(t===46)p=s==null||p.aO(s)||s===46
else p=!1
if(p)return!0
return!1},
n7(d){var w,v,u,t,s,r,q,p=this,o='Unable to find a path to "',n=p.a,m=n.ae(d)
if(m<=0)return p.f3(d)
m=p.b
w=m==null?A.vi():m
if(n.ae(w)<=0&&n.ae(d)>0)return p.f3(d)
if(n.ae(d)<=0||n.b7(d))d=p.lx(d)
if(n.ae(d)<=0&&n.ae(w)>0)throw B.d(A.wt(o+d+'" from "'+w+'".'))
v=A.f2(w,n)
v.f2()
u=A.f2(d,n)
u.f2()
m=v.d
t=m.length
if(t!==0){if(0>=t)return B.b(m,0)
m=m[0]==="."}else m=!1
if(m)return u.i(0)
m=v.b
t=u.b
if(m!=t)m=m==null||t==null||!n.f5(m,t)
else m=!1
if(m)return u.i(0)
for(;;){m=v.d
t=m.length
s=!1
if(t!==0){r=u.d
q=r.length
if(q!==0){if(0>=t)return B.b(m,0)
m=m[0]
if(0>=q)return B.b(r,0)
r=n.f5(m,r[0])
m=r}else m=s}else m=s
if(!m)break
C.b.dv(v.d,0)
C.b.dv(v.e,1)
C.b.dv(u.d,0)
C.b.dv(u.e,1)}m=v.d
t=m.length
if(t!==0){if(0>=t)return B.b(m,0)
m=m[0]===".."}else m=!1
if(m)throw B.d(A.wt(o+d+'" from "'+w+'".'))
m=x.N
C.b.eV(u.d,0,B.ae(t,"..",!1,m))
C.b.j(u.e,0,"")
C.b.eV(u.e,1,B.ae(v.d.length,n.gbC(),!1,m))
n=u.d
m=n.length
if(m===0)return"."
if(m>1&&C.b.ga2(n)==="."){C.b.iw(u.d)
n=u.e
if(0>=n.length)return B.b(n,-1)
n.pop()
if(0>=n.length)return B.b(n,-1)
n.pop()
C.b.m(n,"")}u.b=""
u.ix()
return u.i(0)},
iJ(d){var w,v=this.a
if(v.ae(d)<=0)return v.iv(d)
else{w=this.b
return v.eA(this.mx(0,w==null?A.vi():w,d))}},
f8(d){var w,v,u=this,t=A.vb(d)
if(t.ga8()==="file"&&u.a===$.j8())return t.i(0)
else if(t.ga8()!=="file"&&t.ga8()!==""&&u.a!==$.j8())return t.i(0)
w=u.f3(u.a.dm(A.vb(t)))
v=u.n7(w)
return u.c5(0,v).length>u.c5(0,w).length?w:v}}
A.eS.prototype={
iZ(d){var w,v=this.ae(d)
if(v>0)return C.a.p(d,0,v)
if(this.b7(d)){if(0>=d.length)return B.b(d,0)
w=d[0]}else w=null
return w},
iv(d){var w,v,u=null,t=d.length
if(t===0)return A.aT(u,u,u,u)
w=A.w0(this).c5(0,d)
v=t-1
if(!(v>=0))return B.b(d,v)
if(this.aO(d.charCodeAt(v)))C.b.m(w,"")
return A.aT(u,u,w,u)},
f5(d,e){return d===e}}
A.pd.prototype={
geU(){var w=this.d
if(w.length!==0)w=C.b.ga2(w)===""||C.b.ga2(this.e)!==""
else w=!1
return w},
ix(){var w,v,u=this
for(;;){w=u.d
if(!(w.length!==0&&C.b.ga2(w)===""))break
C.b.iw(u.d)
w=u.e
if(0>=w.length)return B.b(w,-1)
w.pop()}w=u.e
v=w.length
if(v!==0)C.b.j(w,v-1,"")},
f2(){var w,v,u,t,s,r,q=this,p=B.a([],x.s)
for(w=q.d,v=w.length,u=0,t=0;t<w.length;w.length===v||(0,B.P)(w),++t){s=w[t]
if(!(s==="."||s===""))if(s===".."){r=p.length
if(r!==0){if(0>=r)return B.b(p,-1)
p.pop()}else ++u}else C.b.m(p,s)}if(q.b==null)C.b.eV(p,0,B.ae(u,"..",!1,x.N))
if(p.length===0&&q.b==null)C.b.m(p,".")
q.d=p
w=q.a
q.e=B.ae(p.length+1,w.gbC(),!0,x.N)
v=q.b
if(v==null||p.length===0||!w.cq(v))C.b.j(q.e,0,"")
v=q.b
if(v!=null&&w===$.j9())q.b=B.bh(v,"/","\\")
q.ix()},
i(d){var w,v,u,t,s,r=this.b
r=r!=null?r:""
for(w=this.d,v=w.length,u=this.e,t=u.length,s=0;s<v;++s){if(!(s<t))return B.b(u,s)
r=r+u[s]+w[s]}r+=C.b.ga2(u)
return r.charCodeAt(0)==0?r:r},
smX(d){this.d=x.bF.a(d)}}
A.kv.prototype={
i(d){return"PathException: "+this.a},
$iaB:1}
A.qB.prototype={
i(d){return this.gb9()}}
A.kx.prototype={
eG(d){return C.a.B(d,"/")},
aO(d){return d===47},
cq(d){var w,v=d.length
if(v!==0){w=v-1
if(!(w>=0))return B.b(d,w)
w=d.charCodeAt(w)!==47
v=w}else v=!1
return v},
bW(d,e){var w=d.length
if(w!==0){if(0>=w)return B.b(d,0)
w=d.charCodeAt(0)===47}else w=!1
if(w)return 1
return 0},
ae(d){return this.bW(d,!1)},
b7(d){return!1},
dm(d){var w
if(d.ga8()===""||d.ga8()==="file"){w=d.gX()
return B.d0(w,0,w.length,C.n,!1)}throw B.d(B.a5("Uri "+d.i(0)+" must have scheme 'file:'.",null))},
eA(d){var w=A.f2(d,this),v=w.d
if(v.length===0)C.b.v(v,B.a(["",""],x.s))
else if(w.geU())C.b.m(w.d,"")
return A.aT(null,null,w.d,"file")},
gb9(){return"posix"},
gbC(){return"/"}}
A.lf.prototype={
eG(d){return C.a.B(d,"/")},
aO(d){return d===47},
cq(d){var w,v=d.length
if(v===0)return!1
w=v-1
if(!(w>=0))return B.b(d,w)
if(d.charCodeAt(w)!==47)return!0
return C.a.an(d,"://")&&this.ae(d)===v},
bW(d,e){var w,v,u,t=d.length
if(t===0)return 0
if(0>=t)return B.b(d,0)
if(d.charCodeAt(0)===47)return 1
for(w=0;w<t;++w){v=d.charCodeAt(w)
if(v===47)return 0
if(v===58){if(w===0)return 0
u=C.a.aN(d,"/",C.a.O(d,"//",w+1)?w+3:w)
if(u<=0)return t
if(!e||t<u+3)return u
if(!C.a.G(d,"file://"))return u
t=A.yc(d,u+1)
return t==null?u:t}}return 0},
ae(d){return this.bW(d,!1)},
b7(d){var w=d.length
if(w!==0){if(0>=w)return B.b(d,0)
w=d.charCodeAt(0)===47}else w=!1
return w},
dm(d){return d.i(0)},
iv(d){return B.aH(d)},
eA(d){return B.aH(d)},
gb9(){return"url"},
gbC(){return"/"}}
A.lk.prototype={
eG(d){return C.a.B(d,"/")},
aO(d){return d===47||d===92},
cq(d){var w,v=d.length
if(v===0)return!1
w=v-1
if(!(w>=0))return B.b(d,w)
w=d.charCodeAt(w)
return!(w===47||w===92)},
bW(d,e){var w,v,u=d.length
if(u===0)return 0
if(0>=u)return B.b(d,0)
if(d.charCodeAt(0)===47)return 1
if(d.charCodeAt(0)===92){if(u>=2){if(1>=u)return B.b(d,1)
w=d.charCodeAt(1)!==92}else w=!0
if(w)return 1
v=C.a.aN(d,"\\",2)
if(v>0){v=C.a.aN(d,"\\",v+1)
if(v>0)return v}return u}if(u<3)return 0
if(!A.ym(d.charCodeAt(0)))return 0
if(d.charCodeAt(1)!==58)return 0
u=d.charCodeAt(2)
if(!(u===47||u===92))return 0
return 3},
ae(d){return this.bW(d,!1)},
b7(d){return this.ae(d)===1},
dm(d){var w,v
if(d.ga8()!==""&&d.ga8()!=="file")throw B.d(B.a5("Uri "+d.i(0)+" must have scheme 'file:'.",null))
w=d.gX()
if(d.gbp()===""){if(w.length>=3&&C.a.G(w,"/")&&A.yc(w,1)!=null)w=C.a.iA(w,"/","")}else w="\\\\"+d.gbp()+w
v=B.bh(w,"/","\\")
return B.d0(v,0,v.length,C.n,!1)},
eA(d){var w,v,u=A.f2(d,this),t=u.b
t.toString
if(C.a.G(t,"\\\\")){w=new B.a8(B.a(t.split("\\"),x.s),x.Q.a(new A.r_()),x.U)
C.b.dc(u.d,0,w.ga2(0))
if(u.geU())C.b.m(u.d,"")
return A.aT(w.gau(0),null,u.d,"file")}else{if(u.d.length===0||u.geU())C.b.m(u.d,"")
t=u.d
v=u.b
v.toString
v=B.bh(v,"/","")
C.b.dc(t,0,B.bh(v,"\\",""))
return A.aT(null,null,u.d,"file")}},
lJ(d,e){var w
if(d===e)return!0
if(d===47)return e===92
if(d===92)return e===47
if((d^e)!==32)return!1
w=d|32
return w>=97&&w<=122},
f5(d,e){var w,v,u
if(d===e)return!0
w=d.length
v=e.length
if(w!==v)return!1
for(u=0;u<w;++u){if(!(u<v))return B.b(e,u)
if(!this.lJ(d.charCodeAt(u),e.charCodeAt(u)))return!1}return!0},
gb9(){return"windows"},
gbC(){return"\\"}}
A.aY.prototype={}
A.bb.prototype={
sdA(d){var w,v,u=this
u.$ti.h("cB<1>?").a(d)
w=u.w
u.w=d
A:{if(d==null)break A
v=w==null?null:w.a
u.hm(v,d.a)
break A}},
gnd(){var w=this.w
if(w==null)return new A.aV(new B.bG("Trying to read an uninitialized value."),B.e8(),this.$ti.h("aV<1>"))
return w},
dS(d,e){var w,v=this
v.$ti.h("cB<1>").a(d)
if(!e){w=v.r
w=w==null?null:w.a
w=w!=null}else w=!0
if(w)v.sdA(d)
else v.w=d}}
A.m6.prototype={
lA(d,e,f){var w,v,u=this,t=u.$ti,s=new A.aY(t.h("~(1?,1)").a(d),x.gs.a(f),e,t.h("aY<1>")),r=u.b,q=u.c,p=q.length
if(r===p){t=t.h("aY<1>?")
if(r===0){t=B.ae(1,null,!1,t)
u.c=t}else{w=B.ae(p*2,null,!1,t)
for(v=0;v<u.b;++v){t=u.c
if(!(v<t.length))return B.b(t,v)
C.b.j(w,v,t[v])}u.c=w
t=w}}else t=q
C.b.j(t,u.b++,s)
return new A.ta(u,s)},
l_(d){var w,v,u,t,s=this,r=--s.b
if(r*2<=s.c.length){w=B.ae(r,null,!1,s.$ti.h("aY<1>?"))
for(v=0;v<d;++v){r=s.c
if(!(v<r.length))return B.b(r,v)
C.b.j(w,v,r[v])}for(v=d;v<s.b;v=u){r=s.c
u=v+1
if(!(u<r.length))return B.b(r,u)
C.b.j(w,v,r[u])}s.c=w}else{for(v=d;r=s.b,v<r;v=u){r=s.c
u=v+1
if(!(u<r.length))return B.b(r,u)
t=r[u]
if(!(v>=0&&v<r.length))return B.b(r,v)
r[v]=t}C.b.j(s.c,r,null)}},
l0(d){var w,v,u,t,s=this
s.$ti.h("aY<1>").a(d)
for(w=s.b,v=s.c,u=v.length,t=0;t<w;++t){if(!(t<u))return B.b(v,t)
if(v[t]===d){if(s.d>0){C.b.j(v,t,null);++s.e}else s.l_(t)
break}}},
ha(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=k.$ti
j.h("~(aY<1>)").a(d)
s=k.b
if(s===0)return;++k.d
w=0
for(;;){r=w
if(typeof r!=="number")return r.c2()
if(!(r<s))break
try{v=C.b.k(k.c,w)
if(v!=null)d.$1(v)}catch(q){u=B.G(q)
t=B.a_(q)
j=B.aX("An exception was thrown inside a _ChangeNotifier listener:\n"+B.m(u)+"\n"+B.m(t))
throw B.d(j)}r=w
if(typeof r!=="number")return r.bA()
w=r+1}if(--k.d===0&&k.e>0){p=k.b-k.e
if(p*2<=k.c.length){o=B.ae(p,null,!1,j.h("aY<1>?"))
for(n=0,w=0;w<k.b;++w){j=k.c
if(!(w<j.length))return B.b(j,w)
v=j[w]
if(v!=null){m=n+1
C.b.j(o,n,v)
n=m}}k.c=o}else for(w=0;w<p;++w){j=k.c
s=j.length
if(!(w<s))return B.b(j,w)
if(j[w]==null){l=w+1
for(;;){if(!(l<s))return B.b(j,l)
r=j[l]
if(!(r==null))break;++l}j[w]=r
C.b.j(j,l,null)}}k.e=0
k.b=p}},
hm(d,e){var w=this,v=w.$ti
v.h("1?").a(d)
v.c.a(e)
v=w.r
if(v!=null){v=v.a
v=v==null?null:v.b
w.r=new B.fr(new B.it(e,v==null?d:v),null)
return}w.ha(new A.t9(w,d,e))},
di(){this.ha(new A.tb(this))}}
A.av.prototype={
gdI(){return this.a},
I(d,e){if(e==null)return!1
return this.$ti.b(e)&&B.az(e)===B.az(this)&&J.Q(e.a,this.a)},
gE(d){return B.bY(B.az(this),this.a,C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c)},
$icB:1,
gR(){return this.a}}
A.aV.prototype={
gR(){return null},
gdI(){return A.Ei(this.a,this.b)},
I(d,e){var w=this
if(e==null)return!1
return w.$ti.b(e)&&B.az(e)===B.az(w)&&e.b===w.b&&J.Q(e.a,w.a)},
gE(d){return B.bY(B.az(this),this.a,this.b,C.c,C.c,C.c,C.c,C.c,C.c,C.c)},
$icB:1}
A.e4.prototype={
i(d){var w=this.a
if(w instanceof A.e4)return w.i(0)+"\n\nAnd rethrown at:\n"+this.b.i(0)
return"ProviderException: Tried to use a provider that is in error state.\n\nA provider threw the following exception:\n"+B.m(w)+"\n\nThe stack trace of the exception:\n"+this.b.i(0)},
$iaB:1}
A.eM.prototype={
a3(){return"DataKind."+this.b}}
A.dh.prototype={
a3(){return"DataSource."+this.b}}
A.aN.prototype={
gR(){var w=this.gaG()
return w==null?null:w.a},
geP(){var w=this.gaV()
return w==null?null:w.a},
gaD(){var w=this.gaV()
return w==null?null:w.c},
i(d){var w,v,u,t,s=this,r=x.s,q=B.a([],r)
if(s.gaL()!=null&&!(s instanceof A.b0))q.push("isLoading: "+(s.gaL()!=null))
w=s.gaL()
v=w==null?null:w.a
if(v!=null)q.push("progress: "+B.m(v))
if(s.gaG()!=null)q.push("value: "+B.m(s.gR()))
if(s.gaV()!=null){r=B.a(["error: "+B.m(s.geP()),"stackTrace: "+B.m(s.gaD())],r)
if(A.jh(s,B.f(s).c).b)r.push("retrying")
C.b.v(q,r)}r=s.gaG()
u=r==null?null:r.b
if(u!=null)q.push("valueSource: "+u.b)
t=C.b.T(q,", ")
return s.gee()+"<"+B.ay(B.f(s).c).i(0)+">("+t+")"},
I(d,e){var w,v,u=this
if(e==null)return!1
w=!1
if(B.az(u)===J.uo(e)){v=B.f(u)
if(v.h("aN<1>").b(e))if(J.Q(e.gaL(),u.gaL())){w=v.c
w=J.Q(A.uq(e,w),A.uq(u,w))&&J.Q(A.jh(e,w),A.jh(u,w))}}return w},
gE(d){var w=this,v=B.f(w).c
return B.bY(B.az(w),w.gaL(),A.uq(w,v),A.jh(w,v),C.c,C.c,C.c,C.c,C.c,C.c)}}
A.fK.prototype={}
A.bq.prototype={
gee(){return"AsyncData"},
gR(){return this.b.a},
d5(d,e){this.$ti.h("aN<1>").a(d)
return this},
cJ(d){var w=this
if(B.ay(w.$ti.c)===B.ay(d))return d.h("aN<0>").a(w)
return new A.bq(w.a,d.h("+kind,source(0,eM?,dh?)").a(w.b),w.c,d.h("bq<0>"))},
gaL(){return this.a},
gaG(){return this.b},
gaV(){return this.c}}
A.b0.prototype={
gee(){return"AsyncLoading"},
cJ(d){var w=this
if(B.ay(w.$ti.c)===B.ay(d))return d.h("aN<0>").a(w)
return new A.b0(w.a,d.h("+kind,source(0,eM?,dh?)?").a(w.gR()),w.c,d.h("b0<0>"))},
d5(d,e){var w,v,u=this,t=u.$ti,s=t.h("aN<1>")
s.a(d)
if(e)w=d.gaG()
else{v=d.gaG()
w=v==null?null:new B.ft(v.a,v.b,A.Cz(D.bj,v.c,x.iL))}if(e)return A.vP(d,new A.mJ(u,w),new A.mK(u,w),new A.mL(u,w,d),t.c,s)
else return new A.b0(u.a,w,d.gaV(),t)},
gaL(){return this.a},
gaG(){return this.b},
gaV(){return this.c}}
A.bj.prototype={
gee(){return"AsyncError"},
geP(){return this.c.a},
gaD(){return this.c.c},
cJ(d){var w=this
if(B.ay(w.$ti.c)===B.ay(d))return d.h("aN<0>").a(w)
return new A.bj(w.a,d.h("+kind,source(0,eM?,dh?)?").a(w.b),w.c,d.h("bj<0>"))},
d5(d,e){var w=this.$ti
return new A.bj(this.a,w.h("aN<1>").a(d).gaG(),this.c,w)},
gaL(){return this.a},
gaG(){return this.b},
gaV(){return this.c}}
A.q5.prototype={
ce(d,e){var w,v=this
if(v.a==null){w=new A.jN(new A.bz(Date.now(),0,!1),B.a([],x.bI))
v.a=w
d.gbJ().lS(new A.q8(v,w))}C.b.m(v.a.c,e)},
kR(d){return this.b.dn(d,new A.q6())},
kY(d){return this.c.dn(d,new A.q7())}}
A.jN.prototype={}
A.pN.prototype={}
A.uI.prototype={}
A.cG.prototype={}
A.kB.prototype={}
A.kC.prototype={}
A.kD.prototype={}
A.kE.prototype={}
A.kF.prototype={}
A.h1.prototype={
m_(d){x.D.a(d)
$.fG().ce(d,new A.kB())},
m3(d){x.D.a(d)
$.fG().ce(d,new A.kC())},
lY(d,e){var w,v,u
x.A.a(d)
w=$.fG()
v=d.b
A.uJ(v)
u=v.aw(v.db)
if(u!=null)u.gR()
A.wJ(v)
w.ce(d.c,new A.kD())},
m5(d){var w
x.A.a(d)
w=$.fG()
A.uJ(d.b)
w.ce(d.c,new A.kE())},
m7(d,e,f){var w,v=$.fG(),u=d.b
A.uJ(u)
w=u.aw(u.db)
if(w!=null)w.gR()
A.wJ(u)
v.ce(d.c,new A.kF())}}
A.lU.prototype={}
A.ah.prototype={
ig(d){this.f4(A.jg(B.f(this).h("ah.1")),!d.y)},
bd(d){var w=this,v=B.f(w)
return A.vP(v.h("aN<ah.1>").a(d),w.gmN(),w.gmP(),w.gmR(),v.h("ah.1"),x.y)},
f4(d,e){var w,v=this,u=B.f(v),t=v.d_(u.h("b0<ah.1>").a(d),e)
if(v.aM$==null){w=new B.z($.D,u.h("z<ah.1>"))
v.aM$=new B.bv(w,u.h("bv<ah.1>"))
v.y2$.dS(new A.av(w,u.h("av<V<ah.1>>")),t)}return t},
mS(d){return this.f4(d,!1)},
ir(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=B.f(j)
i.h("bj<ah.1>").a(d)
w=j.d_(d,!1)
v=!(j.aw(d) instanceof A.aV)
if(v)i.h("ab<w.0>").a(j.c.a)
if(v)for(v=j.c,u=v.d,t=u.z,s=t.length,v=v.a,r=d.c,q=r.a,r=r.c,p=x.A,o=x.K,n=x.l,m=i.h("ab<w.0>"),l=0;l<t.length;t.length===s||(0,B.P)(t),++l)A.ux(u,t[l].git(),new A.b6(m.a(v),j,u,null),q,r,p,o,n)
k=j.aM$
v=i.h("ah.1")
u=d.c
t=u.a
u=u.c
if(k!=null){A.o3(k.a,v)
k.aW(t,u)
j.aM$=null}else{u=B.tr(t,u)
t=new B.z($.D,i.h("z<ah.1>"))
t.bg(u)
A.o3(t,v)
j.y2$.dS(new A.av(t,i.h("av<V<ah.1>>")),w)}return w},
mQ(d){return this.ir(d,!1)},
iq(d,e){var w,v,u,t=this,s=B.f(t)
s.h("bq<ah.1>").a(d)
w=t.d_(d,!1)
v=t.aM$
u=d.b.a
if(v!=null){v.aH(u)
t.aM$=null}else t.y2$.dS(new A.av(B.h9(u,s.h("ah.1")),s.h("av<V<ah.1>>")),w)
return w},
mO(d){return this.iq(d,!1)}}
A.w.prototype={
gaR(){return B.f(this).h("ab<w.0>").a(this.c.a)},
gaZ(){var w=this.y
w=w==null?null:w.length
return w==null?0:w},
bd(d){var w,v,u,t,s=this
B.f(s).h("aN<w.1>").a(d)
s.ch=!0
w=s.db
s.db=d
if(s.CW){v=s.aw(w)
u=s.aw(d)
u.toString
t=s.fO(u,v)
s.hk(u,v,t)
return t}return!0},
n5(){var w,v,u=this,t="Tried to read the state of an uninitialized provider.\nThis generally means that have a circular dependency, and your provider end-up\ndepending on itself.\n"
u.bO()
w=u.aw(u.db)
v=u.ch
if(!v)return new A.aV(new B.bG(t),B.e8(),B.f(u).h("aV<w.0>"))
if(w==null)return new A.aV(new B.bG(t),B.e8(),B.f(u).h("aV<w.0>"))
return w},
fO(d,e){var w,v,u,t,s,r,q=B.f(this)
q.h("cB<w.0>?").a(e)
q.h("cB<w.0>").a(d)
if(e==null)return!0
w=e instanceof A.av
v=null
u=null
t=!1
if(w){q=q.h("av<w.0>")
q.a(e)
s=e.a
t=d instanceof A.av
if(t){q.a(d)
u=d.a
v=d}else v=d
q=t
r=e}else{q=t
r=e
s=null}if(q)return this.iQ(s,u)
if(!(r instanceof A.aV))if(r instanceof A.av)q=(w?v:d) instanceof A.aV
else q=!1
else q=!0
if(q)return!0},
iQ(d,e){var w=B.f(this).h("w.0")
return!J.Q(w.a(d),w.a(e))},
mH(){var w,v,u,t,s,r=this
r.gbV().lR()
t=new A.db(r,!1,B.f(r).h("db<w.0,w.1>"))
r.e=t
w=t
v=r.db
u=null
u=$.c6
$.c6=r
try{r.hX(w)
$.c6=null
s=r.aw(r.db)
s.toString
r.hl(!0,s,r.aw(v),null)}finally{$.c6=u}},
ac(d){B.f(this).h("aD<w.0>").a(d)},
kU(){var w,v,u,t,s,r,q,p=this
p.ba()
r=new A.db(p,p.at,B.f(p).h("db<w.0,w.1>"))
p.e=r
w=r
v=p.db
p.ch=!1
p.az(new A.px())
u=null
u=$.c6
$.c6=p
try{p.hX(w)
p.az(new A.py())
q=p.db
if(q!==v){p.b=!0
$.c6=null
t=p.aw(q)
s=p.aw(v)
q=t
q.toString
p.hk(q,s,p.fO(t,s))
p.b=!1
$.c6=null}}finally{$.c6=u}},
bO(){var w=this,v=w.dx
w.dx=!0
try{if(!w.cy){w.cy=!0
w.mH()}w.kA()
if(w.Q){w.Q=!1
w.kU()}}finally{w.dx=v}},
kA(){if(!this.as)return
this.as=!1
this.fj(new A.pw())},
ig(d){},
hX(d){var w,v,u,t,s,r=this
B.f(r).h("db<w.0,w.1>").a(d)
if(r.at)r.ax=0
r.at=!1
t=r.c.d.gbJ().y
if(t!=null&&!t.m(0,r))B.a0(B.aX("Tried to rebuild "+r.gaR().i(0)+" multiple times in the same frame"))
r.CW=!1
r.ig(d)
try{r.bk(d)
w=new A.pA()
w.$1(r.gke())}catch(s){v=B.G(s)
u=B.a_(s)
r.ch=!0
r.bd(r.ni(v,u))}finally{r.CW=!0}},
ni(d,e){var w,v=this,u={}
x.l.a(e)
u.a=!1
if(!v.dy){w=v.c
B.f(v).h("ab<w.0>").a(w.a)
A.Ak(w.d,new A.pL(u,v,A.DJ(),d))}if(u.a){u=v.db.gaL()
if(u==null)u=D.bk
return new A.b0(u,v.db.gaG(),new B.fs(d,!0,e),B.f(v).h("b0<w.1>"))}return new A.bj(null,null,new B.fs(d,!1,e),B.f(v).h("bj<w.1>"))},
kb(){if(this.b)return},
eX(d,e){var w,v=this
if(!v.cy)return
if(d)v.at=!0
if(v.Q)return
v.Q=!0
v.ba()
v.df()
if(!v.dx&&v.gaZ()-v.f>0){w=v.c.d.gbJ()
C.b.m(w.d,v)
w.l6(!0)}v.Y(new A.pD())
v.az(new A.pE())},
hl(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=B.f(j)
h.h("cB<w.0>").a(e)
h.h("cB<w.0>?").a(f)
w=!d
if(w)j.kb()
v=f==null?i:f.gR()
A:{u=e instanceof A.av
if(u)break A
e instanceof A.aV}if(g!=null&&!g)return
t=B.b3(j.z,x.kL)
if(w){w=j.y
if(w!=null)C.b.v(t,w)}B:{s=u?e:i
if(u){for(w=j.c.d,u=x.X,r=x.k1,q=h.h("w.0?"),p=h.h("w.0"),o=0;o<t.length;++o){n=t[o]
if(n.b)continue
A.k0(w,r.a(A.wK(n,u).gkF()),v,s.a,q,p)}break B}w=e instanceof A.aV
s=w?e:i
if(w)for(w=j.c.d,u=x.X,r=x.K,q=x.l,o=0;o<t.length;++o){n=t[o]
if(n.b)continue
A.k0(w,A.wK(n,u).gkG(),s.a,s.b,r,q)}}w=j.c
u=h.h("ab<w.0>").a(w.a)
for(w=w.d,t=w.z,r=t.length,q=x.A,h=h.h("w.0?"),m=0;p=t.length,m<p;t.length===r||(0,B.P)(t),++m){l=t[m]
if(d)A.k0(w,l.glX(),new A.b6(u,j,w,i),e.gR(),q,h)
else A.ux(w,l.gm6(),new A.b6(u,j,w,i),v,e.gR(),q,h,h)}for(h=e instanceof A.aV,r=x.K,k=x.l,m=0;m<t.length;t.length===p||(0,B.P)(t),++m){l=t[m]
if(h)A.ux(w,l.git(),new A.b6(u,j,w,i),e.a,e.b,q,r,k)}},
hk(d,e,f){return this.hl(!1,d,e,f)},
em(){var w=this
if(w.as)return
w.as=!0
w.Y(new A.pu())
w.az(new A.pv())},
cs(){var w=this.x
if(w!=null)C.b.S(w,new A.pF())},
dj(){var w=this.x
if(w!=null)C.b.S(w,new A.pG())},
hR(d){var w,v=this
v.cO(d,new A.pz(v,d))
d.gb0()
w=!1
if(!v.r)if(v.gaZ()-v.f<=0)w=d.xr$>0||A.af(d,x.X).y1$!==0
if(w){v.r=!0
w=v.e
w=w==null?null:w.d
A.j_(v.c.d,w)
v.cs()}},
n9(d,e){this.cO(d,new A.pJ(this,x.M.a(e),d))},
is(d,e){this.cO(d,new A.pH(this,d,x.M.a(e)))},
mT(d,e){this.cO(d,new A.pI(this,d,x.M.a(e)))},
fL(){var w=this,v=B.a([],x.J),u=w.x
if(u!=null)C.b.v(v,u)
u=w.y
if(u!=null)C.b.v(v,u)
C.b.v(v,w.z)
u=w.w
if(u!=null)C.b.v(v,u)
if(!new B.a8(v,x.bb.a(new A.pr()),x.lk).gH(0))throw B.d(B.aX("Some leftover closed subscriptions were found.\nThis is likely due to a bug in the provider implementation.\n"+w.i(0)))
v=w.y
if(v!=null){u=B.O(v)
new B.a8(v,u.h("v(1)").a(new A.ps()),u.h("a8<1>")).gl(0)}},
cO(d,e){var w,v,u,t,s=this,r=null
x.M.a(e)
w=s.gaZ()-s.f>0
v=s.gaZ()
s.fL()
e.$0()
s.fL()
A:{u=s.gaZ()-s.f>0
if(!w)t=u&&s.r
else t=!1
if(t){t=s.e
t=t==null?r:t.c
A.j_(s.c.d,t)
s.dj()
break A}if(w)t=!u
else t=!1
if(t){s.r=!0
t=s.e
t=t==null?r:t.d
A.j_(s.c.d,t)
s.cs()
break A}}if(s.gaZ()<v){t=s.e
t=t==null?r:t.f
A.j_(s.c.d,t)
s.df()}else if(s.gaZ()>v){t=s.e
t=t==null?r:t.e
A.j_(s.c.d,t)}},
kf(){var w=this.w
if(w!=null){A.tk(w)
this.w=null}},
df(){this.gbV()},
ba(){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.e
if(l==null)return
w=n.ay
if(w!=null)w.al()
n.ay=null
v=n.x
if(v!=null){w=n.w
C.b.v(w==null?n.w=B.a([],x.J):w,v)
for(w=x.z,u=0;u<v.length;++u)A.af(v[u],w).av()}n.x=null
w=n.c
t=w.d
A.j_(t,l.b)
w=B.f(n).h("ab<w.0>").a(w.a)
for(s=t.z,r=s.length,q=x.A,p=x.H,o=0;o<s.length;s.length===r||(0,B.P)(s),++o)A.k1(t,s[o].gm0(),new A.b6(w,n,t,m),q,p)
l.skx(m)
l.skL(m)
l.skJ(m)
l.skQ(m)
l.skI(m)
l.skP(m)
l.skK(m)
l.skM(m)
l.skN(m)
n.r=!1},
i_(){var w,v,u=this
u.ba()
u.cy=!1
u.db=A.jg(B.f(u).h("w.1"))
w=u.y
if(w!=null){A.tk(w)
u.y=null}v=u.w
if(v!=null){A.tk(v)
u.w=null}},
aI(){var w,v,u,t,s,r,q,p,o=this
o.dy=!0
o.i_()
A.tk(o.z)
o.az(new A.pB())
for(w=o.c,v=w.d,u=v.z,t=u.length,w=w.a,s=B.f(o).h("ab<w.0>"),r=x.A,q=x.H,p=0;p<u.length;u.length===t||(0,B.P)(u),++p)A.k1(v,u[p].gm4(),new A.b6(s.a(w),o,v,null),r,q)},
i(d){var w,v,u,t,s=this,r=B.az(s).i(0)+A.dP(s)+"(",q=B.f(s).h("ab<w.0>").a(s.c.a),p=B.a(["origin: "+q.i(0)],x.s)
if(!s.gbV().I(0,q))p.push("provider: "+s.gbV().i(0))
p.push("isActive: "+(s.gaZ()-s.f>0))
p.push("listenerCount: "+s.gaZ())
p.push("pausedActiveSubscriptionCount: "+s.f)
p.push("retryCount: "+s.ax)
p.push("weakDependents: "+B.m(s.z))
p.push("dependents: "+B.m(s.y))
p.push("inactiveSubscriptions: "+B.m(s.w))
p.push("subscriptions: "+B.m(s.x))
w=s.aw(s.db)
A:{if(w==null){q="state: uninitialized"
break A}if(w instanceof A.av){q="state: "+B.m(w.a)
break A}if(w instanceof A.aV){v=w.a
u=w.b
q="state: error "+B.m(v)+"\n"+u.i(0)
break A}q=null}p.push(q)
for(q=p.length,t=0;t<p.length;p.length===q||(0,B.P)(p),++t)r+="\n"+A.B3(p[t],1)
r+="\n)"
return r.charCodeAt(0)==0?r:r},
Y(d){var w,v=new A.pM(x.kC.a(d))
v.$1(this.z)
w=this.y
if(w!=null)v.$1(w)},
az(d){x.q.a(d)},
fj(d){var w,v,u,t
x.kC.a(d)
w=this.x
if(w!=null)for(v=x.z,u=0;u<w.length;++u)d.$1(A.af(w[u],v).gad())
t=this.w
if(t!=null)for(v=x.z,u=0;u<t.length;++u)d.$1(A.af(t[u],v).gad())},
sj3(d){this.x=x.be.a(d)}}
A.dv.prototype={
aw(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=B.f(this)
j.h("aN<1>").a(d)
if(d instanceof A.bq)return new A.av(d.b.a,j.h("av<1>"))
w=d instanceof A.b0
v=k
u=k
t=k
s=!1
if(w){r=d.geP()
q=r!=null
if(q){p=r==null?B.aa(r):r
v=d.gaD()
if(v!=null){o=v==null?x.l.a(v):v
s=A.jh(d,j.c)
s=s==null?k:s.b
s=s===!0
if(s){t=o
u=p}}}}else{r=k
q=!1}if(!s){s=d instanceof A.bj
if(s){n=w?r:d.c.a
m=q?v:d.c.c
u=m
t=u
u=n}}else s=!0
if(s)return new A.aV(u,t,j.h("aV<1>"))
if(w){l=d.gR()
u=d.b!=null
d=l}else{d=k
u=!1}if(u){u=d==null?j.c.a(d):d
return new A.av(u,j.h("av<1>"))}if(w)return k}}
A.bl.prototype={
dZ(d,e,f,g,h){this.a=null},
$ic7:1,
geL(){return this.d},
gbz(){return this.e}}
A.da.prototype={
i(d){var w=this.a.i(0),v=this.b.dy.i(0)
return w+".overrideWithValue("+v+")"},
$ibk:1,
$ice:1,
gaR(){return this.a},
giu(){return this.b}}
A.ff.prototype={
giu(){return this.a},
i(d){return this.a.i(0)},
$ibk:1,
$ice:1,
$ida:1,
gaR(){return this.a}}
A.dy.prototype={}
A.ev.prototype={
geL(){return null},
gbz(){return null}}
A.fF.prototype={
geL(){return null},
gbz(){return null},
c0(d){var w=null,v=this.$ti
return new A.iH(this,new A.bb(B.ae(0,w,!1,v.h("aY<V<1>>?")),v.h("bb<V<1>>")),w,w,w,d,B.a([],x.G),A.jg(v.c),v.h("iH<1>"))}}
A.cg.prototype={
ac(d){var w,v,u,t=this,s=t.$ti
s.h("ev<cg.0,cg.1>").a(d)
t.jl(d)
t.fy=d
w=d.dy
v=t.aw(t.db)
v.toString
if(w!==s.h("av<cg.0>").a(v).a){u=$.c6
t.b=!0
$.c6=null
s=s.c
t.bd(A.mH(s.a(w),s))
t.b=!1
$.c6=u}},
bk(d){var w=this.$ti.c
this.bd(A.mH(w.a(this.fy.dy),w))
return null},
gbV(){return this.fy}}
A.iH.prototype={}
A.d9.prototype={}
A.bQ.prototype={
gbV(){return this.fx}}
A.aD.prototype={
gaR(){return this},
i(d){var w=this.gV(0).i(0),v=A.dP(this)
return w+"#"+v},
$ibf:1,
$ibk:1,
$ice:1}
A.ab.prototype={
cM(d,e,f,g,h){var w,v=B.f(this)
v.h("~(1?,1)").a(e)
x.f.a(g)
x.Y.a(f)
w=d.a.eu(this,v.c)
w.bO()
return new A.e6(g,e,w,d,!1,null,0,0,v.h("e6<1>"))}}
A.cM.prototype={
I(d,e){if(e==null)return!1
return e===this},
lR(){return null}}
A.hu.prototype={}
A.e5.prototype={
i(d){var w=this.b
return B.f(w).h("ab<w.0>").a(w.c.a).i(0)}}
A.h0.prototype={
i(d){return"ProviderContainer#"+A.dP(this.a)+"()"}}
A.aL.prototype={
i(d){var w=this,v="ProviderPointer"+B.aG(w)+"(\n"+("  targetContainer: "+w.d.i(0)+"\n")+("  override: "+B.m(w.b)+"\n")+("  element: "+B.m(w.c)+"\n")+")"
return v.charCodeAt(0)==0?v:v},
$iv1:1}
A.aO.prototype={
lB(d,e){var w=d.gaR()
this.b.j(0,w,new A.aL(w,d,e))},
nn(d,e){return A.Cy(this.b,d,e,new A.pl(d),new A.pm(e,d),this.c,x.F,x.O)},
ip(d,e){var w,v,u,t,s,r,q,p,o=null,n=this.nn(d,e)
if(n.c==null){A:{w=n.b
v=this.a
u=w!=null
if(u)t=w
else t=o
if(u){s=A.xK(t).c0(n)
break A}r=w==null
u=r
if(u){u=v instanceof A.dy
q=v
p=!0}else{q=o
p=!1
u=!1}if(u){s=n.a.c0(n)
break A}if(r){if(p)u=q
else{u=v
q=u
p=!0}if(!(u instanceof A.dy))u=(p?q:v)==null
else u=!0}else u=!1
s=u?d.c0(n):o}n.c=s}return n},
i(d){var w,v,u,t,s,r,q=this,p="ProviderDirectory"+B.aG(q)+"(\n"+("  targetContainer: "+q.c.i(0)+"\n")+("  override: "+B.m(q.a)+"\n")+"  pointers: {"
for(w=q.b,v=w.gd7(),v=v.gt(v),u=x.s;v.n();p=t){t=v.gq()
s=t.a.i(0)
t=t.b.i(0)
r=C.a.af("  ",2)
t=p+("\n    "+s+": "+C.b.T(B.a(t.split("\n"),u),"\n"+r)+",")}p=(w.a!==0?p+"\n  }\n":p+"}\n")+")"
return p.charCodeAt(0)==0?p:p},
$iv1:1}
A.pO.prototype={
ks(d){x._.a(d)
d.gaR()
this.b.lB(d,this.a)
return},
kr(d){var w,v,u,t
x.gC.a(d)
for(w=d.length,v=x._,u=0;u<d.length;d.length===w||(0,B.P)(d),++u){t=d[u]
A:{if(v.b(t)){this.ks(t)
break A}if(t instanceof A.dy)A.tp(t)}}},
mi(d){var w,v,u
if(this.a.w==null)return null
if(!A.xL(d))return null
w=d.gbz()
w.toString
v=w.a
u=B.f(v)
return new B.c3(v,u.h("h<aE>(1)").a(w.$ti.h("h<aE>(1)").a(new A.pR(this))),u.h("c3<1,aE>")).b6(0,null,new A.pS(),x.dI)},
dt(d){return this.b},
n4(d){var w=this.dt(d)
return w==null?null:w.b.k(0,d)},
iS(d){return this.b},
mA(){var w=this,v=w.b.b.gfi(),u=B.f(v),t=u.h("v(h.E)").a(new A.pT(w)),s=w.c.gfi(),r=B.f(s),q=r.h("a8<h.E>")
return new B.a8(v,t,u.h("a8<h.E>")).mm(0,new B.c3(new B.a8(s,r.h("v(h.E)").a(new A.pU(w)),q),q.h("h<aL>(h.E)").a(new A.pV()),q.h("c3<h.E,aL>")))},
J(d,e){var w,v,u,t=this.dt(e)
if(t==null)return null
w=t.b
v=w.k(0,e)
if(v==null)return null
u=v.b
if(u!=null&&!(u instanceof A.ff))return v
w.J(0,e)
return v},
i(d){var w,v,u,t,s,r,q=this,p="ProviderPointerManager#"+A.dP(q)+"(\n"+("  container: "+q.a.i(0)+"\n")+("  orphanPointers: "+A.wS(q.b.i(0),2)+"\n")+"  familyPointers: {"
for(w=q.c,v=w.gd7(),v=v.gt(v),u=x.s;v.n();p=t){t=v.gq()
s=B.m(t.a)
t=t.b.i(0)
r=C.a.af("  ",2)
t=p+("\n    "+s+": "+C.b.T(B.a(t.split("\n"),u),"\n"+r)+",")}p=(w.a!==0?p+"\n  }\n":p+"}\n")+")"
return p.charCodeAt(0)==0?p:p}}
A.aE.prototype={
jB(d,e,f,g,h){var w,v,u,t,s,r=this,q=g==null,p=!q
if(p)if(g.Q)throw B.d(B.aX("Cannot create a ProviderContainer that has a disposed parent"))
w=B.eX(x.X)
for(v=f.length,u=x._,t=0;t<f.length;f.length===v||(0,B.P)(f),++t){s=f[t]
if(u.b(s)){if(!w.m(0,s.gaR()))throw B.d(B.dR("Tried to override a provider twice within the same container: "+s.gaR().i(0)))
continue}if(s instanceof A.dy)if(!w.m(0,A.tp(s)))throw B.d(B.dR("Tried to override a family twice within the same container: "+B.m(A.tp(s))))}p=p?A.AN(g,f,r):A.wI(f,r,null,new A.aO(null,B.eQ(x.O,x.F),r))
r.y!==$&&B.cA()
r.y=p
if(!q)C.b.m(g.x,r)
for(q=r.z,p=q.length,v=x.D,u=x.H,t=0;t<q.length;q.length===p||(0,B.P)(q),++t)A.k1(r,q[t].glZ(),r,v,u)},
gbJ(){var w,v,u=this.d
if(u===$){w=x.kd
v=B.a([],w)
w=B.a([],w)
this.d!==$&&B.c1()
u=this.d=new A.kG(B.eX(x.bT),v,w)}return u},
ds(d,e){var w,v=this.im(e.h("bf<0>").a(d),new A.ph(e),e)
try{w=A.uK(v,e).gdI()
return w}finally{v.aq()}},
im(d,e,f){var w,v
f.h("bf<0>").a(d)
f.h("~(0?,0)").a(e)
w=A.Aj(this)
v=d.cM(new A.h0(this),e,null,w,!1)
A.xO(this,v,!1,f)
A.af(v,f).gad().hR(A.af(v,f))
return v},
hu(d,e){var w,v,u,t,s,r
for(w=this.x,v=w.length,u=0;u<w.length;w.length===v||(0,B.P)(w),++u){t=w[u]
s=t.y
s===$&&B.B()
s=s.dt(d)
r=s==null?null:s.b.k(0,d)
if(r!=null&&r!==e)continue
t.hu(d,e)}w=this.y
w===$&&B.B()
w.J(0,d)},
kg(d){var w,v=this.y
v===$&&B.B()
w=v.J(0,d)
if(w==null)return
this.hu(d,w)
v=w.c
if(v!=null)v.aI()
w.c=null},
nl(d){var w,v,u,t,s,r,q,p,o,n,m,l=this
x.gC.a(d)
if(l.Q)throw B.d(B.aX("Called updateOverrides on a ProviderContainer that was already disposed"))
for(w=d.length,v=x._,u=x.iR,t=x.O,s=x.H,r=0;r<d.length;d.length===w||(0,B.P)(d),++r){q=d[r]
A:{if(v.b(q)){p=l.y
p===$&&B.B()
o=q.gaR()
p=p.dt(o)
n=p==null?null:p.b.k(0,o)
p=n==null?null:n.b
new A.pi().$2(p,B.az(q))
n.b=q
m=n.c
if(m==null)continue
A.k1(l,u.a(m.giL()),A.xK(q),t,s)
break A}if(q instanceof A.dy){p=l.y
p===$&&B.B()
p.c.k(0,A.tp(q))}}}},
eu(d,e){var w
e.h("ab<0>").a(d)
if(this.Q)throw B.d(B.aX("Tried to read a provider from a ProviderContainer that was already disposed"))
w=this.y
w===$&&B.B()
w=w.iS(d).ip(d,w.a).c
w.toString
return e.h("w<0,i?>").a(w)},
fZ(d){var w,v,u,t,s,r=this
if(r.Q)return
r.Q=!0
for(w=r.x,v=w.length,u=0;u<w.length;w.length===v||(0,B.P)(w),++u)w[u].fZ(!1)
if(d){w=r.w
if(w!=null)C.b.J(w.x,r)}if(r.r==null){w=r.gbJ()
w.a=!0
v=w.e
if(v!=null)v.i0()
w.f=w.e=null
v=w.r
if(v!=null)v.$0()
w.r=null
w.x=w.w=!1}w=A.wd(r)
w=B.b3(w,w.$ti.h("h.E"))
v=B.O(w).h("c9<1>")
w=new B.c9(w,v)
w=new B.ai(w,w.gl(0),v.h("ai<S.E>"))
v=v.h("S.E")
while(w.n()){t=w.d;(t==null?v.a(t):t).aI()}for(w=r.z,v=w.length,t=x.D,s=x.H,u=0;u<w.length;w.length===v||(0,B.P)(w),++u)A.k1(r,w[u].gm2(),r,t,s)},
i(d){return"ProviderContainer#"+A.dP(this)+"()"}}
A.b6.prototype={
i(d){var w=B.a(["provider: "+this.a.i(0),"container: "+this.c.i(0)],x.s)
return"ProviderObserverContext("+C.b.T(w,", ")+")"}}
A.f3.prototype={
n2(d,e,f){B.aa(e)
x.l.a(f)},
m1(d){x.A.a(d)}}
A.ju.prototype={
i(d){var w=this.a,v=B.O(w)
return"CircularDependencyError: Circular dependency detected.\nThis happens when a provider somehow depends on itself.\n\nThe circular dependency chain is as follows:\n"+new B.U(w,v.h("c(1)").a(new A.n9()),v.h("U<1,c>")).bR(0)+"\n"}}
A.aP.prototype={}
A.b7.prototype={
av(){var w=this
if(!w.d){w.jx()
return}w.gad().is(w,A.dG.prototype.gmZ.call(w))},
a5(){var w=this
if(!w.d){w.jw()
return}w.gad().is(w,A.dG.prototype.glQ.call(w))},
bv(){var w=this
if(!w.d){w.jy()
return}w.gad().mT(w,A.dG.prototype.gn3.call(w))},
hj(d,e){var w=this,v=B.f(w),u=v.h("b7.0?")
u.a(d)
v=v.h("b7.0")
v.a(e)
if(w.xr$>0)return
A.k0(w.gad().c.d,w.ghb(),d,e,u,v)},
kH(d,e){var w
B.aa(d)
w=x.l
w.a(e)
if(this.xr$>0)return
A.k0(this.gad().c.d,this.gh0(),d,e,x.K,w)},
aq(){var w,v=this
if(v.b)return
w=v.a
if(w!=null)w.$0()
v.gad().n9(v,new A.pY(v))},
i(d){var w,v,u,t,s,r,q,p=this,o=p.gad(),n=B.f(o).h("ab<w.0>").a(o.c.a).i(0)
o=B.ay(B.f(p).h("b7.0")).i(0)
w=A.dP(p)
v=p.y1$
u=p.xr$
t=p.b
s=p.gaC().i(0)
p.gb0()
r=p.c
A:{if(p instanceof A.dk){q=A.wS(p.w.i(0),1)
break A}q=null
break A}return"ProviderSubscription<"+o+">#"+w+"(\n  active: "+(v===0)+",\n  pauseCount: "+u+",\n  closed: "+t+",\n  listened: "+n+",\n  listener: "+s+",\n  weak: false,\n  hasParent: "+(r!=null)+",\n  childSub: "+B.m(q)+"\n)"}}
A.e6.prototype={
fN(){return this.y.n5()},
gh0(){return this.w},
ghb(){return this.x},
gad(){return this.y},
gaC(){return this.z},
gb0(){return this.Q}}
A.dk.prototype={
gad(){return A.af(this.w,this.$ti.c).gad()},
gb0(){return!1},
gaC(){return A.af(this.w,this.$ti.c).gaC()},
av(){this.jo()
this.w.av()},
a5(){this.jn()
A.af(this.w,this.$ti.c).a5()},
bv(){this.jp()
A.af(this.w,this.$ti.c).bv()},
aq(){if(this.b)return
this.jm()
this.w.aq()},
fN(){return this.x.$0()},
gh0(){return this.z},
ghb(){return this.Q}}
A.dG.prototype={
av(){++this.xr$},
a5(){++this.y1$},
bv(){this.y1$=Math.max(this.y1$-1,0)}}
A.hB.prototype={
cM(d,e,f,g,h){var w,v,u,t,s,r,q=this,p=q.$ti
p.h("~(1?,1)").a(e)
x.f.a(g)
w=q.b
v=p.y[1]
u=d.a.eu(w,v)
t=w.cM(d,new A.pn(q),f,new A.po(),!1)
s=q.c.$1(u)
r=A.rg()
return r.b=A.A0(t,e,s.lA(new A.pp(q,r),f,g),g,new A.pq(q,d),v,p.c)},
I(d,e){if(e==null)return!1
return this.$ti.b(e)&&e.b.I(0,this.b)},
gE(d){return this.b.gE(0)},
$ic7:1,
$ibf:1}
A.lc.prototype={
i(d){return"Cannot use the Ref of "+this.a.i(0)+' after it has been disposed. This typically happens if:\n- A provider rebuilt, but the previous "build" was still pending and is still performing operations.\n  You should therefore either use `ref.onDispose` to cancel pending work, or\n  check `ref.mounted` after async gaps or anything that could invalidate the provider.\n- You tried to use Ref inside `onDispose` or other life-cycles.\n  This is not supported, as the provider is already being disposed.\n'},
$iaB:1}
A.c8.prototype={
ka(d){var w,v,u,t,s,r,q
A:{break A}w=this.z
v=B.f(w).h("ab<w.0>").a(w.c.a)
w.gbV()
v.geL()
u=new A.eZ(B.ae(A.Az(null),null,!1,x.dM),x.pj)
t=x.kC.a(u.geB(u))
w.Y(t)
for(w=x.k;!u.gH(0);){s=u.b
if(s===u.c)B.a0(B.cK());++u.d
r=u.a
if(!(s<r.length))return B.b(r,s)
q=r[s]
if(q==null)q=w.a(q)
C.b.j(r,s,null)
u.b=(u.b+1&u.a.length-1)>>>0
q.Y(t)
s=B.f(q).h("ab<w.0>").a(q.c.a)
if(s.I(0,d))throw B.d(new A.ju(this.jP(q,s)))}},
jP(d,e){var w=B.eX(x.k),v=B.a([e],x.f0)
d.Y(new A.q1(w,new A.q_(w,v,e)))
if(v.length!==0&&!C.b.ga2(v).I(0,e))C.b.m(v,e)
return v},
cV(){var w=this.z
if(!(!w.dy&&w.e===this))throw B.d(new A.lc(w.gaR()))},
fk(d,e){var w,v,u,t,s,r,q,p,o=this
e.h("bf<0>").a(d)
o.cV()
w=A.rg()
v=o.z
e.h("bf<0>").a(d)
u=e.h("~(0?,0)").a(new A.q2(o,e))
t=x.Y.a(v.gkz())
s=x.gs.a(new A.q3(o))
r=v.e
r.cV()
q=v.c.d
p=d.cM(new A.e5(v,q),u,t,s,!1)
A.xO(q,p,!1,e)
A.af(p,e).gad().hR(A.af(p,e))
r.ka(d)
w.b=p
return A.uK(w.cR(),e).gdI()},
skx(d){this.a=x.cO.a(d)},
skL(d){this.b=x.R.a(d)},
skQ(d){this.c=x.R.a(d)},
skJ(d){this.d=x.R.a(d)},
skI(d){this.e=x.R.a(d)},
skP(d){this.f=x.R.a(d)},
skN(d){this.r=x.R.a(d)}}
A.db.prototype={
skK(d){this.Q=this.$ti.h("n<~(1?,1)>?").a(d)},
skM(d){this.as=x.jI.a(d)}}
A.ec.prototype={
$0(){if(this.b)return
this.b=!0
this.a.$0()}}
A.lB.prototype={
fp(d){return A.l8(C.J,d.gdM()).gd3()},
fo(d){return A.l8(C.J,d.gdM()).gd3()},
$ifi:1}
A.kG.prototype={
l6(d){var w,v,u,t=this
if(t.a)return
w=t.f
if(w!=null){if(w.b)return
if(d&&!t.x){t.x=!0
if(!t.w){v=t.r
if(v!=null)v.$0()
t.r=t.hy(w,A.yf())
t.w=!0}}return}t.e=new B.bv(new B.z($.D,x.W),x.ou)
u=new A.ec(t.glh())
t.f=u
t.w=t.x=d
t.r=t.hy(u,d?A.yf():A.DK())},
hy(d,e){var w,v,u,t
x.c4.a(e)
w=this.b
if(w.a===0)return e.$2(D.aB,d)
v=B.a([],x.lp)
for(w=B.v_(w,w.r,B.f(w).c),u=w.$ti.c;w.n();){t=w.d
C.b.m(v,e.$2(t==null?u.a(t):t,d))}return new A.pW(v)},
li(){var w,v,u=this,t=u.r
u.r=null
u.x=u.w=!1
if(t!=null)t.$0()
w=u.f
v=u.e
if(w==null||v==null)return
v.i0()
u.kV()
u.kT()
C.b.a9(u.d)
C.b.a9(u.c)
u.e=u.f=null},
kV(){var w,v,u,t
this.y=B.eX(x.k)
for(w=this.d,v=0;v<w.length;++v){u=w[v]
t=u.y
t=t==null?null:t.length
if(t==null)t=0
if(t-u.f>0)u.bO()}this.y=null},
lS(d){var w
x.M.a(d)
w=this.a
if(w)return
A.w8(new A.pX(this,d),x.P)},
kT(){var w,v,u,t
for(w=this.c,v=0;v<w.length;++v){u=w[v]
t=!0
if(!u.c.d.Q){t=u.y
t=t==null?null:t.length
t=(t==null?0:t)>0}if(t)continue
if(u.z.length===0){t=u.c
t.d.kg(B.f(u).h("ab<w.0>").a(t.a))}else u.i_()}}}
A.bH.prototype={
d_(d,e){var w,v=this,u=B.f(v)
u.h("aN<bH.1>").a(d)
w=v.db
u=u.h("bH.1")
if(A.vO(d,u))return v.cG(d)
return v.cG(d.cJ(u).d5(w,e))},
cs(){this.fB()},
dj(){this.fC()},
ba(){this.d8$=null
this.bN$=null
this.fD()},
aI(){var w,v=this,u=v.aM$
if(u!=null){w=B.f(v)
A.o3(u.a,w.h("bH.1"))
u.aW(new B.bG("The provider "+w.h("ab<w.0>").a(v.c.a).i(0)+y.n),B.e8())}v.fA()},
az(d){x.q.a(d)
this.fE(d)
d.$1(this.y2$)}}
A.il.prototype={}
A.io.prototype={}
A.iV.prototype={}
A.iW.prototype={
gE(d){var w=B.i.prototype.gE.call(this,0)
return w}}
A.cy.prototype={
d_(d,e){var w,v=this,u=v.$ti
u.h("aN<cy.1>").a(d)
w=v.db
u=u.h("cy.1")
if(A.vO(d,u))return v.cG(d)
return v.cG(d.cJ(u).d5(w,e))},
cs(){this.fB()},
dj(){this.fC()},
ba(){this.d8$=null
this.bN$=null
this.fD()},
aI(){var w,v=this,u=v.aM$
if(u!=null){w=v.$ti
A.o3(u.a,w.h("cy.1"))
u.aW(new B.bG("The provider "+w.h("ab<w.0>").a(v.c.a).i(0)+y.n),B.e8())}v.fA()},
az(d){x.q.a(d)
this.fE(d)
d.$1(this.y2$)}}
A.bZ.prototype={}
A.hM.prototype={
bk(d){return this.k3.$1(d)},
gdh(){return new A.hB(this,new A.qu(this),this.$ti.h("hB<bZ<1>,1>"))},
c0(d){var w=null,v=this.$ti,u=v.h("aY<bZ<1>>?"),t=v.h("bb<bZ<1>>")
return new A.fu(new A.bb(B.ae(0,w,!1,u),t),new A.bb(B.ae(0,w,!1,u),t),v.h("d9<1,1,1>").a(d.a),new A.bb(B.ae(0,w,!1,v.h("aY<V<1>>?")),v.h("bb<V<1>>")),w,w,w,d,B.a([],x.G),A.jg(v.c),v.h("fu<1>"))}}
A.fu.prototype={
bk(d){var w=this,v=w.$ti,u=new A.bZ(new A.eY(v.h("eY<dF<1>>")),w.fx.bk(d),v.h("bZ<1>"))
w.bn.sdA(new A.av(u,v.h("av<bZ<1>>")))
w.cl=u.lz(new A.rS(w),!0)
return null},
ba(){var w,v,u=this
u.ju()
w=u.cl
if(w!=null)w.$0()
u.cl=null
w=u.bn
v=w.w
if(v!=null){v=v.a
if(v!=null)v.a.a9(0)}w.sdA(null)},
az(d){x.q.a(d)
this.jv(d)
d.$1(this.i6)
d.$1(this.bn)}}
A.iD.prototype={
gE(d){var w=B.i.prototype.gE.call(this,0)
return w}}
A.iU.prototype={}
A.j6.prototype={}
A.hz.prototype={
bk(d){return this.k3.$1(d)},
c0(d){var w=null,v=this.$ti
return new A.fE(v.h("d9<1,1,1>").a(d.a),new A.bb(B.ae(0,w,!1,v.h("aY<V<1>>?")),v.h("bb<V<1>>")),w,w,w,d,B.a([],x.G),A.jg(v.c),v.h("fE<1>"))}}
A.fE.prototype={
bk(d){this.bd(A.mH(this.fx.bk(d),this.$ti.c))
return null},
iQ(d,e){var w=this.$ti.c
return!J.Q(w.a(d),w.a(e))}}
A.hZ.prototype={}
A.ip.prototype={}
A.iq.prototype={
gE(d){var w=B.i.prototype.gE.call(this,0)
return w}}
A.qr.prototype={
gl(d){return this.c.length},
gmz(){return this.b.length},
jD(d,e){var w,v,u,t,s,r,q
for(w=this.c,v=w.length,u=this.b,t=0;t<v;++t){s=w[t]
if(s===13){r=t+1
if(r<v){if(!(r<v))return B.b(w,r)
q=w[r]!==10}else q=!0
if(q)s=10}if(s===10)C.b.m(u,t+1)}},
c1(d){var w,v=this
if(d<0)throw B.d(A.aQ("Offset may not be negative, was "+d+"."))
else if(d>v.c.length)throw B.d(A.aQ("Offset "+d+y.c+v.gl(0)+"."))
w=v.b
if(d<C.b.gau(w))return-1
if(d>=C.b.ga2(w))return w.length-1
if(v.kv(d)){w=v.d
w.toString
return w}return v.d=v.jO(d)-1},
kv(d){var w,v,u,t=this.d
if(t==null)return!1
w=this.b
v=w.length
if(t>>>0!==t||t>=v)return B.b(w,t)
if(d<w[t])return!1
if(!(t>=v-1)){u=t+1
if(!(u<v))return B.b(w,u)
u=d<w[u]}else u=!0
if(u)return!0
if(!(t>=v-2)){u=t+2
if(!(u<v))return B.b(w,u)
u=d<w[u]
w=u}else w=!0
if(w){this.d=t+1
return!0}return!1},
jO(d){var w,v,u=this.b,t=u.length,s=t-1
for(w=0;w<s;){v=w+C.d.aF(s-w,2)
if(!(v>=0&&v<t))return B.b(u,v)
if(u[v]>d)s=v
else w=v+1}return s},
dN(d){var w,v,u,t=this
if(d<0)throw B.d(A.aQ("Offset may not be negative, was "+d+"."))
else if(d>t.c.length)throw B.d(A.aQ("Offset "+d+" must be not be greater than the number of characters in the file, "+t.gl(0)+"."))
w=t.c1(d)
v=t.b
if(!(w>=0&&w<v.length))return B.b(v,w)
u=v[w]
if(u>d)throw B.d(A.aQ("Line "+w+" comes after offset "+d+"."))
return d-u},
cw(d){var w,v,u,t
if(d<0)throw B.d(A.aQ("Line may not be negative, was "+d+"."))
else{w=this.b
v=w.length
if(d>=v)throw B.d(A.aQ("Line "+d+" must be less than the number of lines in the file, "+this.gmz()+"."))}u=w[d]
if(u<=this.c.length){t=d+1
w=t<v&&u>=w[t]}else w=!0
if(w)throw B.d(A.aQ("Line "+d+" doesn't have 0 columns."))
return u}}
A.jK.prototype={
gL(){return this.a.a},
gN(){return this.a.c1(this.b)},
gU(){return this.a.dN(this.b)},
gW(){return this.b}}
A.fo.prototype={
gL(){return this.a.a},
gl(d){return this.c-this.b},
gF(){return A.uv(this.a,this.b)},
gD(){return A.uv(this.a,this.c)},
ga7(){return B.hP(C.Q.bD(this.a.c,this.b,this.c),0,null)},
gam(){var w=this,v=w.a,u=w.c,t=v.c1(u)
if(v.dN(u)===0&&t!==0){if(u-w.b===0)return t===v.b.length-1?"":B.hP(C.Q.bD(v.c,v.cw(t),v.cw(t+1)),0,null)}else u=t===v.b.length-1?v.c.length:v.cw(t+1)
return B.hP(C.Q.bD(v.c,v.cw(v.c1(w.b)),u),0,null)},
a4(d,e){var w
x.hs.a(e)
if(!(e instanceof A.fo))return this.jt(0,e)
w=C.d.a4(this.b,e.b)
return w===0?C.d.a4(this.c,e.c):w},
I(d,e){var w=this
if(e==null)return!1
if(!(e instanceof A.fo))return w.js(0,e)
return w.b===e.b&&w.c===e.c&&J.Q(w.a.a,e.a.a)},
gE(d){return B.bY(this.b,this.c,this.a.a,C.c,C.c,C.c,C.c,C.c,C.c,C.c)},
$icQ:1}
A.op.prototype={
mq(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0=e.a
e.hO(C.b.gau(a0).c)
w=e.e
v=B.ae(w,d,!1,x.dd)
for(u=e.r,w=w!==0,t=e.b,s=0;s<a0.length;++s){r=a0[s]
if(s>0){q=a0[s-1]
p=r.c
if(!J.Q(q.c,p)){e.cX("\u2575")
u.a+="\n"
e.hO(p)}else if(q.b+1!==r.b){e.lv("...")
u.a+="\n"}}for(p=r.d,o=B.O(p).h("c9<1>"),n=new B.c9(p,o),n=new B.ai(n,n.gl(0),o.h("ai<S.E>")),o=o.h("S.E"),m=r.b,l=r.a;n.n();){k=n.d
if(k==null)k=o.a(k)
j=k.a
if(j.gF().gN()!==j.gD().gN()&&j.gF().gN()===m&&e.kw(C.a.p(l,0,j.gF().gU()))){i=C.b.aJ(v,d)
if(i<0)B.a0(B.a5(B.m(v)+" contains no null elements.",d))
C.b.j(v,i,k)}}e.lu(m)
u.a+=" "
e.lt(r,v)
if(w)u.a+=" "
h=C.b.ms(p,new A.oK())
if(h===-1)g=d
else{if(!(h>=0&&h<p.length))return B.b(p,h)
g=p[h]}o=g!=null
if(o){n=g.a
k=n.gF().gN()===m?n.gF().gU():0
e.lr(l,k,n.gD().gN()===m?n.gD().gU():l.length,t)}else e.cZ(l)
u.a+="\n"
if(o)e.ls(r,g,v)
for(p=p.length,f=0;f<p;++f)continue}e.cX("\u2575")
a0=u.a
return a0.charCodeAt(0)==0?a0:a0},
hO(d){var w,v,u=this
if(!u.f||!x.jJ.b(d))u.cX("\u2577")
else{u.cX("\u250c")
u.ao(new A.ox(u),"\x1b[34m",x.H)
w=u.r
v=" "+$.mz().f8(d)
w.a+=v}u.r.a+="\n"},
cW(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i={}
x.eU.a(e)
i.a=!1
i.b=null
w=f==null
if(w)v=null
else v=j.b
for(u=e.length,t=x.P,s=j.b,w=!w,r=j.r,q=x.H,p=!1,o=0;o<u;++o){n=e[o]
m=n==null
l=m?null:n.a.gF().gN()
k=m?null:n.a.gD().gN()
if(w&&n===f){j.ao(new A.oE(j,l,d),v,t)
p=!0}else if(p)j.ao(new A.oF(j,n),v,t)
else if(m)if(i.a)j.ao(new A.oG(j),i.b,q)
else r.a+=" "
else j.ao(new A.oH(i,j,f,l,d,n,k),s,t)}},
lt(d,e){return this.cW(d,e,null)},
lr(d,e,f,g){var w=this
w.cZ(C.a.p(d,0,e))
w.ao(new A.oy(w,d,e,f),g,x.H)
w.cZ(C.a.p(d,f,d.length))},
ls(d,e,f){var w,v,u,t=this
x.eU.a(f)
w=t.b
v=e.a
if(v.gF().gN()===v.gD().gN()){t.ez()
v=t.r
v.a+=" "
t.cW(d,f,e)
if(f.length!==0)v.a+=" "
t.hP(e,f,t.ao(new A.oz(t,d,e),w,x.S))}else{u=d.b
if(v.gF().gN()===u){if(C.b.B(f,e))return
A.E9(f,e,x.C)
t.ez()
v=t.r
v.a+=" "
t.cW(d,f,e)
t.ao(new A.oA(t,d,e),w,x.H)
v.a+="\n"}else if(v.gD().gN()===u){v=v.gD().gU()
if(v===d.a.length){A.ys(f,e,x.C)
return}t.ez()
t.r.a+=" "
t.cW(d,f,e)
t.hP(e,f,t.ao(new A.oB(t,!1,d,e),w,x.S))
A.ys(f,e,x.C)}}},
hN(d,e,f){var w=f?0:1,v=this.r
w=C.a.af("\u2500",1+e+this.ec(C.a.p(d.a,0,e+w))*3)
v.a=(v.a+=w)+"^"},
lq(d,e){return this.hN(d,e,!0)},
hP(d,e,f){x.eU.a(e)
this.r.a+="\n"
return},
cZ(d){var w,v,u,t
for(w=new B.cl(d),v=x.V,w=new B.ai(w,w.gl(0),v.h("ai<C.E>")),u=this.r,v=v.h("C.E");w.n();){t=w.d
if(t==null)t=v.a(t)
if(t===9)u.a+=C.a.af(" ",4)
else{t=B.be(t)
u.a+=t}}},
cY(d,e,f){var w={}
w.a=f
if(e!=null)w.a=C.d.i(e+1)
this.ao(new A.oI(w,this,d),"\x1b[34m",x.P)},
cX(d){return this.cY(d,null,null)},
lv(d){return this.cY(null,null,d)},
lu(d){return this.cY(null,d,null)},
ez(){return this.cY(null,null,null)},
ec(d){var w,v,u,t
for(w=new B.cl(d),v=x.V,w=new B.ai(w,w.gl(0),v.h("ai<C.E>")),v=v.h("C.E"),u=0;w.n();){t=w.d
if((t==null?v.a(t):t)===9)++u}return u},
kw(d){var w,v,u
for(w=new B.cl(d),v=x.V,w=new B.ai(w,w.gl(0),v.h("ai<C.E>")),v=v.h("C.E");w.n();){u=w.d
if(u==null)u=v.a(u)
if(u!==32&&u!==9)return!1}return!0},
ao(d,e,f){var w,v
f.h("0()").a(d)
w=this.b!=null
if(w&&e!=null)this.r.a+=e
v=d.$0()
if(w&&e!=null)this.r.a+="\x1b[0m"
return v}}
A.aS.prototype={
i(d){var w=this.a
w="primary "+(""+w.gF().gN()+":"+w.gF().gU()+"-"+w.gD().gN()+":"+w.gD().gU())
return w.charCodeAt(0)==0?w:w}}
A.bK.prototype={
i(d){return""+this.b+': "'+this.a+'" ('+C.b.T(this.d,", ")+")"}}
A.cb.prototype={
eN(d){var w=this.a
if(!J.Q(w,d.gL()))throw B.d(B.a5('Source URLs "'+B.m(w)+'" and "'+B.m(d.gL())+"\" don't match.",null))
return Math.abs(this.b-d.gW())},
a4(d,e){var w
x.e.a(e)
w=this.a
if(!J.Q(w,e.gL()))throw B.d(B.a5('Source URLs "'+B.m(w)+'" and "'+B.m(e.gL())+"\" don't match.",null))
return this.b-e.gW()},
I(d,e){if(e==null)return!1
return x.e.b(e)&&J.Q(this.a,e.gL())&&this.b===e.gW()},
gE(d){var w=this.a
w=w==null?null:w.gE(w)
if(w==null)w=0
return w+this.b},
i(d){var w=this,v=B.az(w).i(0),u=w.a
return"<"+v+": "+w.b+" "+(B.m(u==null?"unknown source":u)+":"+(w.c+1)+":"+(w.d+1))+">"},
$iar:1,
gL(){return this.a},
gW(){return this.b},
gN(){return this.c},
gU(){return this.d}}
A.kS.prototype={
eN(d){if(!J.Q(this.a.a,d.gL()))throw B.d(B.a5('Source URLs "'+B.m(this.gL())+'" and "'+B.m(d.gL())+"\" don't match.",null))
return Math.abs(this.b-d.gW())},
a4(d,e){x.e.a(e)
if(!J.Q(this.a.a,e.gL()))throw B.d(B.a5('Source URLs "'+B.m(this.gL())+'" and "'+B.m(e.gL())+"\" don't match.",null))
return this.b-e.gW()},
I(d,e){if(e==null)return!1
return x.e.b(e)&&J.Q(this.a.a,e.gL())&&this.b===e.gW()},
gE(d){var w=this.a.a
w=w==null?null:w.gE(w)
if(w==null)w=0
return w+this.b},
i(d){var w=B.az(this).i(0),v=this.b,u=this.a,t=u.a
return"<"+w+": "+v+" "+(B.m(t==null?"unknown source":t)+":"+(u.c1(v)+1)+":"+(u.dN(v)+1))+">"},
$iar:1,
$icb:1}
A.kT.prototype={
jE(d,e,f){var w,v=this.b,u=this.a
if(!J.Q(v.gL(),u.gL()))throw B.d(B.a5('Source URLs "'+B.m(u.gL())+'" and  "'+B.m(v.gL())+"\" don't match.",null))
else if(v.gW()<u.gW())throw B.d(B.a5("End "+v.i(0)+" must come after start "+u.i(0)+".",null))
else{w=this.c
if(w.length!==u.eN(v))throw B.d(B.a5('Text "'+w+'" must be '+u.eN(v)+" characters long.",null))}},
gF(){return this.a},
gD(){return this.b},
ga7(){return this.c}}
A.kU.prototype={
gf1(){return this.a},
i(d){var w,v,u,t=this.b,s="line "+(t.gF().gN()+1)+", column "+(t.gF().gU()+1)
if(t.gL()!=null){w=t.gL()
v=$.mz()
w.toString
w=s+(" of "+v.f8(w))
s=w}s+=": "+this.a
u=t.mr(null)
t=u.length!==0?s+"\n"+u:s
return"Error on "+(t.charCodeAt(0)==0?t:t)},
$iaB:1}
A.fb.prototype={
gW(){var w=this.b
w=A.uv(w.a,w.b)
return w.b},
$ibt:1,
gaC(){return this.c}}
A.fc.prototype={
gL(){return this.gF().gL()},
gl(d){return this.gD().gW()-this.gF().gW()},
a4(d,e){var w
x.hs.a(e)
w=this.gF().a4(0,e.gF())
return w===0?this.gD().a4(0,e.gD()):w},
mr(d){var w=this
if(!x.ol.b(w)&&w.gl(w)===0)return""
return A.Ad(w,d).mq()},
I(d,e){if(e==null)return!1
return e instanceof A.fc&&this.gF().I(0,e.gF())&&this.gD().I(0,e.gD())},
gE(d){return B.bY(this.gF(),this.gD(),C.c,C.c,C.c,C.c,C.c,C.c,C.c,C.c)},
i(d){var w=this
return"<"+B.az(w).i(0)+": from "+w.gF().i(0)+" to "+w.gD().i(0)+' "'+w.ga7()+'">'},
$iar:1,
$ics:1}
A.cQ.prototype={
gam(){return this.d}}
A.dg.prototype={
iI(){var w=this.a,v=B.O(w)
return A.uU(new B.c3(w,v.h("h<Z>(1)").a(new A.n8()),v.h("c3<1,Z>")),null)},
i(d){var w=this.a,v=B.O(w)
return new B.U(w,v.h("c(1)").a(new A.n6(new B.U(w,v.h("e(1)").a(new A.n7()),v.h("U<1,e>")).b6(0,0,D.G,x.S))),v.h("U<1,c>")).T(0,y.a)},
$iW:1}
A.Z.prototype={
gf0(){var w=this.a
if(w.ga8()==="data")return"data:..."
return $.mz().f8(w)},
gfm(){var w=this.a
if(w.ga8()!=="package")return null
return C.b.gau(w.gX().split("/"))},
gbT(){var w,v=this,u=v.b
if(u==null)return v.gf0()
w=v.c
if(w==null)return v.gf0()+" "+B.m(u)
return v.gf0()+" "+B.m(u)+":"+B.m(w)},
i(d){return this.gbT()+" in "+B.m(this.d)},
gby(){return this.a},
gN(){return this.b},
gU(){return this.c},
gdg(){return this.d}}
A.kg.prototype={
ghE(){var w,v=this,u=v.b
if(u===$){w=v.a.$0()
v.b!==$&&B.c1()
v.b=w
u=w}return u},
gbP(){return this.ghE().gbP()},
i(d){return this.ghE().i(0)},
$iW:1,
$ial:1}
A.al.prototype={
i(d){var w=this.a,v=B.O(w)
return new B.U(w,v.h("c(1)").a(new A.qN(new B.U(w,v.h("e(1)").a(new A.qO()),v.h("U<1,e>")).b6(0,0,D.G,x.S))),v.h("U<1,c>")).bR(0)},
$iW:1,
gbP(){return this.a}}
A.cw.prototype={
i(d){return this.w},
$iZ:1,
gby(){return this.a},
gN(){return null},
gU(){return null},
gfm(){return null},
gbT(){return"unparsed"},
gdg(){return this.w}}
A.lj.prototype={
i(d){var w,v,u={}
u.a=1
w=this.a
v=B.O(w)
return new B.U(w,v.h("c(1)").a(new A.qZ(u)),v.h("U<1,c>")).bR(0)},
$iW:1}
A.kW.prototype={
i(d){var w,v,u,t,s,r,q=new B.as("")
for(w=this.a,v=this.b,u=0;u<w.length;++u){t=w[u]
if(!(u<v.length))return B.b(v,u)
s=v[u]
r=B.m(t)+"\n"
q.a+=r
r=B.m(s)+"\n"
q.a+=r}return"At least listener of the StateNotifier "+this.c.i(0)+" threw an exception\nwhen the notifier tried to update its state.\n\nThe exceptions thrown are:\n\n"+q.i(0)+"\n"}}
A.fd.prototype={
gdT(){return this.f},
sdT(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.$ti,k=l.c
k.a(d)
r=m.f
m.f=d
if(k.a(r)===d)return
w=B.a([],x.hf)
v=B.a([],x.cu)
for(k=m.a,k=A.BC(k,k.$ti.c),q=x.l,l=l.h("~(1)"),p=k.$ti.c;k.n();){o=k.c
u=o==null?p.a(o):o
try{l.a(u.d).$1(d)}catch(n){t=B.G(n)
s=B.a_(n)
J.cC(w,t)
J.cC(v,s)
B.dM(B.aa(t),q.a(s))}}if(J.aM(w)!==0)throw B.d(new A.kW(w,v,m))},
lz(d,e){var w,v,u,t,s,r=this.$ti
r.h("~(1)").a(d)
w=new A.dF(d,r.h("dF<1>"))
r=this.a
t=r.$ti.c.a(w)
r.kt(r.c,t,!1)
try{d.$1(A.fd.prototype.gdT.call(this))}catch(s){v=B.G(s)
u=B.a_(s)
r=w
t=r.a
t.toString
t.hG(r.$ti.h("cp.E").a(r))
throw s}finally{}return new A.qt(w)}}
A.dF.prototype={}
A.l0.prototype={
gaC(){return B.r(this.c)}}
A.qz.prototype={
gf_(){var w=this
if(w.c!==w.e)w.d=null
return w.d},
dQ(d){var w,v=this,u=v.d=J.vK(d,v.b,v.c)
v.e=v.c
w=u!=null
if(w)v.e=v.c=u.gD()
return w},
i5(d,e){var w
if(this.dQ(d))return
if(e==null)if(d instanceof B.cL)e="/"+d.a+"/"
else{w=J.bR(d)
w=B.bh(w,"\\","\\\\")
e='"'+B.bh(w,'"','\\"')+'"'}this.h2(e)},
ck(d){return this.i5(d,null)},
mb(){if(this.c===this.b.length)return
this.h2("no more input")},
ma(d,e,f){var w,v,u,t,s,r,q=this.b
if(f<0)B.a0(A.aQ("position must be greater than or equal to 0."))
else if(f>q.length)B.a0(A.aQ("position must be less than or equal to the string length."))
w=f+e>q.length
if(w)B.a0(A.aQ("position plus length must not go beyond the end of the string."))
w=this.a
v=new B.cl(q)
u=B.a([0],x.lC)
t=new Uint32Array(B.v7(v.dF(v)))
s=new A.qr(w,u,t)
s.jD(v,w)
r=f+e
if(r>t.length)B.a0(A.aQ("End "+r+y.c+s.gl(0)+"."))
else if(f<0)B.a0(A.aQ("Start may not be negative, was "+f+"."))
throw B.d(new A.l0(q,d,new A.fo(s,f,r)))},
h2(d){this.ma("expected "+d+".",0,this.c)}}
A.pZ.prototype={
iV(){var w=this.km()
if(w.length!==16)throw B.d(B.w4("The length of the Uint8list returned by the custom RNG must be 16."))
else return w}}
A.nA.prototype={
km(){var w,v,u,t,s=new Uint8Array(16)
for(w=0;w<16;w+=4){v=$.yy().mJ(C.u.dE(Math.pow(2,32)))
if(!(w<16))return B.b(s,w)
s[w]=v
u=w+1
t=C.d.b3(v,8)
if(!(u<16))return B.b(s,u)
s[u]=t
t=w+2
u=C.d.b3(v,16)
if(!(t<16))return B.b(s,t)
s[t]=u
u=w+3
t=C.d.b3(v,24)
if(!(u<16))return B.b(s,u)
s[u]=t}return s}}
A.qX.prototype={
dH(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
if(null==null)w=f
else w=f
if(w==null)w=$.yQ().iV()
f=w.length
if(6>=f)return B.b(w,6)
v=w[6]
w.$flags&2&&B.at(w)
w[6]=v&15|64
if(8>=f)return B.b(w,8)
w[8]=w[8]&63|128
if(f<16)B.a0(A.aQ("buffer too small: need 16: length="+f))
v=$.yP()
u=w[0]
if(!(u<256))return B.b(v,u)
u=v[u]
t=w[1]
if(!(t<256))return B.b(v,t)
t=v[t]
s=w[2]
if(!(s<256))return B.b(v,s)
s=v[s]
r=w[3]
if(!(r<256))return B.b(v,r)
r=v[r]
q=w[4]
if(!(q<256))return B.b(v,q)
q=v[q]
p=w[5]
if(!(p<256))return B.b(v,p)
p=v[p]
o=w[6]
if(!(o<256))return B.b(v,o)
o=v[o]
n=w[7]
if(!(n<256))return B.b(v,n)
n=v[n]
m=w[8]
if(!(m<256))return B.b(v,m)
m=v[m]
if(9>=f)return B.b(w,9)
l=w[9]
if(!(l<256))return B.b(v,l)
l=v[l]
if(10>=f)return B.b(w,10)
k=w[10]
if(!(k<256))return B.b(v,k)
k=v[k]
if(11>=f)return B.b(w,11)
j=w[11]
if(!(j<256))return B.b(v,j)
j=v[j]
if(12>=f)return B.b(w,12)
i=w[12]
if(!(i<256))return B.b(v,i)
i=v[i]
if(13>=f)return B.b(w,13)
h=w[13]
if(!(h<256))return B.b(v,h)
h=v[h]
if(14>=f)return B.b(w,14)
g=w[14]
if(!(g<256))return B.b(v,g)
g=v[g]
if(15>=f)return B.b(w,15)
f=w[15]
if(!(f<256))return B.b(v,f)
return u+t+s+r+"-"+q+p+"-"+o+n+"-"+m+l+"-"+k+j+i+h+g+v[f]}}
var z=a.updateTypes(["~()","~(w<@,@>)","~(bb<@>)","~(i?)","Z()","Z(c)","~(i,W)","c(Z)","v(i?{seamless:v})","v(aS)","d7(a3)","V<ak>(ak)","ak/(c?)","T(ak)","~(aE)","~(b6)","~(aP<@>)","al(c)","e(Z)","~()?(fi,ec)","~(b6,i?)","v(Z)","V<f6>(na)","f1()","e(ck,ck)","~(b6,i?,i?)","v(a9)","de(a3,bu)","c?(c?,ds)","0&(a3,bu)","v(aP<@>)","v(b7<i?>)","~(h<aP<i?>>)","v(R<aD<i?>,aL>)","aL(aE)","aL({override:aD<i?>?})","v(R<cH,aO>)","R<cH,aO>(R<cH,aO>)","h<aE>(bl)","aE(aE?,aE)","v(aL)","v(aO)","h<aL>(aO)","~(bk?,l9)","~(b6,i,W)","c(aD<i?>)","~(i?,i?)","dl(a3,bu)","e(bK)","v?(c8)","i(bK)","i(aS)","e(aS,aS)","n<bK>(R<i,n<aS>>)","cQ()","n<Z>(al)","e(al)","T(a3,bu)","c(al)","v(w<@,@>)","c(c8)","Z(c,c)","al()","v(i?)","0^(0^,0^)<ba>","c(c)","E<c,~(N)>({onChange:~(0^)?,onClick:~()?,onInput:~(0^)?})<i?>","ak/(a3,ak,f8,f9{extra:i?,redirectHistory:n<ak>?})","b1?(e,i{maxDelay:b1,maxRetries:e,minDelay:b1})","ak(~)","v(qd)","0&(c8)"])
A.ub.prototype={
$0(){return B.h9(null,x.H)},
$S:20}
A.tc.prototype={
$0(){var w,v=this.a,u=v.a
u===$&&B.B()
w=u.b
if((w&1)!==0?(u.gcb().e&4)!==0:(w&2)===0){v.b=!0
return}v=v.c!=null?2:0
this.b.$2(v,null)},
$S:0}
A.td.prototype={
$1(d){var w=this.a.c!=null?2:0
this.b.$2(w,null)},
$S:3}
A.r7.prototype={
$0(){B.d8(new A.r8(this.a))},
$S:1}
A.r8.prototype={
$0(){this.a.$2(0,null)},
$S:0}
A.r9.prototype={
$0(){this.a.$0()},
$S:0}
A.ra.prototype={
$0(){var w=this.a
if(w.b){w.b=!1
this.b.$0()}},
$S:0}
A.rb.prototype={
$0(){var w=this.a,v=w.a
v===$&&B.B()
if((v.b&4)===0){w.c=new B.z($.D,x.j_)
if(w.b){w.b=!1
B.d8(new A.r6(this.b))}return w.c}},
$S:45}
A.r6.prototype={
$0(){this.a.$2(2,null)},
$S:0}
A.o9.prototype={
$0(){var w,v,u,t,s,r,q=null
try{q=this.a.$0()}catch(u){w=B.G(u)
v=B.a_(u)
t=w
s=v
r=B.mc(t,s)
t=new B.ac(t,s)
this.b.a1(t)
return}this.b.bF(q)},
$S:0}
A.o8.prototype={
$0(){var w,v,u,t,s,r,q=null
try{q=this.a.$0()}catch(u){w=B.G(u)
v=B.a_(u)
t=w
s=v
r=B.mc(t,s)
t=new B.ac(t,s)
this.b.a1(t)
return}this.b.bF(q)},
$S:0}
A.o7.prototype={
$0(){var w,v,u,t,s,r,q=this,p=q.a
if(p==null){q.c.a(null)
q.b.bF(null)}else{w=null
try{w=p.$0()}catch(t){v=B.G(t)
u=B.a_(t)
p=v
s=u
r=B.mc(p,s)
p=new B.ac(p,s)
q.b.a1(p)
return}q.b.bF(w)}},
$S:0}
A.o6.prototype={
$1(d){var w,v,u,t,s,r,q,p=this
if(d===0){w=B.a([],p.c.h("x<0>"))
for(v=p.b,u=v.length,t=0;t<v.length;v.length===u||(0,B.P)(v),++t){s=v[t]
r=s.b
if(r==null)s.$ti.c.a(r)
w.push(r)}p.a.aH(w)}else{w=B.a([],x.b9)
for(v=p.b,u=v.length,t=0;t<v.length;v.length===u||(0,B.P)(v),++t)w.push(v[t].c)
u=p.c
r=B.a([],u.h("x<0?>"))
for(q=v.length,t=0;t<v.length;v.length===q||(0,B.P)(v),++t)r.push(v[t].b)
p.a.d4(new A.hw(C.b.mk(w,A.Di()),d,u.h("hw<n<0?>,n<ac?>>")))}},
$S:21}
A.rn.prototype={
$1(d){var w=this.a
w.b=w.$ti.c.a(d)
this.b.$1(0)},
$S(){return this.a.$ti.h("T(1)")}}
A.ro.prototype={
$2(d,e){B.aa(d)
x.l.a(e)
this.a.c=new B.ac(d,e)
this.b.$1(1)},
$S:9}
A.rm.prototype={
$1(d){var w=this.a,v=w.a+=d
if(++w.b===this.b.length)this.c.$1(v)},
$S:21}
A.rU.prototype={
$0(){A.vd(this.a.d)},
$S:0}
A.rT.prototype={
$0(){var w=this.a.c
if(w!=null&&(w.a&30)===0)w.bf(null)},
$S:0}
A.r1.prototype={
$2(d,e){var w=this.a
w.e0(B.aa(d),x.l.a(e))
w.fR()},
$S:9}
A.r0.prototype={
$0(){this.a.a.bf(null)},
$S:1}
A.rd.prototype={
$0(){var w,v,u,t=this.a,s=t.e
if((s&8)!==0&&(s&16)===0)return
t.e=(s|64)>>>0
w=t.b
s=this.b
v=x.K
u=t.d
if(x.f.b(w))u.nh(w,s,this.c,v,x.l)
else u.fc(x.i6.a(w),s,v)
t.e=(t.e&4294967231)>>>0},
$S:0}
A.rc.prototype={
$0(){var w=this.a,v=w.e
if((v&16)===0)return
w.e=(v|74)>>>0
w.d.fa(w.c)
w.e=(w.e&4294967231)>>>0},
$S:0}
A.rO.prototype={
$0(){var w,v,u,t=this.a,s=t.a
t.a=0
if(s===3)return
w=t.$ti.h("eh<1>").a(this.b)
v=t.b
u=v.gcr()
t.b=u
if(u==null)t.c=null
v.f6(w)},
$S:0}
A.nE.prototype={
$0(){var w=this
return B.a0(B.a5("("+w.a+", "+w.b+", "+w.c+", "+w.d+", "+w.e+", "+w.f+", "+w.r+", "+w.w+")",null))},
$S:47}
A.u3.prototype={
$1(d){var w,v,u,t
if(A.xV(d))return d
w=this.a
if(w.P(d))return w.k(0,d)
if(x.av.b(d)){v={}
w.j(0,d,v)
for(w=d.gaa(),w=w.gt(w);w.n();){u=w.gq()
v[u]=this.$1(d.k(0,u))}return v}else if(x.e7.b(d)){t=[]
w.j(0,d,t)
C.b.v(t,J.zz(d,this,x.z))
return t}else return d},
$S:73}
A.ud.prototype={
$1(d){return this.a.aH(this.b.h("0/?").a(d))},
$S:8}
A.ue.prototype={
$1(d){if(d==null)return this.a.d4(new A.kr(d===undefined))
return this.a.d4(d)},
$S:8}
A.mY.prototype={
$2(d,e){var w=this.a,v=w.$ti
v.h("a1.K").a(d)
v.h("a1.V").a(e)
w.j(0,d,e)
return e},
$S(){return this.a.$ti.h("~(a1.K,a1.V)")}}
A.mZ.prototype={
$2(d,e){var w=this.a.$ti
w.h("a1.C").a(d)
w.h("R<a1.K,a1.V>").a(e)
return this.b.$2(e.a,e.b)},
$S(){return this.a.$ti.h("~(a1.C,R<a1.K,a1.V>)")}}
A.n_.prototype={
$1(d){return this.a.$ti.h("R<a1.K,a1.V>").a(d).a},
$S(){return this.a.$ti.h("a1.K(R<a1.K,a1.V>)")}}
A.mF.prototype={
$2(d,e){return D.aM},
$S:z+47}
A.mG.prototype={
$2(d,e){return D.ai},
$S:z+27}
A.mV.prototype={
$1(d){var w
B.o(d)
w=this.a.d
return w==null?null:w.$0()},
$S:2}
A.ny.prototype={
$1(d){B.o(d)
A.wo(!1,this.a)
return},
$S:2}
A.nz.prototype={
$1(d){B.o(d)
A.wo(!0,this.a)
return},
$S:2}
A.oo.prototype={
$1(d){var w=this.a
if(w.e&&B.ax(B.o(b.G.window).innerWidth)>1000)w.a0(new A.on(w))},
$S:2}
A.on.prototype={
$0(){this.a.e=!1},
$S:0}
A.oi.prototype={
$0(){},
$S:0}
A.og.prototype={
$0(){var w=this.a
if(w.e)w.a0(new A.oh(w))},
$S:0}
A.oh.prototype={
$0(){this.a.e=!1},
$S:0}
A.om.prototype={
$1(d){var w=b.G,v=B.J(B.o(w.document).querySelector(d))
if(v==null)v=B.o(v)
B.o(w.window).scrollTo({behavior:"smooth",top:B.ax(v.offsetTop)})
this.a.$0()},
$S:6}
A.oj.prototype={
$1(d){B.o(d)
this.a.$1(this.b.b)
this.c.$0()},
$S:2}
A.ok.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j="px"
x.r.a(d)
w=x.N
v=A.bF(d,$.bi(),w)
u=A.q(D.r,k,k,k,k,D.A,D.e,k,k,k,k,k,k,k,k,k,k,k,new A.aI(k,new A.k(j,8)),k,k,k,k,k,k,k,k)
t=x.i
u=A.j(B.a([A.aA(k,k,k,A.wc(v),A.q(k,k,k,k,k,k,k,k,k,k,k,k,k,new A.k(j,25),k,k,k,k,k,k,k,k,k,k,k,new A.k(j,35),k),k)],t),"custom-select-display",k,k,u)
s=A.q(k,k,k,k,k,D.A,k,k,k,k,k,k,k,new A.k(j,30),k,k,k,0,k,new A.lT("absolute"),k,k,k,k,k,new A.k(j,50),new A.m7("1"))
r=B.a6(["change",new A.of(d)],w,x.v)
q=B.a([],t)
for(p=new B.b2($.oY,B.f($.oY).h("b2<1,2>")).gt(0);p.n();){o=p.d
o.toString
n=A.q(D.r,k,k,k,D.j,k,D.e,k,k,k,k,k,k,k,k,k,k,k,new A.aI(new A.k(j,2),new A.k(j,1)),k,k,k,k,k,k,k,k)
m=B.A(w,w)
l=o.a
m.j(0,"value",l)
if(l===v)m.j(0,"selected","")
q.push(new A.mt(n,m,B.a([new A.j3(k,k,k,A.wc(l),k,A.q(k,k,k,k,k,k,k,k,k,k,k,k,k,new A.k(j,15),k,new A.er(k,k,new A.k(j,12),k),k,k,k,k,k,k,k,k,k,new A.k(j,20),k),k),new A.j5(A.q(k,k,k,k,k,k,k,new A.lL(1),k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k,k),B.a([new B.t(o.b,k)],t),k)],t),k))}return A.j(B.a([u,new A.mw(s,r,q,k)],t),"language-header",k,k,k)},
$S:z+10}
A.of.prototype={
$1(d){var w=d.gbw().gR(),v=this.a,u=$.bi().gdh(),t=A.hC(v,!1)
u=x.b.a(A.aW.prototype.gu.call(t)).d.ds(u,x.kP)
u.cH(u.$ti.c.a(w))
A.wn(w,v)},
$S:8}
A.ol.prototype={
$0(){var w=this.a
w.a0(new A.oe(w))},
$S:0}
A.oe.prototype={
$0(){var w=this.a
w.e=!w.e},
$S:0}
A.n1.prototype={
$0(){var w=this.a
return w.a0(new A.n0(w))},
$S:0}
A.n0.prototype={
$0(){var w=this.a
return w.d=!w.d},
$S:0}
A.n2.prototype={
$1(d){var w,v,u=null,t=A.bF(x.r.a(d),$.bi(),x.N),s=A.q(u,u,u,u,u,u,D.e,u,D.q,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u),r=A.q(u,u,u,u,D.T,u,u,u,u,u,new A.k("px",18),D.o,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u),q=x.i
r=A.j(B.a([new B.t(this.a,u)],q),u,u,u,r)
w=A.q(u,u,u,u,u,u,D.e,u,D.t,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u)
v=A.q(u,u,u,u,D.l,u,u,u,u,u,new A.k("px",20),D.o,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u)
return A.j(B.a([r,new A.a2(20,u,u),A.j(B.a([A.j(B.a([new B.t(A.l("case_studies_learn_more",t),u)],q),u,u,u,v),new A.a2(u,15,u),A.aA(u,u,25,"images/learn_more_blue_icon.svg",u,25)],q),u,u,u,w),new A.a2(20,u,u)],q),u,u,u,s)},
$S:z+10}
A.np.prototype={
$0(){var w=this.a
w.w=!0
w.x=null},
$S:0}
A.nq.prototype={
$0(){var w=this.a
w.r=w.f=w.e=w.d=""
w.w=!1
w.x="B\u1ea1n \u0111\xe3 g\u1eedi email th\xe0nh c\xf4ng!"},
$S:0}
A.nr.prototype={
$0(){var w=this.a
if(w.c!=null)w.a0(new A.no(w))},
$S:1}
A.no.prototype={
$0(){this.a.x=null},
$S:0}
A.ns.prototype={
$0(){var w=this.a
w.w=!1
w.x="G\u1eedi email th\u1ea5t b\u1ea1i. Vui l\xf2ng th\u1eed l\u1ea1i!"},
$S:0}
A.nt.prototype={
$0(){var w=this.a
w.w=!1
w.x="C\xf3 l\u1ed7i x\u1ea3y ra. Vui l\xf2ng th\u1eed l\u1ea1i!"},
$S:0}
A.nn.prototype={
$1(d){var w
B.r(d)
A.aK("Name input changed: "+d)
w=this.a
w.a0(new A.nm(w,d))
w=w.d
w===$&&B.B()
A.aK("Name value after setState: "+w)},
$S:6}
A.nm.prototype={
$0(){return this.a.d=this.b},
$S:0}
A.nj.prototype={
$1(d){var w
B.r(d)
A.aK("Email input changed: "+d)
w=this.a
w.a0(new A.ni(w,d))
w=w.e
w===$&&B.B()
A.aK("Email value after setState: "+w)},
$S:6}
A.ni.prototype={
$0(){return this.a.e=this.b},
$S:0}
A.nv.prototype={
$1(d){var w
B.r(d)
A.aK("Title input changed: "+d)
w=this.a
w.a0(new A.nu(w,d))
w=w.f
w===$&&B.B()
A.aK("Title value after setState: "+w)},
$S:6}
A.nu.prototype={
$0(){return this.a.f=this.b},
$S:0}
A.nl.prototype={
$1(d){var w
B.r(d)
A.aK("Message input changed: "+d)
w=this.a
w.a0(new A.nk(w,d))
w=w.r
w===$&&B.B()
A.aK("Message value after setState: "+w)},
$S:6}
A.nk.prototype={
$0(){return this.a.r=this.b},
$S:0}
A.nh.prototype={
$0(){var w,v,u,t,s
A.aK("Submit clicked!")
w=this.a
v=w.d
v===$&&B.B()
A.aK("Name: "+v)
u=w.e
u===$&&B.B()
A.aK("Email: "+u)
t=w.f
t===$&&B.B()
A.aK("Title: "+t)
s=w.r
s===$&&B.B()
A.aK("Message: "+s)
if(v.length!==0&&u.length!==0&&t.length!==0&&s.length!==0){A.aK("All fields filled, sending email...")
w.cT(v,u,t,s)}else{A.aK("Some fields are empty!")
w.a0(new A.nf(w))
A.w7(A.nN(0,3),new A.ng(w),x.P)}},
$S:0}
A.nf.prototype={
$0(){this.a.x="Vui l\xf2ng \u0111i\u1ec1n \u0111\u1ea7y \u0111\u1ee7 th\xf4ng tin!"},
$S:0}
A.ng.prototype={
$0(){var w=this.a
if(w.c!=null)w.a0(new A.ne(w))},
$S:1}
A.ne.prototype={
$0(){this.a.x=null},
$S:0}
A.nD.prototype={
$0(){var w=b.G,v=B.J(B.o(w.document).querySelector("#contact"))
if(v==null)v=B.o(v)
B.o(w.window).scrollTo({behavior:"smooth",top:B.ax(v.offsetTop)})},
$S:0}
A.od.prototype={
$0(){var w=b.G,v=B.J(B.o(w.document).querySelector("#services"))
if(v==null)v=B.o(v)
B.o(w.window).scrollTo({behavior:"smooth",top:B.ax(v.offsetTop)})},
$S:0}
A.qG.prototype={
$0(){var w,v=this.a
v.a0(new A.qF(v))
w=B.o(b.G.document)
w.cookie="active-theme="+(v.d?"dark":"light")+"; path=/; max-age=31536000"},
$S:0}
A.qF.prototype={
$0(){var w=this.a
w.d=!w.d},
$S:0}
A.oW.prototype={
$1(d){var w,v,u,t,s
x.a4.a(d)
w=B.r(B.o(b.G.document).cookie).split(";")
for(v=w.length,u=0;u<v;++u){t=C.a.bx(w[u]).split("=")
s=t.length
if(0>=s)return B.b(t,0)
if(t[0]==="cookie_consent"&&s>1){if(1>=s)return B.b(t,1)
v=t[1]
return v==="true"}}return null},
$S:z+49}
A.oZ.prototype={
$1(d){var w,v,u=x.a4.a(d).fk($.ul(),x.u)
if(u==null){B.bp("No cookie consent decision, defaulting to English")
return"en"}if(!u){B.bp("Cookie consent declined, defaulting to English")
return"en"}w=A.As()
if(w!=null&&$.oY.P(w)){B.bp("Using stored language: "+w)
return w}v=A.wk()
B.bp("Using client language: "+v)
return $.oY.P(v)?v:"en"},
$S:z+60}
A.oX.prototype={
$0(){var w=x.N
return B.A(w,w)},
$S:49}
A.uc.prototype={
$1(d){var w=this
return d.cU("POST",w.a,x.n.a(w.b),w.c,w.d)},
$S:z+22}
A.mO.prototype={
$2(d,e){return B.r(d).toLowerCase()===B.r(e).toLowerCase()},
$S:50}
A.mP.prototype={
$1(d){return C.a.gE(B.r(d).toLowerCase())},
$S:51}
A.mT.prototype={
$3(d,e,f){B.r(d)
this.a.j(0,B.r(e).toLowerCase(),d)},
$2(d,e){return this.$3(d,e,null)},
$C:"$3",
$R:2,
$D(){return[null]},
$S:52}
A.tG.prototype={
$1(d){return null},
$S:3}
A.tH.prototype={
$1(d){B.aa(d)
return this.a.a},
$S:53}
A.mX.prototype={
$1(d){return this.a.aH(new Uint8Array(B.v7(x.f4.a(d))))},
$S:54}
A.pa.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n=this.a,m=new A.qz(null,n),l=$.zs()
m.dQ(l)
w=$.zr()
m.ck(w)
v=m.gf_().k(0,0)
v.toString
m.ck("/")
m.ck(w)
u=m.gf_().k(0,0)
u.toString
m.dQ(l)
t=x.N
s=B.A(t,t)
for(;;){t=m.d=C.a.br(";",n,m.c)
r=m.e=m.c
q=t!=null
t=q?m.e=m.c=t.gD():r
if(!q)break
t=m.d=l.br(0,n,t)
m.e=m.c
if(t!=null)m.e=m.c=t.gD()
m.ck(w)
if(m.c!==m.e)m.d=null
t=m.d.k(0,0)
t.toString
m.ck("=")
r=m.d=w.br(0,n,m.c)
p=m.e=m.c
q=r!=null
if(q){r=m.e=m.c=r.gD()
p=r}else r=p
if(q){if(r!==p)m.d=null
r=m.d.k(0,0)
r.toString
o=r}else o=A.DB(m)
r=m.d=l.br(0,n,m.c)
m.e=m.c
if(r!=null)m.e=m.c=r.gD()
s.j(0,t,o)}m.mb()
return A.p9(v,u,s)},
$S:z+23}
A.pc.prototype={
$2(d,e){var w,v,u
B.r(d)
B.r(e)
w=this.a
w.a+="; "+d+"="
v=$.zo()
v=v.b.test(e)
u=w.a
if(v){w.a=u+'"'
v=B.uj(e,$.z3(),x.jt.a(x.L.a(new A.pb())),null)
w.a=(w.a+=v)+'"'}else w.a=u+e},
$S:55}
A.pb.prototype={
$1(d){return"\\"+B.m(d.k(0,0))},
$S:10}
A.tS.prototype={
$1(d){var w=d.k(0,1)
w.toString
return w},
$S:10}
A.mM.prototype={
$0(){var w,v,u,t,s=b.G,r=B.o(s.document),q=this.a.gcj(),p=B.o(r.createNodeIterator(q,128))
for(w=null,v=null;u=B.J(p.nextNode()),u!=null;){t=B.bN(u.nodeValue)
if(t==null)t=""
if(t==="$")w=u
else if(t==="/")v=u}if(w==null){w=B.o(new s.Comment("$"))
B.o(q.insertBefore(w,v))}if(v==null){v=B.o(new s.Comment("/"))
B.o(q.insertBefore(v,B.J(w.nextSibling)))}return new B.is(w,v)},
$S:56}
A.mN.prototype={
$2(d,e){var w=x.j
w.a(d)
w.a(e)
return d.z-e.z},
$S:z+24}
A.tR.prototype={
$1(d){var w
B.o(d)
w=B.J(d.target)
w=w==null?!1:w instanceof $.yY()
if(w)d.preventDefault()
this.a.$0()},
$S:2}
A.tj.prototype={
$1(d){var w,v,u,t,s,r=B.J(B.o(d).target)
A:{w=x.m.b(r)
if(w)v=r instanceof $.my()
else v=!1
if(v){w=new A.ti(r).$0()
break A}if(w)v=r instanceof $.z_()
else v=!1
if(v){w=B.r(r.value)
break A}if(w)w=r instanceof $.vz()
else w=!1
if(w){w=B.a([],x.s)
for(v=A.xJ(B.o(r.selectedOptions)),u=v.$ti,v=new B.d_(v.a(),u.h("d_<1>")),u=u.c;v.n();){t=v.b
if(t==null)t=u.a(t)
s=t instanceof $.yZ()
if(s)w.push(B.r(t.value))}break A}w=null
break A}this.a.$1(this.b.a(w))},
$S:2}
A.ti.prototype={
$0(){var w,v,u,t,s=this.a,r=B.k3(new B.a8(D.b5,x.mM.a(new A.th(B.r(s.type))),x.k0),x.oA)
A:{if(D.a_===r||D.a5===r){s=B.dK(s.checked)
break A}if(D.a4===r||D.a6===r){s=B.ma(s.valueAsNumber)
break A}if(D.a1===r||D.a7===r||D.a8===r||D.Z===r){s=C.u.dE(B.ma(s.valueAsNumber))
if(s<-864e13||s>864e13)B.a0(B.aj(s,-864e13,864e13,"millisecondsSinceEpoch",null))
B.ew(!0,"isUtc",x.y)
s=new A.bz(s,0,!0)
break A}if(D.a3===r){s=A.zQ(1970,C.u.dE(B.ma(s.valueAsNumber))+1)
break A}if(D.a2===r){if(B.J(s.files)!=null){w=B.ax(B.J(s.files).length)
if(w<0||w>4294967295)B.a0(B.aj(w,0,4294967295,"length",null))
v=J.wg(new Array(w),x.m)
for(u=0;u<w;++u){t=B.J(B.J(s.files).item(u))
t.toString
v[u]=t}s=v}else s=D.b7
break A}if(D.a0===r){s=new B.bo(B.r(s.value))
break A}s=B.r(s.value)
break A}return s},
$S:57}
A.th.prototype={
$1(d){return x.oA.a(d).c===this.a},
$S:z+26}
A.u0.prototype={
$1(d){var w,v,u=this.a
if(u.a)w=d instanceof $.vA()
else w=!0
if(w)return!1
w=d instanceof $.yX()
if(w){v=B.bN(d.nodeValue)
if(v==null)v=""
u=$.vE()
return u.b.test(v)}else u.a=!1
return!1},
$S:14}
A.qD.prototype={
$1(d){return this.a.a},
$S(){return this.a.$ti.h("1(@)")}}
A.qv.prototype={
$1(d){var w=this.a
if(w.x1){w.ry.toString
w.x1=!1}w.cB()},
$S:19}
A.qw.prototype={
$2(d,e){this.a.mc(d,e)},
$S:9}
A.pj.prototype={
$2(d,e){var w,v=this.c
v.h("0?").a(d)
v.a(e)
v=this.a
w=this.b
if(v.d.k(0,w)==null&&v.f.k(0,w)==null)return
v.a.bU()},
$S(){return this.c.h("~(0?,0)")}}
A.rX.prototype={
$0(){var w=0,v=B.d5(x.P),u=this,t,s,r
var $async$$0=B.cz(function(d,e){if(d===1)return B.d1(e,v)
for(;;)switch(w){case 0:t=x.P
s=u.b
r=u.a
case 2:if(!(s.w.c&&!r.a)){w=3
break}w=4
return B.dL(A.Ac(new A.rW(),t),$async$$0)
case 4:w=2
break
case 3:if(s.i7&&!r.a)s.bU()
return B.d2(null,v)}})
return B.d3($async$$0,v)},
$S:58}
A.rW.prototype={
$0(){},
$S:1}
A.rY.prototype={
$0(){this.a.a=!0
var w=this.b
if(w.cm===this.c)w.cm=null},
$S:0}
A.tg.prototype={
$1(d){x.a4.a(d)
return B.a0(B.qU("Overridden by ProviderScope."))},
$S:z+71}
A.qa.prototype={
$1(d){return this.a.$2(x.r.a(d),this.b)},
$S:59}
A.p_.prototype={
$0(){var w,v=this.a.c
if(C.a.G(v,"/")&&!C.a.G(v,"//")){w=this.b.r.ghW()
return(C.a.an(w,"/")?C.a.p(w,0,w.length-1):w)+v}return v},
$S:11}
A.p0.prototype={
$1(d){var w
B.o(d)
w=A.wM(this.b)
if(w!=null)w.hc(this.a.c).ab(w.ghs(),x.H)},
$S:2}
A.p1.prototype={
$1(d){var w
B.o(d)
w=A.wM(this.b)
if(w!=null){d.preventDefault()
w.ln(this.a.c,null)}},
$S:2}
A.qg.prototype={
$2(d,e){var w
B.bN(d)
x.dv.a(e)
if(d==null)w=e.a.d
else w=d
return w},
$S:z+28}
A.tP.prototype={
$2(d,e){throw B.d(B.qU(null))},
$S:z+29}
A.qc.prototype={
$1(d){var w
x.Z.a(d)
if(d.a.length===0){w=this.a
return new A.ct(A.yd(B.aH(w),"no routes for location: "+w),x.b7)}return new A.ct(d,x.b7)},
$S:z+11}
A.tn.prototype={
$1(d){var w=d.b
if(0>=w.length)return B.b(w,0)
return"\\"+B.m(w[0])},
$S:10}
A.oL.prototype={
$1(d){this.a.$1(B.o(B.o(b.G.window).history).state)},
$S:2}
A.uh.prototype={
$1(d){var w,v,u,t,s,r=this
B.bN(d)
if(d!=null&&d!==r.b){w=r.d
v=r.e
u=r.a
t=u.a
t.toString
s=A.CG(d,r.c.d,w,v,t)
if(s.gmv())return s
return A.ug(r.f,s,w,v,r.r,u.a)}w=r.c
v=r.d
u=r.f
w=new A.ui(r.a,r.b,w,v,r.e,u,r.r).$1(A.xN(u,v,w,0))
return w},
$S:z+12}
A.ui.prototype={
$1(d){this.f.r.toString
return this.c},
$S:z+12}
A.tq.prototype={
$1(d){var w=this,v=A.xN(w.a,w.b,w.c,w.d+1)
return v},
$S:60}
A.qn.prototype={
$2(d,e){x.r.a(d)
x.gk.a(e)
return null},
$S:z+57}
A.qm.prototype={
$2$url(d,e){var w=this.a,v=w.c.r.geH()
w.hK(v,d,!0,!1)},
$1(d){return this.$2$url(d,null)},
$S:61}
A.ql.prototype={
$1(d){var w,v,u
x.Z.a(d)
w=this.a
v=w.c
if(v==null)return
w.d=d
v.r.toString
w.a0(new A.qk())
w.c.r.toString
v=d.d
u=v.i(0)
if(u!==this.b)$.mx().a.nc(w.hi(v.i(0)),d.gdD())},
$S:z+13}
A.qk.prototype={
$0(){},
$S:0}
A.qj.prototype={
$1(d){var w,v=this
x.Z.a(d)
w=v.a
if(w.c==null)return
w.a0(new A.qi(w,d,v.b,v.c,v.d))},
$S:z+13}
A.qi.prototype={
$0(){var w,v,u=this,t=u.a,s=t.d=u.b
if(u.c||u.d!==s.d.i(0)){w=t.hi(s.d.i(0))
if(!u.e){$.mx()
t=s.gdD()
s=s.a
s=s.length===0?null:C.b.ga2(s).c
v=B.o(B.o(b.G.window).history)
s=A.vo(s)
if(t==null)t=w
v.pushState(s,t,w)}else{t=$.mx()
v=s.gdD()
s=s.a
s=s.length===0?null:C.b.ga2(s).c
t.a.iz(w,s,v)}}},
$S:0}
A.qh.prototype={
$1(d){return this.a},
$S:z+69}
A.qe.prototype={
$1(d){return x.oN.a(d).b},
$S:z+70}
A.nw.prototype={
$1(d){return B.r(d)!==""},
$S:4}
A.nx.prototype={
$1(d){return B.r(d).length!==0},
$S:4}
A.tK.prototype={
$1(d){B.bN(d)
return d==null?"null":'"'+d+'"'},
$S:63}
A.r_.prototype={
$1(d){return B.r(d)!==""},
$S:4}
A.ta.prototype={
$0(){return this.a.l0(this.b)},
$S:0}
A.t9.prototype={
$1(d){var w=this.a.$ti
return w.h("~(1?,1)").a(w.h("aY<1>").a(d).a).$2(this.b,this.c)},
$S(){return this.a.$ti.h("~(aY<1>)")}}
A.tb.prototype={
$1(d){this.a.$ti.h("aY<1>").a(d)
return null},
$S(){return this.a.$ti.h("~(aY<1>)")}}
A.qA.prototype={
$1(d){return this.a+B.r(d)},
$S:13}
A.mJ.prototype={
$1(d){var w,v=this.a,u=v.$ti.h("bq<1>")
u.a(d)
w=this.b
w.toString
return new A.bq(v.a,w,d.c,u)},
$S(){return this.a.$ti.h("bq<1>(bq<1>)")}}
A.mK.prototype={
$1(d){var w=this.a,v=w.$ti.h("bj<1>")
return new A.bj(w.a,this.b,v.a(d).c,v)},
$S(){return this.a.$ti.h("bj<1>(bj<1>)")}}
A.mL.prototype={
$1(d){var w=this.a,v=w.$ti
v.a(d)
return new A.b0(w.a,this.b,this.c.gaV(),v)},
$S(){return this.a.$ti.h("b0<1>(b0<1>)")}}
A.tJ.prototype={
$1(d){x.B.a(d)
return!D.bn.B(0,d.gfm())&&!C.a.an(d.gby().gX(),".g.dart")},
$S:z+21}
A.q8.prototype={
$0(){var w=this.a,v=w.d,u=this.b
C.b.m(v,u)
v=v.length-1
u.b!==$&&B.cA()
u.b=v
w.a=null
w=x.X
A.E7("riverpod:new_event",B.a6(["offset",v],w,w))},
$S:0}
A.q6.prototype={
$0(){return D.I.dH()},
$S:11}
A.q7.prototype={
$0(){return D.I.dH()},
$S:11}
A.px.prototype={
$1(d){d.r=D.ad},
$S:z+2}
A.py.prototype={
$1(d){var w,v=d.r
if(v!=null){d.r=null
w=v.a
if(w!=null)d.hm(w.b,w.a)}},
$S:z+2}
A.pw.prototype={
$1(d){return d.bO()},
$S:z+1}
A.pA.prototype={
$1(d){return x.M.a(d).$0()},
$S:12}
A.pL.prototype={
$0(){var w=this,v=w.b,u=w.c.$2(v.ax,w.d)
if(u==null)return
w.a.a=!0
v.ay=A.l8(u,new A.pK(v))},
$S:0}
A.pK.prototype={
$0(){var w=this.a
w.ay=null;++w.ax
w.eX(!1,!1)},
$S:0}
A.pD.prototype={
$1(d){d.em()
d.az(new A.pC())},
$S:z+1}
A.pC.prototype={
$1(d){return d.di()},
$S:z+2}
A.pE.prototype={
$1(d){return d.di()},
$S:z+2}
A.pu.prototype={
$1(d){d.em()
d.az(new A.pt())},
$S:z+1}
A.pt.prototype={
$1(d){return d.di()},
$S:z+2}
A.pv.prototype={
$1(d){return d.di()},
$S:z+2}
A.pF.prototype={
$1(d){A.af(x.oz.a(d),x.z).a5()},
$S:z+16}
A.pG.prototype={
$1(d){A.af(x.oz.a(d),x.z).bv()},
$S:z+16}
A.pz.prototype={
$0(){var w,v,u,t,s,r=this.b,q=r.d=!0
r.gb0()
w=this.a
v=w.y
C.b.m(v==null?w.y=B.a([],x.G):v,r)
if(r.xr$<=0?A.af(r,x.X).y1$!==0:q)++w.f
u=r.gaC()
if(u instanceof A.e5){t=u.b
s=t.x
if(s==null){s=B.a([],x.J)
t.sj3(s)}C.b.m(s,r)}},
$S:0}
A.pJ.prototype={
$0(){var w,v,u,t,s,r=this
r.b.$0()
w=r.c
w.gb0()
v=!1
u=x.z
if(A.af(w,u).c==null)v=w.xr$>0||A.af(w,u).y1$!==0
if(v){v=r.a
v.f=Math.max(0,v.f-1)}w.gb0()
v=r.a.y
if(v!=null)C.b.J(v,w)
t=A.af(w,x.z).gaC()
if(t instanceof A.e5){s=t.b
v=s.x
if(v!=null)C.b.J(v,w)
v=s.w
if(v!=null)C.b.J(v,w)}},
$S:0}
A.pH.prototype={
$0(){var w,v=this.b,u=x.z,t=A.af(v,u),s=t.xr$>0||t.y1$!==0
this.c.$0()
t=A.af(v,u)
w=t.xr$>0||t.y1$!==0
if(A.af(v,u).c!=null)return
v.gb0()
if(s===w)return;++this.a.f},
$S:0}
A.pI.prototype={
$0(){var w,v=this.b,u=x.z,t=A.af(v,u),s=t.xr$>0||t.y1$!==0
this.c.$0()
t=A.af(v,u)
w=t.xr$>0||t.y1$!==0
if(A.af(v,u).c!=null)return
v.gb0()
if(s===w)return
v=this.a
v.f=Math.max(0,v.f-1)},
$S:0}
A.pr.prototype={
$1(d){return x.oz.a(d).b},
$S:z+30}
A.ps.prototype={
$1(d){var w
x.kL.a(d)
d.gb0()
w=d.xr$>0||d.y1$!==0
return w},
$S:z+31}
A.pB.prototype={
$1(d){d.c=B.ae(0,null,!1,d.$ti.h("aY<1>?"))
d.b=0
d.r=D.ad},
$S:z+2}
A.pM.prototype={
$1(d){var w,v,u,t,s,r,q
x.lm.a(d)
for(w=d.length,v=x.X,u=this.a,t=0;t<d.length;d.length===w||(0,B.P)(d),++t){s=A.af(d[t],v).gaC()
r=s instanceof A.e5
q=r?s.b:null
if(r){u.$1(q)
continue}if(s instanceof A.h0)continue}},
$S:z+32}
A.pk.prototype={
$1(d){var w,v=x.af.a(d).b,u=v.b
if(!(u instanceof A.ff)){w=!1
if(v.d.w==null)if(u==null){v=v.a.gbz()
if(v==null)v=null
else{v=v.a
v=v.gai(v)}v=v===!0}else v=w
else v=w}else v=!0
return!v},
$S:z+33}
A.pl.prototype={
$1(d){var w,v=d.y
v===$&&B.B()
w=this.a
return v.iS(w).ip(w,v.a)},
$S:z+34}
A.pm.prototype={
$1$override(d){var w=d==null?null:new A.ff(d)
return new A.aL(this.b,w,this.a)},
$0(){return this.$1$override(null)},
$S:z+35}
A.pP.prototype={
$1(d){var w
x.j9.a(d)
w=d.b
if(!(w.a instanceof A.dy))w=!A.xL(d.a)||w.a!=null
else w=!1
return w},
$S:z+36}
A.pQ.prototype={
$1(d){var w,v=x.j9
v.a(d)
w=d.a
w.gbz()
return new B.R(w,A.wH(d.b,null,null),v)},
$S:z+37}
A.pR.prototype={
$1(d){var w,v
x.k6.a(d)
w=B.a([],x.l3)
v=this.a.n4(d)
v=v==null?null:v.d
if(v!=null)w.push(v)
return w},
$S:z+38}
A.pS.prototype={
$2(d,e){x.dI.a(d)
x.D.a(e)
if(d==null||d.f<e.f)return e
return d},
$S:z+39}
A.pT.prototype={
$1(d){return x.F.a(d).d===this.a.a},
$S:z+40}
A.pU.prototype={
$1(d){return x.o.a(d).c===this.a.a},
$S:z+41}
A.pV.prototype={
$1(d){return x.o.a(d).b.gfi()},
$S:z+42}
A.oS.prototype={
$2(d,e){return A.k_(this.a,B.aa(d),x.l.a(e))},
$S:7}
A.oQ.prototype={
$1(d){if(d.c.d===this.b)this.a.a=!0},
$S:z+1}
A.oR.prototype={
$1(d){var w,v=this.a
if(d.c.d===v){w={}
w.a=!0
d.fj(new A.oP(w,v,this.b))
if(w.a)this.c.m(0,d)}},
$S:z+1}
A.oP.prototype={
$1(d){if(d.c.d===this.b&&!this.c.B(0,d))this.a.a=!1},
$S:z+1}
A.ph.prototype={
$2(d,e){var w=this.a
w.h("0?").a(d)
w.a(e)},
$S(){return this.a.h("~(0?,0)")}}
A.pi.prototype={
$2(d,e){if(d==null)throw B.d(B.dR("Tried to update the override of a provider that was not overridden before"))},
$S:z+43}
A.n9.prototype={
$1(d){return"  "+x.O.a(d).i(0)+"\n"},
$S:z+45}
A.pY.prototype={
$0(){this.a.b=!0},
$S:0}
A.pn.prototype={
$2(d,e){var w=this.a.$ti
w.h("2?").a(d)
w.y[1].a(e)},
$S(){return this.a.$ti.h("~(2?,2)")}}
A.po.prototype={
$2(d,e){B.aa(d)
x.l.a(e)},
$S:7}
A.pp.prototype={
$2(d,e){var w=this.a.$ti
w.h("1?").a(d)
w.c.a(e)
return this.b.cR().hj(d,e)},
$S(){return this.a.$ti.h("~(1?,1)")}}
A.pq.prototype={
$0(){var w=this.a,v=this.b.a.eu(w.b,w.$ti.y[1])
v.bO()
v.df()
return w.c.$1(v).gnd()},
$S(){return this.a.$ti.h("cB<1>()")}}
A.q_.prototype={
$1(d){var w,v,u=this,t={},s=u.a
if(s.B(0,d))return!1
s.m(0,d)
w=u.b
v=B.f(d).h("ab<w.0>").a(d.c.a)
C.b.m(w,v)
if(v.I(0,u.c))return!0
t.a=!1
d.Y(new A.q0(t,s,u))
if(t.a)return!0
if(0>=w.length)return B.b(w,-1)
w.pop()
return!1},
$S:z+59}
A.q0.prototype={
$1(d){var w=this.a
if(!w.a&&!this.b.B(0,d))if(this.c.$1(d))w.a=!0},
$S:z+1}
A.q1.prototype={
$1(d){if(!this.a.B(0,d))this.b.$1(d)},
$S:z+1}
A.q2.prototype={
$2(d,e){var w=this.b
w.h("0?").a(d)
w.a(e)
w=this.a
w.cV()
w.z.eX(!0,!1)
return null},
$S(){return this.b.h("~(0?,0)")}}
A.q3.prototype={
$2(d,e){var w
B.aa(d)
x.l.a(e)
w=this.a
w.cV()
w.z.eX(!0,!1)
return null},
$S:7}
A.pW.prototype={
$0(){var w,v,u,t
for(w=this.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.P)(w),++u){t=w[u]
if(t!=null)t.$0()}},
$S:0}
A.pX.prototype={
$0(){if(this.a.a)return
this.b.$0()},
$S:1}
A.qu.prototype={
$1(d){var w=this.a.$ti
return w.h("fu<1>").a(w.h("w<1,i?>").a(d)).bn},
$S(){return this.a.$ti.h("bb<bZ<1>>(w<1,i?>)")}}
A.rS.prototype={
$1(d){var w=this.a,v=w.$ti.c
v.a(d)
w.i6.sdA(w.bn.w)
w.bd(A.mH(d,v))},
$S(){return this.a.$ti.h("~(1)")}}
A.oJ.prototype={
$0(){return this.a},
$S:65}
A.or.prototype={
$1(d){var w=x.nR.a(d).d,v=B.O(w)
return new B.a8(w,v.h("v(1)").a(new A.oq()),v.h("a8<1>")).gl(0)},
$S:z+48}
A.oq.prototype={
$1(d){var w=x.C.a(d).a
return w.gF().gN()!==w.gD().gN()},
$S:z+9}
A.os.prototype={
$1(d){return x.nR.a(d).c},
$S:z+50}
A.ou.prototype={
$1(d){var w=x.C.a(d).a.gL()
return w==null?new B.i():w},
$S:z+51}
A.ov.prototype={
$2(d,e){var w=x.C
return w.a(d).a.a4(0,w.a(e).a)},
$S:z+52}
A.ow.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
x.lO.a(d)
w=d.a
v=d.b
u=B.a([],x.dg)
for(t=J.bP(v),s=t.gt(v),r=x.g7;s.n();){q=s.gq().a
p=q.gam()
o=A.tT(p,q.ga7(),q.gF().gU())
o.toString
n=C.a.bi("\n",C.a.p(p,0,o)).gl(0)
m=q.gF().gN()-n
for(q=p.split("\n"),o=q.length,l=0;l<o;++l){k=q[l]
if(u.length===0||m>C.b.ga2(u).b)C.b.m(u,new A.bK(k,m,w,B.a([],r)));++m}}j=B.a([],r)
for(s=u.length,r=x.aP,i=j.$flags|0,h=0,l=0;l<u.length;u.length===s||(0,B.P)(u),++l){k=u[l]
q=r.a(new A.ot(k))
i&1&&B.at(j,16)
C.b.l1(j,q,!0)
g=j.length
for(q=t.aB(v,h),o=q.$ti,q=new B.ai(q,q.gl(0),o.h("ai<S.E>")),f=k.b,o=o.h("S.E");q.n();){e=q.d
if(e==null)e=o.a(e)
if(e.a.gF().gN()>f)break
C.b.m(j,e)}h+=j.length-g
C.b.v(k.d,j)}return u},
$S:z+53}
A.ot.prototype={
$1(d){return x.C.a(d).a.gD().gN()<this.a.b},
$S:z+9}
A.oK.prototype={
$1(d){x.C.a(d)
return!0},
$S:z+9}
A.ox.prototype={
$0(){this.a.r.a+=C.a.af("\u2500",2)+">"
return null},
$S:0}
A.oE.prototype={
$0(){var w=this.a.r,v=this.b===this.c.b?"\u250c":"\u2514"
w.a+=v},
$S:1}
A.oF.prototype={
$0(){var w=this.a.r,v=this.b==null?"\u2500":"\u253c"
w.a+=v},
$S:1}
A.oG.prototype={
$0(){this.a.r.a+="\u2500"
return null},
$S:0}
A.oH.prototype={
$0(){var w,v,u=this,t=u.a,s=t.a?"\u253c":"\u2502"
if(u.c!=null)u.b.r.a+=s
else{w=u.e
v=w.b
if(u.d===v){w=u.b
w.ao(new A.oC(t,w),t.b,x.P)
t.a=!0
if(t.b==null)t.b=w.b}else{w=u.r===v&&u.f.a.gD().gU()===w.a.length
v=u.b
if(w)v.r.a+="\u2514"
else v.ao(new A.oD(v,s),t.b,x.P)}}},
$S:1}
A.oC.prototype={
$0(){var w=this.b.r,v=this.a.a?"\u252c":"\u250c"
w.a+=v},
$S:1}
A.oD.prototype={
$0(){this.a.r.a+=this.b},
$S:1}
A.oy.prototype={
$0(){var w=this
return w.a.cZ(C.a.p(w.b,w.c,w.d))},
$S:0}
A.oz.prototype={
$0(){var w,v,u=this.a,t=u.r,s=t.a,r=this.c.a,q=r.gF().gU(),p=r.gD().gU()
r=this.b.a
w=u.ec(C.a.p(r,0,q))
v=u.ec(C.a.p(r,q,p))
q+=w*3
r=(t.a+=C.a.af(" ",q))+C.a.af("^",Math.max(p+(w+v)*3-q,1))
t.a=r
return r.length-s.length},
$S:22}
A.oA.prototype={
$0(){return this.a.lq(this.b,this.c.a.gF().gU())},
$S:0}
A.oB.prototype={
$0(){var w=this,v=w.a,u=v.r,t=u.a
if(w.b)u.a=t+C.a.af("\u2500",3)
else v.hN(w.c,Math.max(w.d.a.gD().gU()-1,0),!1)
return u.a.length-t.length},
$S:22}
A.oI.prototype={
$0(){var w=this.b,v=w.r,u=this.a.a
if(u==null)u=""
w=C.a.dl(u,w.d)
w=v.a+=w
u=this.c
v.a=w+(u==null?"\u2502":u)},
$S:1}
A.rF.prototype={
$0(){var w,v,u,t,s=this.a
if(!(x.ol.b(s)&&A.tT(s.gam(),s.ga7(),s.gF().gU())!=null)){w=A.kR(s.gF().gW(),0,0,s.gL())
v=s.gD().gW()
u=s.gL()
t=A.Dv(s.ga7(),10)
s=A.qs(w,A.kR(v,A.x5(s.ga7()),t,u),s.ga7(),s.ga7())}return A.Bu(A.Bw(A.Bv(s)))},
$S:z+54}
A.n3.prototype={
$1(d){return B.r(d).length!==0},
$S:4}
A.n8.prototype={
$1(d){return x.a.a(d).gbP()},
$S:z+55}
A.n7.prototype={
$1(d){var w=x.a.a(d).gbP(),v=B.O(w)
return new B.U(w,v.h("e(1)").a(new A.n5()),v.h("U<1,e>")).b6(0,0,D.G,x.S)},
$S:z+56}
A.n5.prototype={
$1(d){return x.B.a(d).gbT().length},
$S:z+18}
A.n6.prototype={
$1(d){var w=x.a.a(d).gbP(),v=B.O(w)
return new B.U(w,v.h("c(1)").a(new A.n4(this.a)),v.h("U<1,c>")).bR(0)},
$S:z+58}
A.n4.prototype={
$1(d){x.B.a(d)
return C.a.dl(d.gbT(),this.a)+"  "+B.m(d.gdg())+"\n"},
$S:z+7}
A.o2.prototype={
$0(){var w,v,u,t,s,r,q,p=null,o=this.a
if(o==="...")return new A.Z(A.aT(p,p,p,p),p,p,"...")
w=$.zn().ah(o)
if(w==null)return new A.cw(A.aT(p,"unparsed",p,p),o)
o=w.b
if(1>=o.length)return B.b(o,1)
v=o[1]
v.toString
u=$.yW()
v=B.bh(v,u,"<async>")
t=B.bh(v,"<anonymous closure>","<fn>")
if(2>=o.length)return B.b(o,2)
v=o[2]
u=v
u.toString
if(C.a.G(u,"<data:"))s=A.wZ("")
else{v=v
v.toString
s=B.aH(v)}if(3>=o.length)return B.b(o,3)
r=o[3].split(":")
o=r.length
q=o>1?B.ci(r[1],p):p
return new A.Z(s,q,o>2?B.ci(r[2],p):p,t)},
$S:z+4}
A.o0.prototype={
$0(){var w,v,u,t,s,r,q="<fn>",p=this.a,o=$.zm().ah(p)
if(o!=null){w=o.aQ("member")
p=o.aQ("uri")
p.toString
v=A.jP(p)
p=o.aQ("index")
p.toString
u=o.aQ("offset")
u.toString
t=B.ci(u,16)
if(!(w==null))p=w
return new A.Z(v,1,t+1,p)}o=$.zi().ah(p)
if(o!=null){p=new A.o1(p)
u=o.b
s=u.length
if(2>=s)return B.b(u,2)
r=u[2]
if(r!=null){s=r
s.toString
u=u[1]
u.toString
u=B.bh(u,"<anonymous>",q)
u=B.bh(u,"Anonymous function",q)
return p.$2(s,B.bh(u,"(anonymous function)",q))}else{if(3>=s)return B.b(u,3)
u=u[3]
u.toString
return p.$2(u,q)}}return new A.cw(A.aT(null,"unparsed",null,null),p)},
$S:z+4}
A.o1.prototype={
$2(d,e){var w,v,u,t,s,r=null,q=$.zh(),p=q.ah(d)
for(;p!=null;d=w){w=p.b
if(1>=w.length)return B.b(w,1)
w=w[1]
w.toString
p=q.ah(w)}if(d==="native")return new A.Z(B.aH("native"),r,r,e)
v=$.zj().ah(d)
if(v==null)return new A.cw(A.aT(r,"unparsed",r,r),this.a)
q=v.b
if(1>=q.length)return B.b(q,1)
w=q[1]
w.toString
u=A.jP(w)
if(2>=q.length)return B.b(q,2)
w=q[2]
w.toString
t=B.ci(w,r)
if(3>=q.length)return B.b(q,3)
s=q[3]
return new A.Z(u,t,s!=null?B.ci(s,r):r,e)},
$S:z+61}
A.nY.prototype={
$0(){var w,v,u,t,s=null,r=this.a,q=$.z4().ah(r)
if(q==null)return new A.cw(A.aT(s,"unparsed",s,s),r)
r=q.b
if(1>=r.length)return B.b(r,1)
w=r[1]
w.toString
v=B.bh(w,"/<","")
if(2>=r.length)return B.b(r,2)
w=r[2]
w.toString
u=A.jP(w)
if(3>=r.length)return B.b(r,3)
r=r[3]
r.toString
t=B.ci(r,s)
return new A.Z(u,t,s,v.length===0||v==="anonymous"?"<fn>":v)},
$S:z+4}
A.nZ.prototype={
$0(){var w,v,u,t,s,r,q,p,o=null,n=this.a,m=$.z6().ah(n)
if(m!=null){w=m.b
if(3>=w.length)return B.b(w,3)
v=w[3]
u=v
u.toString
if(C.a.B(u," line "))return A.A3(n)
n=v
n.toString
t=A.jP(n)
n=w.length
if(1>=n)return B.b(w,1)
s=w[1]
if(s!=null){if(2>=n)return B.b(w,2)
n=w[2]
n.toString
s+=C.b.bR(B.ae(C.a.bi("/",n).gl(0),".<fn>",!1,x.N))
if(s==="")s="<fn>"
s=C.a.iA(s,$.zb(),"")}else s="<fn>"
if(4>=w.length)return B.b(w,4)
n=w[4]
if(n==="")r=o
else{n=n
n.toString
r=B.ci(n,o)}if(5>=w.length)return B.b(w,5)
n=w[5]
if(n==null||n==="")q=o
else{n=n
n.toString
q=B.ci(n,o)}return new A.Z(t,r,q,s)}m=$.z8().ah(n)
if(m!=null){n=m.aQ("member")
n.toString
w=m.aQ("uri")
w.toString
t=A.jP(w)
w=m.aQ("index")
w.toString
v=m.aQ("offset")
v.toString
p=B.ci(v,16)
if(!(n.length!==0))n=w
return new A.Z(t,1,p+1,n)}m=$.zf().ah(n)
if(m!=null){n=m.aQ("member")
n.toString
return new A.Z(A.aT(o,"wasm code",o,o),o,o,n)}return new A.cw(A.aT(o,"unparsed",o,o),n)},
$S:z+4}
A.o_.prototype={
$0(){var w,v,u,t,s=null,r=this.a,q=$.z9().ah(r)
if(q==null)throw B.d(B.aw("Couldn't parse package:stack_trace stack trace line '"+r+"'.",s,s))
r=q.b
if(1>=r.length)return B.b(r,1)
w=r[1]
if(w==="data:...")v=A.wZ("")
else{w=w
w.toString
v=B.aH(w)}if(v.ga8()===""){w=$.mz()
v=w.iJ(w.hQ(w.a.dm(A.vb(v)),s,s,s,s,s,s,s,s,s,s,s,s,s,s))}if(2>=r.length)return B.b(r,2)
w=r[2]
if(w==null)u=s
else{w=w
w.toString
u=B.ci(w,s)}if(3>=r.length)return B.b(r,3)
w=r[3]
if(w==null)t=s
else{w=w
w.toString
t=B.ci(w,s)}if(4>=r.length)return B.b(r,4)
return new A.Z(v,u,t,r[4])},
$S:z+4}
A.qL.prototype={
$0(){return A.wW(this.a.i(0))},
$S:z+62}
A.qM.prototype={
$1(d){return B.r(d).length!==0},
$S:4}
A.qK.prototype={
$1(d){return!C.a.G(B.r(d),$.zl())},
$S:4}
A.qJ.prototype={
$1(d){return B.r(d)!=="\tat "},
$S:4}
A.qH.prototype={
$1(d){B.r(d)
return d.length!==0&&d!=="[native code]"},
$S:4}
A.qI.prototype={
$1(d){return!C.a.G(B.r(d),"=====")},
$S:4}
A.qO.prototype={
$1(d){return x.B.a(d).gbT().length},
$S:z+18}
A.qN.prototype={
$1(d){x.B.a(d)
if(d instanceof A.cw)return d.i(0)+"\n"
return C.a.dl(d.gbT(),this.a)+"  "+B.m(d.gdg())+"\n"},
$S:z+7}
A.qZ.prototype={
$1(d){var w,v,u,t,s
x.B.a(d)
w=C.a.dl("#"+this.a.a++,8)
v=d.gdg()
v.toString
v=B.uj(v,B.L("[^.]+\\.<async>",!0,!1),x.jt.a(x.L.a(new A.qY())),null)
u=B.bh(v,"<fn>","<anonymous closure>")
t=d.gN()
if(t==null)t=0
s=d.gU()
if(s==null)s=0
return w+u+" ("+d.gby().i(0)+":"+t+":"+s+")\n"},
$S:z+7}
A.qY.prototype={
$1(d){return B.m(d.k(0,1))+".<"+B.m(d.k(0,1))+"_async_body>"},
$S:10}
A.qt.prototype={
$0(){var w=this.a,v=w.a
if(v!=null)v.hG(w.$ti.h("cp.E").a(w))},
$S:0};(function aliases(){var w=A.fM.prototype
w.j4=w.b5
w=A.aW.prototype
w.cF=w.iY
w.fz=w.dR
w.ja=w.eM
w.j9=w.eJ
w=A.aq.prototype
w.be=w.aK
w.fF=w.d6
w.dY=w.aI
w=A.im.prototype
w.jz=w.aK
w=A.w.prototype
w.cG=w.bd
w.jl=w.ac
w.fB=w.cs
w.fC=w.dj
w.fD=w.ba
w.fA=w.aI
w.fE=w.az
w=A.b7.prototype
w.jo=w.av
w.jn=w.a5
w.jp=w.bv
w.jm=w.aq
w=A.dG.prototype
w.jx=w.av
w.jw=w.a5
w.jy=w.bv
w=A.bH.prototype
w.ju=w.ba
w.jv=w.az
w=A.fc.prototype
w.jt=w.a4
w.js=w.I
w=A.fd.prototype
w.cH=w.sdT})();(function installTearOffs(){var w=a._static_1,v=a._static_2,u=a._instance_1u,t=a._instance_2u,s=a._instance_0u,r=a._instance_1i,q=a.installStaticTearOff,p=a.installInstanceTearOff
w(A,"Di","CZ",63)
v(A,"Dj","D_",6)
var o
u(o=A.fv.prototype,"gjM","e2",3)
t(o,"gjK","e0",6)
s(o,"gjV","fR",0)
s(o=A.ee.prototype,"ghp","cP",0)
s(o,"ghq","cQ",0)
s(o=A.fj.prototype,"ghp","cP",0)
s(o,"ghq","cQ",0)
s(A.fk.prototype,"gho","kO",0)
r(A.eZ.prototype,"geB","m",3)
r(o=A.lv.prototype,"geB","m",3)
s(o,"glI","aq",0)
q(A,"E3",2,null,["$1$2","$2"],["yo",function(d,e){return A.yo(d,e,x.cZ)}],64,1)
w(A,"Dk","zH",65)
q(A,"tQ",0,null,["$1$3$onChange$onClick$onInput","$0","$1$0","$1$1$onClick","$1$2$onChange$onInput"],["mj",function(){return A.mj(null,null,null,x.z)},function(d){return A.mj(null,null,null,d)},function(d,e){return A.mj(null,d,null,e)},function(d,e,f){return A.mj(d,null,e,f)}],66,0)
q(A,"E8",4,function(){return{extra:null,redirectHistory:null}},["$6$extra$redirectHistory","$4","$5$extra"],["ug",function(d,e,f,g){return A.ug(d,e,f,g,null,null)},function(d,e,f,g,h){return A.ug(d,e,f,g,h,null)}],67,0)
u(A.hD.prototype,"ghs","kW",11)
q(A,"DJ",2,null,["$5$maxDelay$maxRetries$minDelay","$2"],["wG",function(d,e){return A.wG(d,e,D.aK,10,D.aJ)}],68,0)
v(A,"yf","AP",19)
v(A,"DK","AO",19)
u(o=A.h1.prototype,"glZ","m_",14)
u(o,"gm2","m3",14)
t(o,"glX","lY",20)
u(o,"gm4","m5",15)
p(o,"gm6",0,3,null,["$3"],["m7"],25,0,0)
p(o=A.ah.prototype,"gmR",0,1,null,["$2$seamless","$1"],["f4","mS"],8,0,0)
p(o,"gmP",0,1,null,["$2$seamless","$1"],["ir","mQ"],8,0,0)
p(o,"gmN",0,1,null,["$2$seamless","$1"],["iq","mO"],8,0,0)
u(o=A.w.prototype,"giL","ac",3)
s(o,"gkz","em",0)
s(o,"gke","kf",0)
u(A.cg.prototype,"giL","ac",3)
p(o=A.f3.prototype,"git",0,3,null,["$3"],["n2"],44,0,0)
u(o,"gm0","m1",15)
t(o=A.b7.prototype,"gkF","hj",46)
t(o,"gkG","kH",6)
p(o=A.dG.prototype,"gmZ",0,0,null,["$0"],["av"],0,0,1)
p(o,"glQ",0,0,null,["$0"],["a5"],0,0,1)
p(o,"gn3",0,0,null,["$0"],["bv"],0,0,1)
s(A.ec.prototype,"gdM","$0",0)
s(A.kG.prototype,"glh","li",0)
w(A,"DI","Aa",5)
w(A,"ye","A9",5)
w(A,"DG","A7",5)
w(A,"DH","A8",5)
w(A,"Em","Bc",17)
w(A,"El","Bb",17)})();(function inheritance(){var w=a.mixin,v=a.mixinHard,u=a.inheritMany,t=a.inherit
u(B.fT,[A.ub,A.tc,A.r7,A.r8,A.r9,A.ra,A.rb,A.r6,A.o9,A.o8,A.o7,A.rU,A.rT,A.r0,A.rd,A.rc,A.rO,A.nE,A.on,A.oi,A.og,A.oh,A.ol,A.oe,A.n1,A.n0,A.np,A.nq,A.nr,A.no,A.ns,A.nt,A.nm,A.ni,A.nu,A.nk,A.nh,A.nf,A.ng,A.ne,A.nD,A.od,A.qG,A.qF,A.oX,A.pa,A.mM,A.ti,A.rX,A.rW,A.rY,A.p_,A.qk,A.qi,A.ta,A.q8,A.q6,A.q7,A.pL,A.pK,A.pz,A.pJ,A.pH,A.pI,A.pY,A.pq,A.pW,A.pX,A.oJ,A.ox,A.oE,A.oF,A.oG,A.oH,A.oC,A.oD,A.oy,A.oz,A.oA,A.oB,A.oI,A.rF,A.o2,A.o0,A.nY,A.nZ,A.o_,A.qL,A.qt])
t(A.fZ,B.cr)
t(A.h_,A.fZ)
u(B.bd,[A.jY,A.td,A.o6,A.rn,A.rm,A.u3,A.ud,A.ue,A.n_,A.mV,A.ny,A.nz,A.oo,A.om,A.oj,A.ok,A.of,A.n2,A.nn,A.nj,A.nv,A.nl,A.oW,A.oZ,A.uc,A.mP,A.mT,A.tG,A.tH,A.mX,A.pb,A.tS,A.tR,A.tj,A.th,A.u0,A.qD,A.qv,A.tg,A.qa,A.p0,A.p1,A.qc,A.tn,A.oL,A.uh,A.ui,A.tq,A.qm,A.ql,A.qj,A.qh,A.qe,A.nw,A.nx,A.tK,A.r_,A.t9,A.tb,A.qA,A.mJ,A.mK,A.mL,A.tJ,A.px,A.py,A.pw,A.pA,A.pD,A.pC,A.pE,A.pu,A.pt,A.pv,A.pF,A.pG,A.pr,A.ps,A.pB,A.pM,A.pk,A.pl,A.pm,A.pP,A.pQ,A.pR,A.pT,A.pU,A.pV,A.oQ,A.oR,A.oP,A.n9,A.q_,A.q0,A.q1,A.qu,A.rS,A.or,A.oq,A.os,A.ou,A.ow,A.ot,A.oK,A.n3,A.n8,A.n7,A.n5,A.n6,A.n4,A.qM,A.qK,A.qJ,A.qH,A.qI,A.qO,A.qN,A.qZ,A.qY])
t(A.eR,A.jY)
u(B.i,[A.rf,A.lr,A.ib,A.i9,A.fv,A.ls,A.fj,A.ln,A.cU,A.lC,A.bL,A.fk,A.ep,A.cp,A.cV,A.i4,A.ie,A.mW,A.bz,A.kr,A.rH,A.a1,A.aq,A.nB,A.hy,A.hx,A.jm,A.fM,A.mQ,A.eJ,A.f1,A.ji,A.lu,A.cx,A.lS,A.mR,A.aR,A.dB,A.jE,A.m9,A.lL,A.oc,A.ik,A.ll,A.er,A.aI,A.hS,A.hR,A.dH,A.ct,A.e0,A.e3,A.hA,A.qC,A.q9,A.f8,A.ds,A.f9,A.ak,A.qb,A.pf,A.jU,A.kM,A.f7,A.bu,A.jB,A.qB,A.pd,A.kv,A.aY,A.m6,A.av,A.aV,A.e4,A.aN,A.q5,A.jN,A.pN,A.uI,A.cG,A.f3,A.lU,A.ah,A.w,A.dv,A.bl,A.da,A.ff,A.dy,A.cM,A.hu,A.aL,A.aO,A.pO,A.aE,A.b6,A.aP,A.dG,A.il,A.lc,A.c8,A.ec,A.lB,A.kG,A.fd,A.j6,A.qr,A.kS,A.fc,A.op,A.aS,A.bK,A.cb,A.kU,A.dg,A.Z,A.kg,A.al,A.cw,A.lj,A.qz,A.pZ,A.qX])
u(B.X,[A.hw,A.iA,A.f0,A.ju,A.kW])
u(B.fU,[A.ro,A.r1,A.mY,A.mZ,A.mF,A.mG,A.mO,A.pc,A.mN,A.qw,A.pj,A.qg,A.tP,A.qn,A.pS,A.oS,A.ph,A.pi,A.pn,A.po,A.pp,A.q2,A.q3,A.ov,A.o1])
t(A.iG,B.dD)
u(B.aF,[A.e9,A.iE,A.i7])
t(A.dA,A.fv)
t(A.dE,A.iE)
t(A.ee,A.fj)
t(A.bM,A.ln)
u(A.cU,[A.ef,A.i3])
u(B.h,[A.eY,A.dU])
u(A.cV,[A.eg,A.i5])
t(A.eZ,B.S)
t(A.lv,A.mW)
u(B.p,[A.bn,A.M,A.eD,A.c4,A.c5])
u(A.bn,[A.cD,A.e_,A.by,A.eK,A.fe,A.de,A.dl,A.dr,A.dt])
u(A.aq,[A.ja,A.jT,A.jr,A.jA,A.l7,A.lm,A.jV,A.im,A.lX])
u(A.M,[A.eH,A.eL,A.jH,A.kk,A.a2,A.dx,A.jC,A.js,A.jD,A.h8,A.jQ,A.jS,A.k2,A.ki,A.cO,A.kt,A.kA,A.kj,A.eG,A.jR,A.mp,A.ml,A.mm,A.mn,A.mo,A.mr,A.mv,A.me,A.d7,A.mu,A.mg,A.j4,A.mt,A.mw,A.j3,A.mq,A.md,A.mf,A.j5,A.kh,A.jI])
t(A.jo,A.jm)
t(A.eI,A.e9)
t(A.kJ,A.fM)
u(A.mQ,[A.f6,A.hN])
t(A.l_,A.hN)
t(A.fN,A.a1)
u(B.lJ,[A.fL,A.a9,A.qE,A.nG,A.mS,A.mE,A.jL,A.nV,A.hg,A.fI,A.l4,A.jM,A.l5,A.eM,A.dh])
u(B.e1,[A.lt,A.lM])
t(A.ck,B.h2)
t(A.dJ,A.m9)
t(A.lT,A.ik)
t(A.m7,A.ll)
u(B.et,[A.ag,A.k])
u(B.eF,[A.aW,A.kX,A.kY])
t(A.dZ,A.e0)
t(A.hh,A.dZ)
t(A.kH,A.im)
u(A.c5,[A.fg,A.hb,A.ha])
t(A.iJ,A.aW)
t(A.kL,A.f7)
t(A.hD,A.lX)
t(A.eS,A.qB)
u(A.eS,[A.kx,A.lf,A.lk])
t(A.bb,A.m6)
u(A.aN,[A.fK,A.b0])
u(A.fK,[A.bq,A.bj])
u(A.cG,[A.kB,A.kC,A.kD,A.kE,A.kF])
t(A.h1,A.f3)
t(A.aD,A.bl)
t(A.ab,A.aD)
u(A.ab,[A.iW,A.d9])
t(A.ev,A.iW)
t(A.fF,A.ev)
u(A.w,[A.cy,A.bH])
t(A.cg,A.cy)
t(A.iV,A.cg)
t(A.iH,A.iV)
t(A.bQ,A.bH)
u(A.hu,[A.e5,A.h0])
t(A.io,A.aP)
t(A.b7,A.io)
u(A.b7,[A.e6,A.dk])
t(A.hB,A.il)
t(A.db,A.c8)
t(A.bZ,A.fd)
u(A.d9,[A.iD,A.ip])
t(A.hM,A.iD)
u(A.bQ,[A.iU,A.hZ])
t(A.fu,A.iU)
t(A.iq,A.ip)
t(A.hz,A.iq)
t(A.fE,A.hZ)
t(A.jK,A.kS)
u(A.fc,[A.fo,A.kT])
t(A.fb,A.kU)
t(A.cQ,A.kT)
t(A.dF,A.cp)
t(A.l0,A.fb)
t(A.nA,A.pZ)
w(A.dA,A.ls)
w(A.m9,B.lz)
v(A.im,A.qC)
w(A.lX,A.e3)
v(A.bH,A.ah)
w(A.il,A.lU)
w(A.io,A.dG)
w(A.iV,A.dv)
v(A.iW,A.cM)
v(A.cy,A.ah)
v(A.iD,A.cM)
w(A.iU,A.dv)
w(A.hZ,A.dv)
w(A.ip,A.j6)
v(A.iq,A.cM)})()
B.xi(b.typeUniverse,JSON.parse('{"fZ":{"cr":["1"],"fa":["1"],"y":["1"],"h":["1"]},"h_":{"fZ":["1"],"cr":["1"],"fa":["1"],"y":["1"],"h":["1"]},"jY":{"bd":[],"cn":[]},"eR":{"bd":[],"cn":[]},"hw":{"X":[]},"iG":{"dD":["1"],"fV":["1"]},"e9":{"aF":["1"]},"fv":{"uQ":["1"],"xa":["1"],"eh":["1"]},"dA":{"ls":["1"],"fv":["1"],"uQ":["1"],"xa":["1"],"eh":["1"]},"dE":{"iE":["1"],"aF":["1"],"aF.T":"1"},"ee":{"fj":["1"],"du":["1"],"eh":["1"]},"bM":{"ln":["1"]},"fj":{"du":["1"],"eh":["1"]},"iE":{"aF":["1"]},"ef":{"cU":["1"]},"i3":{"cU":["@"]},"lC":{"cU":["@"]},"fk":{"du":["1"]},"i7":{"aF":["1"],"aF.T":"1"},"eY":{"h":["1"],"h.E":"1"},"ep":{"K":["1"]},"eg":{"cV":["1"]},"i5":{"cV":["1"]},"dU":{"y":["1"],"h":["1"],"h.E":"1"},"i4":{"K":["1"]},"eZ":{"S":["1"],"y":["1"],"h":["1"],"h.E":"1","S.E":"1"},"ie":{"K":["1"]},"bz":{"ar":["bz"]},"kr":{"aB":[]},"a1":{"E":["2","3"]},"cD":{"bn":[],"p":[]},"ja":{"aq":["cD"],"aq.T":"cD"},"eH":{"M":[],"p":[]},"eL":{"M":[],"p":[]},"jH":{"M":[],"p":[]},"kk":{"M":[],"p":[]},"a2":{"M":[],"p":[]},"dx":{"M":[],"p":[]},"jC":{"M":[],"p":[]},"e_":{"bn":[],"p":[]},"jT":{"aq":["e_"],"aq.T":"e_"},"by":{"bn":[],"p":[]},"jr":{"aq":["by"],"aq.T":"by"},"js":{"M":[],"p":[]},"eK":{"bn":[],"p":[]},"jA":{"aq":["eK"],"aq.T":"eK"},"jD":{"M":[],"p":[]},"h8":{"M":[],"p":[]},"jQ":{"M":[],"p":[]},"jS":{"M":[],"p":[]},"k2":{"M":[],"p":[]},"ki":{"M":[],"p":[]},"cO":{"M":[],"p":[]},"kt":{"M":[],"p":[]},"kA":{"M":[],"p":[]},"fe":{"bn":[],"p":[]},"l7":{"aq":["fe"],"aq.T":"fe"},"de":{"bn":[],"p":[]},"lm":{"aq":["de"],"aq.T":"de"},"dl":{"bn":[],"p":[]},"jV":{"aq":["dl"],"aq.T":"dl"},"kj":{"M":[],"p":[]},"jm":{"na":[]},"jo":{"na":[]},"eI":{"e9":["n<e>"],"aF":["n<e>"],"aF.T":"n<e>","e9.T":"n<e>"},"eJ":{"aB":[]},"kJ":{"fM":[]},"l_":{"hN":[]},"fN":{"a1":["c","c","1"],"E":["c","1"],"a1.K":"c","a1.V":"1","a1.C":"c"},"eG":{"M":[],"p":[]},"ck":{"bT":[],"uN":[],"e7":[]},"jR":{"M":[],"p":[]},"eD":{"p":[]},"lt":{"bm":[],"u":[],"a3":[]},"d7":{"M":[],"p":[]},"mp":{"M":[],"p":[]},"ml":{"M":[],"p":[]},"mm":{"M":[],"p":[]},"mn":{"M":[],"p":[]},"mo":{"M":[],"p":[]},"mr":{"M":[],"p":[]},"mv":{"M":[],"p":[]},"me":{"M":[],"p":[]},"mu":{"M":[],"p":[]},"mg":{"M":[],"p":[]},"j4":{"M":[],"p":[]},"mt":{"M":[],"p":[]},"mw":{"M":[],"p":[]},"j3":{"M":[],"p":[]},"mq":{"M":[],"p":[]},"md":{"M":[],"p":[]},"mf":{"M":[],"p":[]},"j5":{"M":[],"p":[]},"lu":{"jn":[]},"cx":{"jn":[]},"lS":{"jn":[]},"aR":{"zD":[]},"dB":{"zG":[]},"dJ":{"us":[]},"lL":{"A1":[]},"ik":{"wu":[]},"lT":{"wu":[]},"m7":{"ll":[]},"er":{"kV":[]},"aI":{"kV":[]},"l5":{"hS":[]},"dH":{"hR":[]},"ag":{"hU":[]},"k":{"hU":[]},"ct":{"V":["1"]},"hh":{"dZ":[],"e0":[]},"bn":{"p":[]},"c4":{"p":[]},"lM":{"bm":[],"u":[],"a3":[]},"c5":{"p":[]},"aW":{"u":[],"a3":[]},"dZ":{"e0":[]},"kX":{"u":[],"a3":[]},"M":{"p":[]},"kY":{"u":[],"a3":[]},"dr":{"bn":[],"p":[]},"fg":{"c5":[],"p":[]},"kH":{"e3":["dr"],"aq":["dr"],"aq.T":"dr"},"iJ":{"aW":[],"u":[],"a3":[],"fi":[]},"iA":{"X":[]},"kh":{"M":[],"p":[]},"f0":{"X":[]},"jI":{"M":[],"p":[]},"hb":{"c5":[],"p":[]},"ha":{"c5":[],"p":[]},"jU":{"Ag":[]},"kM":{"AW":[]},"kL":{"f7":[]},"dt":{"bn":[],"p":[]},"hD":{"e3":["dt"],"aq":["dt"],"aq.T":"dt"},"kv":{"aB":[]},"kx":{"eS":[]},"lf":{"eS":[]},"lk":{"eS":[]},"bb":{"m6":["1"]},"av":{"cB":["1"]},"aV":{"cB":["1"]},"e4":{"aB":[]},"bq":{"aN":["1"]},"b0":{"aN":["1"]},"bj":{"aN":["1"]},"cH":{"bl":[],"F0":[],"c7":[],"bk":[]},"bl":{"c7":[]},"bf":{"c7":[]},"aD":{"bl":[],"bf":["1"],"ce":[],"c7":[],"bk":[]},"aL":{"v1":[]},"aO":{"v1":[]},"b7":{"aP":["1"]},"fK":{"aN":["1"]},"kB":{"cG":[]},"kC":{"cG":[]},"kD":{"cG":[]},"kE":{"cG":[]},"kF":{"cG":[]},"h1":{"f3":[]},"da":{"ce":[],"bk":[]},"ff":{"da":[],"ce":[],"bk":[]},"ev":{"cM":["1"],"ab":["1"],"aD":["1"],"bl":[],"bf":["1"],"ce":[],"c7":[],"bk":[]},"fF":{"ev":["1","1"],"cM":["1"],"ab":["1"],"aD":["1"],"bl":[],"bf":["1"],"ce":[],"c7":[],"bk":[],"ev.0":"1"},"cg":{"cy":["1","2"],"ah":["1","2"],"w":["1","2"]},"iH":{"iV":["1"],"cg":["1","1"],"cy":["1","1"],"ah":["1","1"],"dv":["1"],"w":["1","1"],"w.0":"1","w.1":"1","ah.1":"1","cy.1":"1","cg.0":"1","cg.1":"1"},"d9":{"ab":["1"],"aD":["1"],"bl":[],"bf":["1"],"ce":[],"c7":[],"bk":[]},"bQ":{"bH":["1","2","3"],"ah":["1","2"],"w":["1","2"]},"ab":{"aD":["1"],"bl":[],"bf":["1"],"ce":[],"c7":[],"bk":[]},"e5":{"hu":[]},"h0":{"hu":[]},"ju":{"X":[]},"e6":{"b7":["1"],"aP":["1"],"b7.0":"1"},"dk":{"b7":["2"],"aP":["2"],"b7.0":"2"},"hB":{"bf":["1"],"c7":[]},"lc":{"aB":[]},"db":{"c8":[]},"lB":{"fi":[]},"bZ":{"fd":["1"]},"hM":{"d9":["1","1","1"],"cM":["1"],"ab":["1"],"aD":["1"],"bl":[],"bf":["1"],"ce":[],"c7":[],"bk":[]},"fu":{"bQ":["1","1","1"],"bH":["1","1","1"],"ah":["1","1"],"dv":["1"],"w":["1","1"],"w.0":"1","w.1":"1","bH.1":"1","ah.1":"1","bQ.0":"1","bQ.1":"1","bQ.2":"1"},"hz":{"d9":["1","1","1"],"cM":["1"],"ab":["1"],"aD":["1"],"bl":[],"bf":["1"],"ce":[],"c7":[],"bk":[]},"fE":{"bQ":["1","1","1"],"bH":["1","1","1"],"ah":["1","1"],"dv":["1"],"w":["1","1"],"w.0":"1","w.1":"1","bH.1":"1","ah.1":"1","bQ.0":"1","bQ.1":"1","bQ.2":"1"},"jK":{"cb":[],"ar":["cb"]},"fo":{"cQ":[],"cs":[],"ar":["cs"]},"cb":{"ar":["cb"]},"kS":{"cb":[],"ar":["cb"]},"cs":{"ar":["cs"]},"kT":{"cs":[],"ar":["cs"]},"kU":{"aB":[]},"fb":{"bt":[],"aB":[]},"fc":{"cs":[],"ar":["cs"]},"cQ":{"cs":[],"ar":["cs"]},"dg":{"W":[]},"kg":{"al":[],"W":[]},"al":{"W":[]},"cw":{"Z":[]},"lj":{"W":[]},"dF":{"cp":["dF<1>"],"cp.E":"dF<1>"},"kW":{"X":[]},"l0":{"bt":[],"aB":[]}}'))
B.xh(b.typeUniverse,JSON.parse('{"cU":1,"fK":1,"lU":2,"il":2,"io":1,"iW":2,"iD":1,"iU":1,"j6":1,"hZ":1,"ip":1,"iq":1}'))
var y={c:" must not be greater than the number of characters in the file, ",n:" was disposed during loading state, yet no value could be emitted.",a:"===== asynchronous gap ===========================\n"}
var x=(function rtii(){var w=B.b_
return{fG:w("da"),F:w("aL"),bm:w("@<~>"),I:w("eD"),j:w("ck"),r:w("a3"),lo:w("jq"),fW:w("ur"),kj:w("fN<c>"),V:w("cl"),cs:w("bz"),er:w("dU<w<@,@>>"),h:w("u"),fz:w("X"),mA:w("aB"),nB:w("cH"),pk:w("nW"),kI:w("nX"),c:w("bt"),gF:w("c4"),B:w("Z"),x:w("Z(c)"),gY:w("cn"),pg:w("V<@>"),p8:w("V<~>"),ig:w("c5"),a3:w("aW"),hn:w("ha"),hj:w("hb"),oA:w("a9"),m6:w("oM"),bW:w("oN"),jx:w("oO"),lm:w("h<aP<i?>>"),bq:w("h<c>"),e7:w("h<@>"),fm:w("h<e>"),ox:w("x<ck>"),i:w("x<p>"),bI:w("x<cG>"),d:w("x<Z>"),iw:w("x<V<~>>"),kG:w("x<N>"),hf:w("x<i>"),T:w("x<bk>"),f0:w("x<aD<i?>>"),l3:w("x<aE>"),kd:w("x<w<@,@>>"),m5:w("x<f3>"),G:w("x<b7<i?>>"),J:w("x<aP<@>>"),g3:w("x<+label,path(c,c)>"),kV:w("x<f7>"),mn:w("x<qd>"),E:w("x<ds>"),g1:w("x<ak>"),s:w("x<c>"),ms:w("x<al>"),g7:w("x<aS>"),dg:w("x<bK>"),lC:w("x<e>"),b9:w("x<ac?>"),cu:w("x<W?>"),t:w("x<c?>"),lp:w("x<~()?>"),m:w("N"),g:w("co"),pj:w("eZ<w<@,@>>"),gC:w("n<bk>"),hb:w("n<f7>"),bF:w("n<c>"),f4:w("n<e>"),eU:w("n<aS?>"),j9:w("R<cH,aO>"),gc:w("R<c,c>"),lO:w("R<i,n<aS>>"),af:w("R<aD<i?>,aL>"),ln:w("E<i,qd>"),je:w("E<c,c>"),av:w("E<@,@>"),i4:w("b4<c,Z>"),gQ:w("U<c,c>"),fg:w("U<c,al>"),br:w("f1"),hD:w("dq"),P:w("T"),K:w("i"),eg:w("e3<@>"),O:w("aD<i?>"),D:w("aE"),iy:w("hA"),o:w("aO"),k:w("w<@,@>"),jh:w("bf<i?>"),A:w("b6"),k6:w("bl"),e8:w("dr"),kL:w("b7<i?>"),oz:w("aP<@>"),w:w("aP<i?>"),a4:w("c8"),lu:w("f5"),mj:w("uM"),cD:w("f6"),fM:w("f8"),oN:w("qd"),dv:w("ds"),Z:w("ak"),kk:w("f9"),gk:w("bu"),nA:w("dt"),e:w("cb"),hs:w("cs"),ol:w("cQ"),l:w("W"),kP:w("bZ<c>"),mr:w("bZ<v?>"),mi:w("bn"),ft:w("M"),fw:w("aF<@>"),hL:w("hN"),N:w("c"),L:w("c(bW)"),gL:w("c(c)"),b7:w("ct<ak>"),e1:w("ct<~>"),a:w("al"),jT:w("al(c)"),ha:w("l9"),hM:w("qR"),mC:w("qS"),nn:w("qT"),ev:w("hT"),b:w("fg"),nQ:w("hU"),ph:w("cv<c,c>"),jJ:w("hW"),bT:w("fi"),k0:w("a8<a9>"),lk:w("a8<aP<@>>"),U:w("a8<c>"),lS:w("hX<c>"),iq:w("bv<hT>"),ou:w("bv<~>"),oU:w("dA<n<e>>"),lL:w("i5<w<@,@>>"),jz:w("z<hT>"),j_:w("z<@>"),W:w("z<~>"),C:w("aS"),mp:w("ia<i?,i?>"),nR:w("bK"),_:w("ce"),d1:w("bM<i?>"),hW:w("cf<N>"),jP:w("cf<w<@,@>>"),y:w("v"),mM:w("v(a9)"),iW:w("v(i)"),bb:w("v(aP<@>)"),Q:w("v(c)"),aP:w("v(aS)"),z:w("@"),mY:w("@()"),mq:w("@(i)"),S:w("e"),iL:w("dh?"),cO:w("n<Ex>?"),be:w("n<aP<@>>?"),bP:w("n<ak>?"),R:w("n<~()>?"),jI:w("n<~(i,W)>?"),n:w("E<c,c>?"),h9:w("E<c,i?>?"),X:w("i?"),dI:w("aE?"),p:w("hA?"),dM:w("w<@,@>?"),jv:w("c?"),jt:w("c(bW)?"),dU:w("fg?"),lT:w("cU<@>?"),dd:w("aS?"),aX:w("iJ?"),u:w("v?"),h5:w("v(i)?"),Y:w("~()?"),c4:w("~()?(fi,ec)"),bl:w("~(N)?"),gs:w("~(i,W)?"),aD:w("~(i?{url:c?})?"),cZ:w("ba"),H:w("~"),M:w("~()"),q:w("~(bb<@>)"),k1:w("~(i?,i?)"),v:w("~(N)"),nw:w("~(n<e>)"),i6:w("~(i)"),f:w("~(i,W)"),iR:w("~(aD<@>)"),kC:w("~(w<@,@>)"),lt:w("~(e)"),lD:w("~(e,@)")}})();(function constants(){var w=a.makeConstList
D.ai=new A.de(null)
D.r=new A.fI("center",2,"center")
D.aj=new A.fI("end",4,"end")
D.ak=new A.fI("start",3,"start")
D.N=new A.mE(3,"center")
D.an=new A.fL(!1,!0,2,"head")
D.ao=new A.fL(!0,!1,0,"html")
D.bN=new A.mS(4,"solid")
D.aC=new A.i7(B.b_("i7<n<e>>"))
D.ap=new A.eI(D.aC)
D.G=new A.eR(A.E3(),B.b_("eR<e>"))
D.ar=new A.h1()
D.X=new A.hR()
D.P=new A.hS()
D.I=new A.qX()
D.aA=new A.lu()
D.aB=new A.lB()
D.Y=new A.lC()
D.aF=new A.jE("not-allowed")
D.A=new A.jE("pointer")
D.aG=new A.eM(1,"live")
D.aH=new A.dh(0,"liveOrRefresh")
D.e=new A.nG(4,"flex")
D.aJ=new B.b1(2e5)
D.aK=new B.b1(64e5)
D.q=new A.jL("column",2,"column")
D.t=new A.jL("row",0,"row")
D.K=new A.nV(1,"wrap")
D.v=new A.jM("500",8,"w500")
D.o=new A.jM("400",7,"w400")
D.aL=new A.e_(null)
D.aM=new A.dl(null)
D.Z=new A.a9("datetime-local",5,"dateTimeLocal")
D.a_=new A.a9("checkbox",2,"checkbox")
D.a0=new A.a9("color",3,"color")
D.a1=new A.a9("date",4,"date")
D.a2=new A.a9("file",7,"file")
D.a3=new A.a9("month",10,"month")
D.a4=new A.a9("number",11,"number")
D.a5=new A.a9("radio",13,"radio")
D.a6=new A.a9("range",14,"range")
D.B=new A.a9("text",0,"text")
D.a7=new A.a9("time",19,"time")
D.a8=new A.a9("week",21,"week")
D.x=new A.hg("space-between",6,"spaceBetween")
D.C=new A.hg("center",0,"center")
D.b2=new A.hg("space-around",7,"spaceAround")
D.aN=new A.a9("button",1,"button")
D.aO=new A.a9("email",6,"email")
D.aP=new A.a9("hidden",8,"hidden")
D.aQ=new A.a9("image",9,"image")
D.aR=new A.a9("password",12,"password")
D.aS=new A.a9("reset",15,"reset")
D.aT=new A.a9("search",16,"search")
D.aU=new A.a9("submit",17,"submit")
D.aV=new A.a9("tel",18,"tel")
D.aW=new A.a9("url",20,"url")
D.b5=w([D.B,D.aN,D.a_,D.a0,D.a1,D.Z,D.aO,D.a2,D.aP,D.aQ,D.a3,D.a4,D.aR,D.a5,D.a6,D.aS,D.aT,D.aU,D.aV,D.a7,D.aW,D.a8],B.b_("x<a9>"))
D.b8=w([],x.i)
D.b7=w([],x.kG)
D.a9=w([],x.T)
D.b6=w([],B.b_("x<ED>"))
D.ba=w([],x.kV)
D.bg={"iso_8859-1:1987":0,"iso-ir-100":1,"iso_8859-1":2,"iso-8859-1":3,latin1:4,l1:5,ibm819:6,cp819:7,csisolatin1:8,"iso-ir-6":9,"ansi_x3.4-1968":10,"ansi_x3.4-1986":11,"iso_646.irv:1991":12,"iso646-us":13,"us-ascii":14,us:15,ibm367:16,cp367:17,csascii:18,ascii:19,csutf8:20,"utf-8":21}
D.bb=new B.br(D.bg,[C.p,C.p,C.p,C.p,C.p,C.p,C.p,C.p,C.p,C.m,C.m,C.m,C.m,C.m,C.m,C.m,C.m,C.m,C.m,C.m,C.n,C.n],B.b_("br<c,dj>"))
D.z=new A.hy("EndOfString")
D.ab=new A.hy("Eol")
D.bi=new A.hy("FieldDelimiter")
D.aI=new A.dh(1,"reload")
D.bj=new B.ir(D.aI)
D.bk=new B.fq(0)
D.ad=new B.fr(null,null)
D.bf={riverpod:0,hooks_riverpod:1,flutter_riverpod:2,riverpod_generator:3}
D.bn=new A.h_(D.bf,4,B.b_("h_<c>"))
D.E=new A.qE(1,"blank")
D.af=new A.l4("center",4,"center")
D.L=new A.l4("start",0,"start")
D.ag=new A.l5(0,"underline")
D.bw=B.bx("hh")
D.bE=new B.bo("black")
D.bG=new B.bo("transparent")
D.h=new B.bo("white")
D.j=new A.dJ("--textBlack")
D.F=new A.dJ("--backgroundTheme")
D.l=new A.dJ("--greenPrimary")
D.T=new A.dJ("--white")
D.f=new A.dJ("--primaryColor")})();(function staticFields(){$.x_=""
$.x0=null
$.uD=B.A(x.N,x.je)
$.oY=function(){var w=x.N
return B.a6(["en","English","vi","Ti\u1ebfng Vi\u1ec7t","ko","\ud55c\uad6d\uc5b4","ja","\u65e5\u672c\u8a9e"],w,w)}()
$.wl=!1
$.vQ=B.A(B.b_("fL"),B.b_("ji"))
$.xF=null
$.tm=null
$.c6=null})();(function lazyInitializers(){var w=a.lazyFinal,v=a.lazy
w($,"FO","zp",()=>C.i.iF(new A.ub(),x.p8))
w($,"Ew","j7",()=>x.W.a($.zp()))
w($,"EE","yD",()=>{var u=new A.rH(new DataView(new ArrayBuffer(B.Cl(8))))
u.jH()
return u})
v($,"Aq","vu",()=>A.Ar())
w($,"Ey","ul",()=>A.wR(new A.oW(),x.u))
w($,"Ez","bi",()=>A.wR(new A.oZ(),x.N))
w($,"Eo","yx",()=>B.L("^[\\w!#%&'*+\\-.^`|~]+$",!0,!1))
w($,"Fl","z3",()=>B.L('["\\x00-\\x1F\\x7F]',!0,!1))
w($,"FQ","zr",()=>B.L('[^()<>@,;:"\\\\/[\\]?={} \\t\\x00-\\x1F\\x7F]+',!0,!1))
w($,"Fw","zc",()=>B.L("(?:\\r\\n)?[ \\t]+",!0,!1))
w($,"Fz","ze",()=>B.L('"(?:[^"\\x00-\\x1F\\x7F\\\\]|\\\\.)*"',!0,!1))
w($,"Fy","zd",()=>B.L("\\\\(.)",!0,!1))
w($,"FN","zo",()=>B.L('[()<>@,;:"\\\\/\\[\\]?={} \\t\\x00-\\x1F\\x7F]',!0,!1))
w($,"FS","zs",()=>B.L("(?:"+$.zc().a+")*",!0,!1))
w($,"Fa","yY",()=>B.ey(B.eC(),"HTMLAnchorElement",x.g))
w($,"Fe","z_",()=>B.ey(B.eC(),"HTMLTextAreaElement",x.g))
w($,"Fc","yZ",()=>B.ey(B.eC(),"HTMLOptionElement",x.g))
w($,"F8","yX",()=>B.ey(B.eC(),"Comment",x.g))
w($,"FC","vE",()=>B.L("^\\$(.*)$",!0,!1))
w($,"F7","vy",()=>{var u=null,t=A.y9(u),s=new A.hz(new A.tg(),u,u,u,u,u,t,!1,B.b_("hz<fJ>"))
s.dZ(t,u,!1,u,u)
return s})
v($,"EH","vv",()=>A.AU(B.a([],x.E),B.aH(""),C.D))
w($,"Fx","vD",()=>B.L(":(\\w+)(\\((?:\\\\.|[^\\\\()])+\\))?",!0,!1))
v($,"EC","mx",()=>new A.pf(new A.jU(),new A.kM()))
w($,"FT","zt",()=>A.w0($.j9()))
w($,"FL","mz",()=>new A.jB($.vw(),null))
w($,"EK","yE",()=>new A.kx(B.L("/",!0,!1),B.L("[^/]$",!0,!1),B.L("^/",!0,!1)))
w($,"EM","j9",()=>new A.lk(B.L("[/\\\\]",!0,!1),B.L("[^/\\\\]$",!0,!1),B.L("^(\\\\\\\\[^\\\\]+\\\\[^\\\\/]+|[a-zA-Z]:[/\\\\])",!0,!1),B.L("^[/\\\\](?![/\\\\])",!0,!1)))
w($,"EL","j8",()=>new A.lf(B.L("/",!0,!1),B.L("(^[a-zA-Z][-+.a-zA-Z\\d]*://|[^/])$",!0,!1),B.L("[a-zA-Z][-+.a-zA-Z\\d]*://[^/]*",!0,!1),B.L("^/",!0,!1)))
w($,"EJ","vw",()=>A.B5())
w($,"EG","fG",()=>{var u=x.k6,t=x.N
return new A.q5(B.A(u,t),B.A(u,t),B.a([],B.b_("x<jN>")),B.A(t,x.X))})
w($,"FK","zn",()=>B.L("^#\\d+\\s+(\\S.*) \\((.+?)((?::\\d+){0,2})\\)$",!0,!1))
w($,"FF","zi",()=>B.L("^\\s*at (?:(\\S.*?)(?: \\[as [^\\]]+\\])? \\((.*)\\)|(.*))$",!0,!1))
w($,"FG","zj",()=>B.L("^(.*?):(\\d+)(?::(\\d+))?$|native$",!0,!1))
w($,"FJ","zm",()=>B.L("^\\s*at (?:(?<member>.+) )?(?:\\(?(?:(?<uri>\\S+):wasm-function\\[(?<index>\\d+)\\]\\:0x(?<offset>[0-9a-fA-F]+))\\)?)$",!0,!1))
w($,"FE","zh",()=>B.L("^eval at (?:\\S.*?) \\((.*)\\)(?:, .*?:\\d+:\\d+)?$",!0,!1))
w($,"Fm","z4",()=>B.L("(\\S+)@(\\S+) line (\\d+) >.* (Function|eval):\\d+:\\d+",!0,!1))
w($,"Fo","z6",()=>B.L("^(?:([^@(/]*)(?:\\(.*\\))?((?:/[^/]*)*)(?:\\(.*\\))?@)?(.*?):(\\d*)(?::(\\d*))?$",!0,!1))
w($,"Fq","z8",()=>B.L("^(?<member>.*?)@(?:(?<uri>\\S+).*?:wasm-function\\[(?<index>\\d+)\\]:0x(?<offset>[0-9a-fA-F]+))$",!0,!1))
w($,"FA","zf",()=>B.L("^.*?wasm-function\\[(?<member>.*)\\]@\\[wasm code\\]$",!0,!1))
w($,"Fr","z9",()=>B.L("^(\\S+)(?: (\\d+)(?::(\\d+))?)?\\s+([^\\d].*)$",!0,!1))
w($,"F6","yW",()=>B.L("<(<anonymous closure>|[^>]+)_async_body>",!0,!1))
w($,"Fu","zb",()=>B.L("^\\.",!0,!1))
w($,"Eu","yB",()=>B.L("^[a-zA-Z][-+.a-zA-Z\\d]*://",!0,!1))
w($,"Ev","yC",()=>B.L("^([a-zA-Z]:[\\\\/]|\\\\\\\\)",!0,!1))
w($,"FH","zk",()=>B.L("\\n    ?at ",!0,!1))
w($,"FI","zl",()=>B.L("    ?at ",!0,!1))
w($,"Fn","z5",()=>B.L("@\\S+ line \\d+ >.* (Function|eval):\\d+:\\d+",!0,!1))
w($,"Fp","z7",()=>B.L("^(([.0-9A-Za-z_$/<]|\\(.*\\))*@)?[^\\s]*:\\d*$",!0,!0))
w($,"Fs","za",()=>B.L("^[^\\s<][^\\s]*( \\d+(:\\d+)?)?[ \\t]+[^\\s]+$",!0,!0))
w($,"FR","vG",()=>B.L("^<asynchronous suspension>\\n?$",!0,!0))
v($,"EY","yQ",()=>new A.nA())
w($,"EX","yP",()=>{var u,t=J.wf(256,x.N)
for(u=0;u<256;++u)t[u]=C.a.dk(C.d.fe(u,16),2,"0")
return t})
w($,"Eq","yy",()=>$.yD())})()};
(a=>{a["FleNvCNJ7vebQzMzyeqhFF1uimk="]=a.current})($__dart_deferred_initializers__);
//# sourceMappingURL=main.client.dart.js_1.part.js.map
