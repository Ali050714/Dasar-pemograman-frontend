var datamakanan = [
    "Pangsit",
    "Mie Ayam",
    "Bakso"
];

function showmakanan(){
    var listmakanan = document.getElementById("list-makanan")
    listmakanan.innerHTML = "";

    for(let i = 0; i < datamakanan.length; i++ ){
        var btnEdit = "<a href = '#' onclick = 'editmakanan("+i+")'> Edit</a>";
        var btnHapus = "<a href = '#' onclick = 'deletemakanan("+i+")'> Hapus</a>";

        listmakanan.innerHTML += "<li>" + datamakanan[i] + " ["+btnEdit + " | "+ btnHapus +"]</li>";
    }
}

function addmakanan(){
    var input = document.querySelector("input[name = makanan]");
    datamakanan.push(input.value);
    showmakanan();
}

function editmakanan(id){
    var newmakanan = prompt("nama baru", datamakanan[id]);
    datamakanan[id] = newmakanan;
    showmakanan();
}

function deletemakanan(id){
    datamakanan.splice(id, 1);
    showmakanan();
}

showmakanan();