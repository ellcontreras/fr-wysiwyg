<template>
  <div id="app" class="bg-indigo-100 p-2">
    <button
      v-for="(control, key) in controls"
      :key="key"
      @click="handleApply(control)"
      class="bg-indigo-400 p-2 border hover:bg-indigo-500 text-white border-none"
      :title="control.name"
    >
      <img :src="control.iconUrl" class="relative w-4" />
    </button>

    <div class="relative inline-block relative dropdown">
      <button class="bg-indigo-400 p-2 border rounded text-white border-none">
        Heading
        <svg
          class="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
          />
        </svg>
      </button>
      <div
        class="hidden absolute w-full z-10 dropdown-content bg-indigo-200 shadow-lg"
      >
        <span
          v-for="i in 6"
          :key="i"
          class="block text-gray-700 p-2 text-center hover:bg-indigo-400"
          @click="applyHeading(`h${i}`)"
          >{{ `h${i}` }}</span
        >
      </div>
    </div>

    <div class="relative inline-block relative dropdown">
      <button class="bg-indigo-400 p-2 border rounded text-white border-none">
        Link
        <svg
          class="fill-current h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
          />
        </svg>
      </button>
      <div
        class="hidden absolute z-10 dropdown-content shadow-lg block text-white p-2 text-center bg-indigo-400"
      >
        Insert link
        <input v-model="text" placeholder="Link text" />
        <input v-model="url" placeholder="Link url" />
        <button
          class="p-2 mt-2 bg-indigo-200 text-gray-600 rounded border-none"
          @click="applyInsertLink"
        >
          Insert
        </button>
      </div>
    </div>

    <div
      class="border-indigo-400 border m-2 mt-2 rounded bg-gray-100 border-solid p-4 text-gray-800"
      contenteditable
      ref="model"
    >
      <p style="text-align: center;">Start editing here</p>
    </div>
    <button
      @click="makeExport"
      class="border border-indigo-600 border-none bg-indigo-600 rounded p-2 text-white"
    >
      Exportar
    </button>
  </div>
</template>

<script>
export default {
  /*  props: {
    model: {
      type: String,
      default: "",
      required: true
    }
  },*/
  data: () => ({
    url: "",
    text: "",
    controls: [
      {
        name: "Bold",
        iconUrl: "https://image.flaticon.com/icons/svg/25/25432.svg",
        cmd: "bold",
        value: ""
      },
      {
        name: "Italic",
        iconUrl: "https://image.flaticon.com/icons/svg/25/25392.svg",
        cmd: "italic",
        value: ""
      },
      {
        name: "Insert Orderer List",
        iconUrl: "https://image.flaticon.com/icons/svg/25/25242.svg",
        cmd: "insertOrderedList",
        value: ""
      },
      {
        name: "Insert Unorderer List",
        iconUrl: "https://image.flaticon.com/icons/svg/25/25648.svg",
        cmd: "insertUnorderedList",
        value: ""
      },
      {
        name: "Outdent",
        iconUrl: "https://image.flaticon.com/icons/svg/25/25410.svg",
        cmd: "outdent",
        value: ""
      },
      {
        name: "Indent",
        iconUrl: "https://image.flaticon.com/icons/svg/25/25233.svg",
        cmd: "indent",
        value: ""
      },
      {
        name: "JustifyCenter",
        iconUrl: "https://image.flaticon.com/icons/svg/25/25440.svg",
        cmd: "justifyCenter",
        value: ""
      },
      {
        name: "JustifyRight",
        iconUrl: "https://image.flaticon.com/icons/svg/25/25288.svg",
        cmd: "justifyRight",
        value: ""
      },
      {
        name: "JustifyLeft",
        iconUrl: "https://image.flaticon.com/icons/svg/25/25351.svg",
        cmd: "justifyLeft",
        value: ""
      },
      {
        name: "FormatBlock",
        iconUrl: "https://image.flaticon.com/icons/svg/25/25181.svg",
        cmd: "formatBlock",
        value: "<blockquote>"
      }
    ]
  }),
  methods: {
    makeExport() {
      this.model = this.$refs.model.innerHTML;

      console.log(this.$refs.model.innerHTML);
    },
    handleApply(object) {
      document.execCommand(object.cmd, false, object.value);
    },
    applyHeading(value) {
      document.execCommand("heading", false, value);
    },
    applyInsertLink() {
      if (this.url && this.text) {
        this.$refs.model.innerHTML += `<a href="${this.url}">${this.text}</a>`;
      }

      document.execCommand("insertlink", false, this.url);
    }
  }
};
</script>

<style>
.dropdown:hover .dropdown-content {
  display: block;
}
</style>
