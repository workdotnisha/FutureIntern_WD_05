const wrapper = document.querySelector('.wrapper');
const backBtn = document.querySelector('.back-btn');
const menuBtn = document.querySelector('.menu-btn');


const toggleScreen = () => {
    wrapper.classList.toggle('show-category');
};

menuBtn.addEventListener('click', toggleScreen);
backBtn.addEventListener('click', toggleScreen);

const addTaskBtn = document.querySelector('.add-task-btn');
const addTaskForm = document.querySelector('.add-task');
const blackBackdrop = document.querySelector('.black-backdrop');

const toggleAddTaskForm = () => {
    addTaskForm.classList.toggle('active');
    blackBackdrop.classList.toggle('active');
    addTaskBtn.classList.toggle('active');
}

addTaskBtn.addEventListener('click', toggleAddTaskForm);
blackBackdrop.addEventListener('click', toggleAddTaskForm);

let categories = [
    {
        title: "Personal",
        img: "girl.png",
    },
    {
        title: "Work",
        img: "briefcase.png",
    },
    {
        title: "Study",
        img: "study.png",
    },
    {
        title: "Shopping",
        img: "shopping.png",
    },
    {
        title: "Fitness",
        img: "Fitness.png",
    },
    {
        title: "Finance",
        img: "saving.png",
    },
    {
        title: "Coding",
        img: "coding.png",
    },
    {
        title: "Health",
        img: "healthcare.png",
    },
    {
        title: "Others",
        img: "others.png",
    }
];

let tasks = [
    {
        id: 1,
        task:"do",
        category:"Health",
        completed:false,
    },

];

let selectedCategory = categories[0];

const categoriesContainer = document.querySelector('.categories');
const categoryTitle = document.querySelector('.category-title');
const categoryTasks = document.querySelector('.category-tasks');
const categoryImg = document.querySelector('#category-img');
const totalTasks = document.querySelector('.totalTasks');

const calculaeTotal = () => {
    const categoryTasks = tasks.filter(
        (task) => task.category.toLowerCase() === selectedCategory.title.toLowerCase()
    );
    categoryTasks.innerHTML = `${categoryTasks.length} Tasks`;
    totalTasks.innerHTML = tasks.length;
}


const renderCategories = () => {
    categoriesContainer.innerHTML = " ";
    categories.forEach((category) => {
       const categoryTasks = tasks.filter(
        (task) => task.category.toLowerCase === category.title.toLowerCase()
       );

       const div = document.createElement('div');
       div.classList.add('category');
       div.addEventListener('click', () => {
        wrapper.classList.add('show-category');
        selectedCategory = categories;
        categoryTitle.innerHTML = category.title;
        categoryImg.src = `images/${category.img}`;
       });
       div.innerHTML = ` <div class="left">
                            <img src="images/${category.img}" alt="${category.title}">
                            <div class="content">
                                <h1>${category.title}</h1>
                                <p>${categoryTasks.length} Tasks</p>
                            </div>
                        </div>
                        <div class="options">
                            <div class="toggle-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="none"
                                    viewBox="0 0 48 48" id="three-dots">
                                    <path fill="#000"
                                        d="M24 15C26.4853 15 28.5 12.9853 28.5 10.5 28.5 8.01472 26.4853 6 24 6 21.5147 6 19.5 8.01472 19.5 10.5 19.5 12.9853 21.5147 15 24 15zM24 28.5C26.4853 28.5 28.5 26.4853 28.5 24 28.5 21.5147 26.4853 19.5 24 19.5 21.5147 19.5 19.5 21.5147 19.5 24 19.5 26.4853 21.5147 28.5 24 28.5zM24 42C26.4853 42 28.5 39.9853 28.5 37.5 28.5 35.0147 26.4853 33 24 33 21.5147 33 19.5 35.0147 19.5 37.5 19.5 39.9853 21.5147 42 24 42z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        `;
        categoriesContainer.appendChild(div);
    });
};

renderCategories();