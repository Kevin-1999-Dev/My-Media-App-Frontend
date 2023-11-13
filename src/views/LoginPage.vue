<template>
  <!-- Whats New Start -->
  <div class="d-flex justify-content-center">
    <button class="btn btn-dark text-white mr-2" @click="homePage()">Home</button>
  </div>
  <section class="whats-news-area pt-50 pb-20">
    <div class="container col-5">
        <div class="shadow-sm p-5">
          <div class="alert alert-danger" role="alert" v-if="error">
            {{ errorMessage }}
          </div>
          <label >Email</label>
          <input type="email"  class="form-control mb-3" v-model="userData.email" placeholder="Enter Your Email...">
        
          <label >Password</label>
          <input type="password"  class="form-control mb-3" v-model="userData.password" placeholder="Enter Your Password...">
         
          <button class="btn btn-danger text-white" @click="login()">Login</button>
        </div>
    </div>
  </section>
  <!-- Whats New End -->

  <!--Start pagination -->
  <!-- <div class="pagination-area pb-45 text-center">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="single-wrap d-flex justify-content-center">
            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-start">
                <li class="page-item">
                  <a class="page-link" href="details.html"
                    ><span class="flaticon-arrow roted"></span
                  ></a>
                </li>
                <li class="page-item active">
                  <a class="page-link" href="details.html">01</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="details.html">02</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="details.html">03</a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="details.html"
                    ><span class="flaticon-arrow right-arrow"></span
                  ></a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <!-- End pagination  -->
</template>

<script src="../js/loginPage.js"></script>


