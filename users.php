<?php
     include_once("adb.php");
     
     /**
	*Variables used in all the functions for Patients
	*@param int userid User ID
	*@param string username username
	*@param string firstname first name
	*@param string lastname last name
	*@param string email email
	*@param string password password
	*@param int phone phone
  *@param string organization organization
	*/

class users extends adb{
     function users(){

     }

     function newUser($username='none',$firstname='none',$lastname='none',$email='none',$password='none', $phone='none', $organization="none"){
    
          $strQuery = "insert into user SET username = '$username',firstname = '$firstname',lastname = '$lastname',email = '$email',password = '$password',phone = '$phone',organization = '$organization'";
          echo $strQuery;
          return $this->query ($strQuery);
     }

     function getUser($username='none',$password='none'){
          $strQuery="select userid from user where username='$username' & password='$password'";
          return $this->query($strQuery);
     }

     function sendsms($phone){
        $url="http://52.89.116.249:13013/cgi-bin/sendsms?username=mobileapp&password=foobar&to=".$phone."&from=Finder&smsc=nalairtel&text=You%20have%20joined%20the%20Finder%20community.%20Have%20fun%20exploring!";
        $pass = curl_init($url);
        $close = curl_exec($pass);
        echo ($close);
        //$outcome = curl_close($pass);
     }
   }
