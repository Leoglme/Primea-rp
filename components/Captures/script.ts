import sections from "~/static/data/sections.json";
import media from "~/mixins/media";
import resize from "~/mixins/resize";

export default {
  name: "Captures",
  async fetch(){},
  mixins: [media, resize],
  data(){
    return {
      process: "document"
    }
  },
  computed: {
    captureSection() {
      return sections.find(e => e.id === "captures");
    },
    thirdHeight(){
      if (this.base_screenWidth <=500) return 300
      return Math.ceil(this.base_screenWidth / 3)
    },
    thirdWidth(){
      if (this.base_screenWidth <=500) return 400
      return Math.ceil(this.base_screenWidth / 1.6)
    },
  }
}
