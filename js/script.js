// 'use strict';
document.addEventListener("DOMContentLoaded", () => {

    {
        console.warn("============================ IV week ")
        //     1. Если массив с задачами пустой то под формой нужно выводить сообщение об этом,
        //     также это же сообщение нужно выводить если вы удалите все задачи.

        //    2. В каждый элемент li добавить кнопку которая будет делать задачу выполненой.
        //     завершенные задачи должны быть подсвечены любым цветом.

        //    3. Добавить функционал отображения незавершенных задач и всех задач. 
        //    т.е у вас будет две кнопки над таблицей 1-я "показать все задачи" и 2-я 
        //    "показать незавершенные задачи", определить завершена задача или нет 
        //    можно по полю completed в объекте задачи. По умолчанию при загрузке 
        //    отображаются все задачи.

        //    ***Задача со звездочкой.** При завершении задачи в разделе 
        //    "незавершенные задачи" она должна от туда пропадать и быть видна в разделе 
        //    "все задачи" при этом во всех задачах завершенные задачи могут быть востановленны.
        //    Также в разделе "все задачи" завершенные задачи должны быть в самом низу после
        //    открытых задач.
        //       ************************************* Исходные данные *********************************

        const tasks = [{
                _id: '5d2ca9e2e03d40b326596aa7',
                completed: true,
                body: 'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
                title: 'Eu ea incididunt sunt consectetur fugiat non.',
            },
            // {
            //     _id: '5d2ca9e29c8a94095c1288e0',
            //     completed: false,
            //     body: 'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
            //     title: 'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',
            // },
            // {
            //     _id: '5d2ca9e2e03d40b3232496aa7',
            //     completed: true,
            //     body: 'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
            //     title: 'Eu ea incididunt sunt consectetur fugiat non.',
            // },
            // {
            //     _id: '5d2ca9e29c8a94095564788e0',
            //     completed: false,
            //     body: 'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
            //     title: 'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',
            // },
        ];

        //       **********************************************************************

        (function (arrOfTasks) {

            const objOfTasks = arrOfTasks.reduce((acc, task) => {
                acc[task._id] = task;
                return acc
            }, {})

            const listConteiner = document.querySelector('.list-group');
            const container = document.querySelector('.list-container');
            const form = document.forms['addTask'];
            const inputTitle = form.elements['title'];
            const inputBody = form.elements['body'];


            renderAllTasks(objOfTasks);
            form.addEventListener('submit', onFormSubmit);
            listConteiner.addEventListener('click', onClickDelete)
            listConteiner.addEventListener('click', onClickProgress)

            function renderAllTasks(taskList) {
                if (!taskList || Object.values(taskList).length == 0) {
                    console.error("NO tasks Add")
                    emptyTaskListChek(objOfTasks);
                    return;
                }
                const fragment = document.createDocumentFragment();
                Object.values(taskList).forEach((task) => { //create obj of obj
                    const li = listItemTemplate(task);
                    fragment.appendChild(li);
                })
                listConteiner.appendChild(fragment);
                createBoxBtn();

            }

            function listItemTemplate({ // create <li></li>
                _id,
                title,
                body,
                completed,
            } = {}) {
                const li = document.createElement('li');
                li.classList.add('list-group-item', 'd-flex', 'align-items-center', 'flex-wrap', 'mt-2');
                li.dataset.taskId = _id;
                // console.log(li);
                const span = document.createElement('span');
                span.textContent = title;
                span.style.fontWeight = "bold"
                // console.log(span);
                const btnDelete = document.createElement('button');
                btnDelete.classList.add('lbtn', 'btn-danger', 'ml-auto', 'delete-btn');
                btnDelete.textContent = "Delete";
                // console.log(btn);

                const btnDone = document.createElement('button');
                btnDone.classList.add('lbtn', 'mr-auto', 'progress-btn');
                btnDone.dataset.completed = completed;
                const completedData = btnDone.dataset.completed;

                if (completedData === "true") {
                    btnDone.classList.add('btn-success');
                    btnDone.textContent = "Done";
                } else {
                    btnDone.classList.add('btn-secondary');
                    btnDone.textContent = "in progress";
                }

                // console.log(btnDone);
                const article = document.createElement('p');
                article.classList.add('mt-2', 'w-100');
                article.textContent = body;
                // console.log(art);
                li.appendChild(span);
                li.appendChild(article);
                li.appendChild(btnDone);
                li.appendChild(btnDelete);
                // console.log(li)
                return li;
            }

            function onFormSubmit(e) {
                e.preventDefault();
                const titleValue = inputTitle.value;
                const bodyValue = inputBody.value;

                if (!titleValue || !bodyValue) {
                    alert('Plase add Task title and Task Body');
                    return;
                }
                const task = createNewTask(titleValue, bodyValue);
                const newLiItem = listItemTemplate(task);
                listConteiner.insertAdjacentElement("afterbegin", newLiItem);
                chekBoxBtn();
            }

            function createNewTask(title, body) { //add obj in obj
                const newTask = {
                    _id: `task-${Math.random()}`,
                    completed: false,
                    body: body,
                    title: title,
                };
                objOfTasks[newTask._id] = newTask;
                form.reset();
                const emptyList = document.getElementById('empty');
                deleteDiv(emptyList);
                return newTask;
            }

            function onClickDelete(e) {
                const target = e.target;
                if (target.classList.contains('delete-btn')) {
                    const targetLi = target.closest('[data-task-id]');
                    // console.log(targetLi)
                    const id = targetLi.dataset.taskId;
                    // console.log(id)
                    const confirmed = deleteTask(id);
                    deleteTaskHTML(confirmed, targetLi);
                }
            }

            function deleteTaskHTML(confirmed, el) { //delete element
                if (!confirmed) return;
                el.remove();
                emptyTaskListChek(objOfTasks);
            }

            function deleteTask(id) { //delete obj by id
                const isConfirm = confirm(`Are you sure, you want to delete "${objOfTasks[id].title}" ?`);
                // console.log(isConfirm)
                if (!isConfirm) return isConfirm;
                delete objOfTasks[id];
                return isConfirm;
            }

            function createDiv() { // create <div>"Task list is empty"</div>
                const div = document.createElement('div');
                div.classList.add('list-group-item', 'd-flex', 'align-items-center', 'flex-wrap', 'mt-2');
                div.id = "empty";
                div.style.backgroundColor = "antiquewhite";
                const span = document.createElement('span');
                span.style.fontWeight = "bold";
                span.style.margin = "auto";
                span.textContent = "Task list is empty";
                div.appendChild(span)
                listConteiner.appendChild(div);
            }

            function createBoxBtn() {
                container.insertAdjacentHTML('afterbegin',
                    `
                <div class="text-center box-buttons">
                <button style="width: 40%" class="btn btn-info mr-auto filter-btn">in progress</button 100px;>
                <button style="width: 40%" class="btn btn-info ml-auto filter-btn">done</button>
                </div>
                `
                );
            }

            function chekBoxBtn() {
                const boxBtn = document.querySelector('.box-buttons');
                if (!boxBtn) {
                    createBoxBtn()
                }
                return
            }

            function deleteDiv(element) {
                if (element) {
                    element.remove();
                }
                return;
            }

            function emptyTaskListChek(taskList) {
                if (Object.values(taskList).length == 0) {
                    createDiv();
                    const boxBtn = document.querySelector('.box-buttons');
                    deleteDiv(boxBtn);
                } else {
                    console.log("Task list is NOT empty", Object.values(taskList).length);
                }
            }

            function onClickProgress(e) {
                const target = e.target;
                const targetLi = target.closest('[data-task-id]');
                const id = targetLi.dataset.taskId;
                if (target.classList.contains('progress-btn' && 'btn-success')) {
                    target.classList.remove('btn-success');
                    target.classList.add('btn-secondary');
                    target.textContent = "in progress";
                    target.dataset.completed = `${objOfTasks[id].completed}`;
                } else if (target.classList.contains('progress-btn' && 'btn-secondary')) {
                    target.classList.remove('btn-secondary');
                    target.classList.add('btn-success');
                    target.textContent = "Done";
                    objOfTasks[id].completed = true;
                    target.dataset.completed = `${objOfTasks[id].completed}`;
                }
            }
        })(tasks);
    }
});