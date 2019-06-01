<template>
  <div class="chat container">
    <h2 class="center teal-text">Ninja Chat</h2>
    <div class="card">
      <div class="card-content">
        <ul class="messages">
          <!-- firestoreから取得したデータを繰り返し表示-->
          <li>
            <span class="teal-text">Name</span>
            <span class="gray-text text-darken-3">message</span>
            <span class="grey-text time">time</span>
          </li>
        </ul>
      </div>
      <div class="card-action">
        <!-- チャット送信用のフォームをコンポーネントで表示、属性で変数nameを子コンポーネントへ渡す -->
        <NewMessage :name="name"/>
      </div>
    </div>
  </div>
</template>
<script>
import NewMessage from "@/components/NewMessage";

export default {
  name: "Chat",
  props: ["name"],
  components: {
    NewMessage
  },
  data() {
    return {};
  }
};
</script>
<style>
.chat h2 {
  font-size: 2.6em;
  margin-bottom: 40px;
}
.chat span {
  font-size: 1.4em;
}
.chat .time {
  display: block;
  font-size: 1.2em;
}
</style>
