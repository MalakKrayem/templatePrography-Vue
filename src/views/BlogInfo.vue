<template>
  <div>
    <NavBar />
    <div class="container mt-3 justify-content-center">
      <div class="row">
        <img src="../assets/bloginfo/img1.svg" alt="img1" />
      </div>
      <section class="mt-5 text-center">
        <div class="row">
          <h1>
            Lily Wong: Hand-Painted <br />
            and One-of-a-kind
          </h1>
          <span class="info pt-2">
            <img src="../assets/card3/Time_Icon-m.svg" />
            <span class="in"> 20 minutes ago</span>
            <img src="../assets/card3/Comment_Icon-m.svg" />
            <span class="in"> 28</span>
            <img src="../assets/card3/Share_Icon.svg" />
            <span class="in"> share 23</span>
          </span>
          <figure>
            <blockquote>
              <p class="info pt-5">
                * Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti eaque ad, tenetur dignissimos fugiat corrupti
                reiciendis at atque cupiditate. Autem consequuntur nesciunt
                voluptatem repellat eaque. Laudantium voluptatum placeat dolore
                ea.*
              </p>
            </blockquote>
          </figure>
        </div>
      </section>
      <section>
        <div class="row">
          <figure>
            <blockquote>
              <p class="pt-3 pl-3">What is the story hehiend your brand</p>
              <p class="pt-2 par">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi itaque maxime molestiae iure hic minus nulla
                exercitationem. Veniam, impedit aperiam. Doloribus enim
                reprehenderit accusamus harum repellat nulla maxime perspiciatis
                sit! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Excepturi itaque maxime molestiae iure hic minus nulla
                exercitationem. Veniam, impedit aperiam. Doloribus enim
                reprehenderit accusamus harum repellat nulla maxime perspiciatis
                sit! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Excepturi itaque maxime molestiae iure hic minus nulla
                exercitationem. Veniam, impedit aperiam. Doloribus enim
                reprehenderit accusamus harum repellat nulla maxime perspiciatis
                sit! Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi
              </p>
            </blockquote>
          </figure>
          <div class="container mt-3 justify-content-center">
            <div class="row m-5">
              <img src="../assets/bloginfo/img2.svg" alt="info" />
            </div>
            <figure>
              <blockquote>
                <p class="pt-2">
                  Tell us more about painting style and how you developed it.
                </p>
                <p class="pt-1 par"></p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi itaque maxime molestiae iure hic minus nulla
                  exercitationem. Veniam, impedit aperiam. Doloribus enim
                  reprehenderit accusamus harum repellat nulla maxime
                  perspiciatis sit! Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Excepturi Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Excepturi itaque maxime
                  molestiae iure hic minus nulla exercitationem. Veniam, impedit
                  aperiam. Doloribus enim reprehenderit accusamus harum repellat
                  nulla maxime perspiciatis sit! Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Excepturi
                </p>
              </blockquote>
            </figure>
          </div>
        </div>
      </section>
      <section>
        <figure>
          <blockquote>
            <p class="left-border">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              perspiciatis ut totam, quod officiis sapiente laudantium deserunt
              praesentium rerum libero voluptatum ipsa at veniam accusantium
              temporibus! Atque odio itaque at?
            </p>
          </blockquote>
        </figure>
        <figure>
          <blockquote>
            <p class="pt-5 par">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              itaque maxime molestiae iure hic minus nulla exercitationem.
              Veniam, impedit aperiam. Doloribus enim reprehenderit accusamus
              harum repellat nulla maxime perspiciatis sit! Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Excepturi Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Excepturi itaque maxime
              molestiae iure hic minus nulla exercitationem. Veniam, impedit
              aperiam. Doloribus enim reprehenderit accusamus harum repellat
            </p>
            <p class="pt-2 par">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              itaque maxime molestiae iure hic minus nulla exercitationem.
              Veniam, impedit aperiam. Doloribus enim reprehenderit accusamus
              harum repellat nulla maxime perspiciatis sit! Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Excepturi Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Excepturi itaque maxime
              molestiae iure hic minus nulla exercitationem. Veniam, impedi
            </p>
            <hr />
          </blockquote>
        </figure>
      </section>
      <section>
        <Comment />
        <AddComment />
      </section>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/layouts/TheNavbar.vue'
import Comment from '../components/blogComp/Comment.vue'
import AddComment from '../components/blogComp/AddComment.vue'
export default {
  components: {
    NavBar,
    Comment,
    AddComment,
  },
}
</script>

<style scoped>
blockquote {
  margin: 10px;
}

blockquote p {
  padding: 15px;
  margin-left: auto;
  margin-right: auto;
  width: 60%;
}
hr {
  margin-left: auto;
  margin-right: auto;
  width: 60%;
}
blockquote .left-border {
  border-left: 3px solid black;
}
.in {
  padding: 20px 20px 20px 0px;
  font-size: 12px;
}
.info {
  font-size: 13px;
  font-style: italic;
}
.par {
  font-size: 14px;
  font-weight: bold;
  white-space: pre-line;
}
</style>
