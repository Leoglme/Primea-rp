import sections from "@/static/data/sections.json"
import media from "~/mixins/media";
export default {
  name: "CharacterSection",
  mixins: [media],
  computed: {
    characterSection() {
      return sections.find(e => e.id === "characters");
    }
  },
  methods: {
    renderText(item: { text: string, links: Array<{
        target: string;
        pattern: string, url: string }> | undefined}): string{
      if (!item.links) return item.text;

      const split = item.text.split(' ');
      for (let i = 0; i < split.length; i++){
        const find = item.links.find(e => e.pattern.toLowerCase() === split[i].toLowerCase())
        split[i] = find ? `<a class="link" target="${find.target || '_self'}" href="${find.url}">${split[i]}</a>` : split[i];
      }
      return split.join(" ");
    }
  }
}
