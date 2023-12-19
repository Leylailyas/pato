const div = document.getElementById('productsList')
const btn = document.getElementById('pagi')

let page = 1
let limit = 3

async function getProducts() {
    let skip = (page - 1) * limit;
    try {
        const response = await axios.get(`https://655c81de25b76d9884fd6913.mockapi.io/products?page=${page}&limit=${limit}&skip=${skip}`);
        const data = response.data;
        db = data

        data.forEach(item => {
            const box = document.createElement('div');
            box.className = 'boxDiv';
            box.innerHTML = `            
                <img class="apiimage" src="${item.image}" alt="">                    
                <p class='title'>${item.name}</p>
                <p class='title'>${item.date}</p>
                <button class="addtobasketbtn" onclick="addToBasket(${item.id})">Add to basket</button>

                `;
            div.appendChild(box);
        });
        page++;
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

btn.addEventListener('click', getProducts)

function addToBasket (id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.push(db.find(item => item.id == id))
    localStorage.setItem('cart', JSON.stringify(cart))
}
window.onload = () => {
    getProducts()
}


const nameinp = document.getElementById("nameinp");
const surnameinp = document.getElementById("surnameinp")
const ageinp = document.getElementById("ageinp")
const studentID = document.getElementById("idinp")
const myform = document.getElementById("formm")


function axiosPost(event) {
   event.preventDefault()
    axios.post("https://655c30caab37729791aa046b.mockapi.io/102/swpstudents", {
        name: nameinp.value,
        surname: surnameinp.value,
        age: ageinp.value,
        studentID: studentID.value
    })
}
myform.addEventListener('submit', axiosPost)