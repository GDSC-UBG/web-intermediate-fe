//variabel
//var
// var nama = 'web'
// console.log(nama)
//let
// let angka = 5;
// console.log(angka)
// //const
// const umur = 20.5
// // console.log(umur)

// nama = 'intermediate'
// console.log(nama)

// umur = 20 + 3
// console.log(umur)

// const cek = true;
// const cek2 = false;
// const cek3 = 5 < 3
// const cek4 = "1" == 1
// const cek5 = "1" === 1

//pengkodisian
// if(cek4 ) {
//     console.log('ini adalah pengkodisian')
// }

// if( false || false) {
//     console.log('ini adalah pengkondisian 2')
// } else {
//     console.log('ini adalah pengkondisian 3')
    
// }

// let nama = `gdsc`
// // for
// for(let i = 0; i < 9; i++) {
//     console.log(`selamat datang ${nama}`)
// }

// let angka = 5
// while(angka > 1) {
//     console.log(`nama saya ${nama}`)
//     angka -= 1 
// }

// const mhs = ['dion', 20, 'ilkom', 'gds', true]

// mhs.push('osi')
// mhs[2] = 'dkv'
// for(let dataMhs of mhs) {
//     console.log(dataMhs)
// }

// for of
// while

// menebak angka
//prompt
//alert
//confirm

// let nim = prompt('masukan nim')
// alert("selamat datang " + nim)

// confirm('apakah ingin lanjut')

// latihan tebak angka


let ulang = true

while(ulang) {

    const komputer = Math.floor( Math.random() * 10 ) // dari nol  sampai 9
    const user = prompt(`masukan angka tebakan anda :`)
    
    if(komputer == user) {
        alert('tebakan benar')
    } else {
        alert('tebakan anda salah')
    }
    alert(`angka  yang dimasukan oleh komputer adalah ${komputer}`)

    ulang = confirm('mau ulang ?')
}

const angkaRandom = Math.floor(Math.random() * 10)
alert(angkaRandom)