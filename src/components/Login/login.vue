<template>
    <div class="login">
      <div class="container">
       <div class="row">
         <div class="col-sm-1"></div>
         <div class="col-sm-6">
          <div class="leftPanel" id="left_panel">
            <div class="contentPanel" id="signIn" >
              <p class="content1"> Welcome to NYLON.</p>
              <p class="content2">To keep connected with us please login with your personal info. </p>
            <button type="button" class="btn btn-success" @click="toToggle">To Sign In</button>
            </div>
          </div>
         </div>

        <div class="col-sm-4">
        <div class="rightPanel">
          <div class="loginForm" id="login_form">
            <p class="login_page">Create Account</p>
              <div class="form-group">
                <input type="text" placeholder="UserName" class="form-control" id="userName">
              </div>
            <div class="form-group">
              <input type="password" placeholder="Password" class="form-control" id="pw1">
            </div>
            <div class="form-group">
              <input type="password" placeholder="Confirm password " class="form-control" id="pw2">
            </div>
            <div class="form-group">
              <button  type="button"  class="btn btn-success btn-block">Sign Up</button>
            </div>
          </div>
        </div>
        </div>
         <div class="col-sm-1"></div>
      </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "login",
      data(){
          return{

          }
      },
      methods:{
          toToggle:function(){
            $("#login_form").remove();
            $("#left_panel").remove();

          }


      }

    }
</script>

<style scoped>
.container{margin-top:5%;}
.leftPanel{background-color:#9fdeaf;color:white;height:500px;text-align:center;box-shadow:2px 10px 40px rgba(22,20,19,0.4);border-radius:10px;}
.contentPanel{display:block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);}
.content1{font-size:35px;}
.content2{font-size:20px;}



.rightPanel{width:50%;height:500px;}
.login_page{color:darkseagreen;font-size:25px;text-align:center;}
.loginForm{display:block;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);}
button{text-transform:uppercase;}
</style>
