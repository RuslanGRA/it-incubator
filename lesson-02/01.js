/*
* Создать программный код, который определяет, может ли пользователь получить доступ к ресурсу на основе его роли и наличия разрешений.
* Полученное булево значение сохраните в переменной isAccess.

* Условия доступа:
* - Пользователь должен иметь статус администратора (isAdmin) или быть подтвержденным пользователем (isVerifiedUser)
* - А также пользователь должен обладать специальным разрешением (hasSpecialPermission) или временным пропуском (hasTemporaryPass)
*/

// тестовые данные (значения можно менять)
const isAdmin = false //администратор
const isVerifiedUser = true //подтвержденный пользователь
const hasSpecialPermission = true //специальное разрешение
const hasTemporaryPass = false //временный пропуск

let isAccess 

// your code
if (isAccess = (isAdmin || isVerifiedUser) && (hasSpecialPermission || hasTemporaryPass)) {
    console.log("Доступ разрешен");
} else {
    console.log("Доступ запрещен");
}