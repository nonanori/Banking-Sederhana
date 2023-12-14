// function segitigaTengah(jumlahbaris){
//     for (let i=1; i<=jumlahbaris;i++){
//         let spasi =''.repeat(jumlahbaris-1);
//         let bintang =''.repeat(i);
//         console.log(spasi+bintang);
//     }
// }

// segitigaTengah();

// function segitigaBawah(jumlahbaris){
//     for (let i=jumlahbaris; i>=1;i--){
//         let spasi =''.repeat(jumlahbaris-1);
//         let bintang =''.repeat(i);
//         console.log(spasi+bintang);
//     }
// }

// segitigaBawah();

function segitigaTengah(jumlahbaris,kondisi){
   
    if(kondisi= "terbalik"){
        for (let i=1; i<=jumlahbaris;i--){
            let spasi =''.repeat(jumlahbaris-1);
            let bintang ='*'.repeat(i);
            console.log(spasi+bintang);
        }
    }
    else{
        for (let i=jumlahbaris; i>=1;i++){
                    let spasi =''.repeat(jumlahbaris-1);
                    let bintang ='*'.repeat(i);
                    console.log(spasi+bintang);
                }
    }
}

segitigaTengah(4,"terbalik");