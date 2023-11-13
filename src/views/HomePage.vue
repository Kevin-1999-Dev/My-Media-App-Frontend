<template>
  <!-- Whats New Start -->
  <div class="d-flex justify-content-center">
    <button class="btn btn-dark text-white" v-if="userStatus" @click="loginPage()">Login</button>
    <button class="btn btn-dark text-white" v-if="!userStatus" @click="logout()">Logout</button>
  </div>
  <section class="whats-news-area pt-50 pb-20">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="row d-flex justify-content-between">
            <div class="col-lg-3 col-md-3">
              <div class="section-tittle mb-30">
                <h3>Whats New</h3>
              </div>
            </div>
            <div class="col-lg-9 col-md-9">
              <div class="properties__button">
                <!--Nav Button  -->
                <nav>
                  <div
                    class="nav nav-tabs"
                    id="nav-tab"
                    role="tablist"
                    
                  >
                    <a
                      class="nav-item nav-link active"
                      id="nav-home-tab"
                      data-toggle="tab"
                      href="details.htmlnav-home"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                      @click="searchCategory('')"
                      >All</a
                    >
                    <a
                      class="nav-item nav-link"
                      id="nav-profile-tab"
                      data-toggle="tab"
                      href="details.htmlnav-profile"
                      role="tab"
                      v-for="(category, index) in categoryList"
                    :key="index"
                    @click="searchCategory(category.category_id)"
                      aria-controls="nav-profile"
                      aria-selected="false"
                      >{{ category.title }}</a
                    >
                  </div>
                </nav>
                <!--End Nav Button  -->
              </div>
            </div>
          </div>
          <div class="row justify-content-end">
            <div class="my-5 d-flex">
              <input
                type="text"
                v-model="searchKey"
                v-on:keyup.enter="search()"
                name=""
                id=""
                class="form-control"
              />
              <h4 class="ml-2" @click="search()">
                <i class="fa-solid fa-magnifying-glass"></i>
              </h4>
            </div>
            <div class="col-12">
              <!-- Nav Card -->
              <div class="tab-content" id="nav-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  <span v-if="userStatus" class="d-flex justify-content-center bg-danger text-white rounded p-5 h3">Do not have permission</span>
                  <span v-else>
                    <div class="whats-news-caption">
                    <div
                      v-if="postList.length == 0"
                      class="text-center"
                      style="height: 70vh"
                    >
                      <h1 class="text-danger bg-dark py-4">
                        There is no Data...
                      </h1>
                    </div>
                    <div class="row" v-else>
                      <div
                        
                        class="col-lg-6 col-md-6"
                        v-for="(post, index) in postList"
                        :key="index"
                      >
                        <div class="single-what-news mb-100" @click="newsDetails(post.post_id)">
                          <div class="what-img">
                            <img :src="post.image" alt="" />
                          </div>
                          <div class="what-cap">
                            <span class="color1">CODE LAB</span>
                            <h4>
                              <a href="details.html">{{ post.title }}</a>
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </span>
                </div>
              </div>
              <!-- End Nav Card -->
            </div>
          </div>
        </div>
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

<script src="../js/homePage.js"></script>


