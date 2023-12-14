function segitiga(n,kondisi){
if(kondisi == true){
for (let i=1; i<=n;i++){
    console.log('');
    for(let j=1; j<=i;j--){
        polaatas += "*";
    }
    console.log(polaatas);
}} else {
for (let i=1; i>=n;i--){
    console.log('');
    for(let j=1; j>=i;j++){
        polabawah += "*";
    }
    console.log(polabawah);
}}
}
segitiga(4,"terbalik")