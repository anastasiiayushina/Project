function Submit()
{
	var log = "no";
	var fnameRegex = /^[А-Яа-яA-Za-z]{3,15}$/;
	var lnameRegex = /^[А-Яа-яA-Za-z]{3,15}$/;
	var emailRegex = /^[\w-\.]+@[\w-]+\.[a-z]{2,3}$/i;
	var passwordRegex = /^[А-Яа-яA-Za-z0-9]{5,15}$/;
	var repasswordRegex = /^[А-Яа-яA-Za-z0-9]{5,15}$/;
	var fname = document.form.Name.value,
	lname = document.form.LastName.value,
	femail = document.form.Email.value,
	freemail = document.form.enterEmail.value,
	fpassword = document.form.Password.value,
	frepassword = document.form.enterPassword.value,
	fmonth = document.form.birthday_month.value,
	fday = document.form.birthday_day.value,
	fyear = document.form.birthday_year.value;
  
//Проверка коректности ввода имени  
if( fname == "" )
   {document.form.Name.focus() ;
	document.getElementById("errorBox").innerHTML = "Введите ИМЯ";
	return false;}
else if(!fnameRegex.test(fname)){
    document.form.Name.focus() 
    document.getElementById("errorBox").innerHTML = "Некоректное ИМЯ (А-я A-z)";
    return false;}  
 
 //Проверка коректности ввода фамилии  
if( lname == "" )
   {document.form.LastName.focus() ;
    document.getElementById("errorBox").innerHTML = "Введите ФАМИЛИЮ";
    return false;}
else if(!lnameRegex.test(lname)){
    document.form.LastName.focus() 
    document.getElementById("errorBox").innerHTML = "Некоректная ФАМИЛИЯ (А-я A-z)";
    return false;}
   
//Проверка коректности ввода почты 
if (femail == "" )
	{document.form.Email.focus();
	document.getElementById("errorBox").innerHTML = "Введите email";
	return false;}
else if(!emailRegex.test(femail)){
	document.form.Email.focus();
	document.getElementById("errorBox").innerHTML = "Введите действительный email";
	return false;}

//Проверка коректности повторного ввода почты 
if (freemail == "" )
	{document.form.enterEmail.focus();
	document.getElementById("errorBox").innerHTML = "Повторно введите адрес email";
	return false;}
else if(!emailRegex.test(freemail)){
	document.form.enterEmail.focus();
	document.getElementById("errorBox").innerHTML = "Повторно введите действительный адрес email";
	return false;}
 
//Сравнение введенных почт на идентичность
 if(freemail !=  femail)
	{document.form.enterEmail.focus();
	document.getElementById("errorBox").innerHTML = "email не соответствуют друг другу, введите повторно";
	return false;}
   
//Проверка коректности ввода пароля 
if(fpassword == "")
	{document.form.Password.focus();
	document.getElementById("errorBox").innerHTML = "Введите пароль";
	return false;}
else if(!passwordRegex.test(fpassword))
	{document.form.Password.focus() 
	document.getElementById("errorBox").innerHTML = "Длина пароля 5-15 символов (А-я A-z 0-9)";
	return false;}
  
//Проверка коректности повторного ввода пароля 
if(frepassword == "")
	{document.form.enterPassword.focus();
	document.getElementById("errorBox").innerHTML = "Введите пароль";
	return false;}
else if(!repasswordRegex.test(frepassword))
	{document.form.enterPassword.focus() 
	document.getElementById("errorBox").innerHTML = "Длина пароля 5-15 символов (А-я A-z 0-9)";
	return false;}
  
 //Сравнение введенных паролей на идентичность
if(fpassword !=  frepassword){	
	document.form.Password.focus();
	document.getElementById("errorBox").innerHTML = "Пароли не соответствуют друг другу, введите повторно";
	return false;}
 
 //Проверка ввода месяца 
if (fmonth == "") 
	{document.form.birthday_month.focus();
	document.getElementById("errorBox").innerHTML = "Выберите месяц рождения";
	return false;}
	 
//Проверка ввода даты 
if (fday == "") 
	{document.form.birthday_day.focus();
	document.getElementById("errorBox").innerHTML = "Выберите день рождения";
	return false;}

//Проверка ввода года 
if (fyear == "") 
	{document.form.birthday_year.focus();
	document.getElementById("errorBox").innerHTML = "Выберите год рождения";
	return false;}
	
//Проверка выбран ли пол
if(document.form.radiobutton[0].checked == false && document.form.radiobutton[1].checked == false)
	{document.getElementById("errorBox").innerHTML = "Выберите Ваш пол";
	return false;}
	
//Если все введено - вывод сообщения об успешной отправке
if(fname != '' && lname != '' && femail != '' && freemail != '' && fpassword != '' && frepassword != '' && fmonth != '' && fday != '' && fyear != '')
	{
		log = "yes";
		document.getElementById("errorBox").innerHTML = "Регистрация успешно выполнена";
	}    
if (log != "no")
	{ setTimeout(redirect, 1000); }
}

function redirect() {document.location.href='../index.html'}