"use strict";
// ПЗ 27. Допишите код, используя DOM API.
// 1. Найдите #page-title, #task-form, #task-input, #task-list, #stats, #error.
// 3. Реализуйте updateStats() для общего числа, выполненных и оставшихся.
// 4. Реализуйте createTask(text): createElement, textContent и append.
// 5. Обработайте submit формы и проверку trim().
// 6. Делегируйте click от #task-list: toggle / up / remove.
// 7. Вызовите updateStats() после любых изменений.
console.log("ПЗ 27: стартовый проект подключён");
const h2=document.querySelector("#tasks");
const h1=document.querySelector("#page-title");
const form=document.querySelector("#task-form");
const label=document.querySelector("#task-input");
const ul=document.querySelector("#task-list");
const p1=document.querySelector("#stats");
const p2=document.querySelector("#error");


// 2. Измените заголовок через textContent; назначьте data-id исходным карточкам.

task.textContent = "Задача выполнена";
task.classList.add("done");







