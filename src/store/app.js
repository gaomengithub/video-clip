// Utilities
import { defineStore } from "pinia";
import { ref } from "vue";

export const useAppStore = defineStore("app", () => {
  const plane = ref(
    [
      {
        title: "标题1...标题1...",
        subTitle: '月是故乡明',
        tags: ["标签1", "标签1", "标签1", "标签1"],
        src: "https://cdn.jsdelivr.net/gh/xdlumia/files/video-play/IronMan.mp4",
        details: "这里是一段关于视频的介绍，对视频的主要内容、技术亮点等进行简要阐述。"
      },
      {
        title: "标题2...标题2...",
        subTitle: '月是故乡明',
        tags: ["标签1", "标签1", "标签1", "标签1"],
        src: "https://cdn.jsdelivr.net/gh/xdlumia/files/video-play/IronMan.mp4",
        details: "这里是一段关于视频的介绍，对视频的主要内容、技术亮点等进行简要阐述。"
      },
      {
        title: "标题3...标题3...",
        subTitle: '月是故乡明',
        tags: ["标签1", "标签1", "标签1", "标签1"],
        src: "https://cdn.jsdelivr.net/gh/xdlumia/files/video-play/IronMan.mp4",
        details: "这里是一段关于视频的介绍，对视频的主要内容、技术亮点等进行简要阐述。"
      },
      {
        title: "标题4...标题3...",
        subTitle: '月是故乡明',
        tags: ["标签1", "标签1", "标签1", "标签1"],
        src: "https://cdn.jsdelivr.net/gh/xdlumia/files/video-play/IronMan.mp4",
        details: "这里是一段关于视频的介绍，对视频的主要内容、技术亮点等进行简要阐述。"
      },
      {
        title: "标题5...标题3...",
        subTitle: '月是故乡明',
        tags: ["标签1", "标签1", "标签1", "标签1"],
        src: "https://cdn.jsdelivr.net/gh/xdlumia/files/video-play/IronMan.mp4",
        details: "这里是一段关于视频的介绍，对视频的主要内容、技术亮点等进行简要阐述。"
      },
      {
        title: "标题6...标题3...",
        subTitle: '月是故乡明',
        tags: ["标签1", "标签1", "标签1", "标签1"],
        src: "https://cdn.jsdelivr.net/gh/xdlumia/files/video-play/IronMan.mp4",
        details: "这里是一段关于视频的介绍，对视频的主要内容、技术亮点等进行简要阐述。"
      },
      {
        title: "标题7...标题3...",
        subTitle: '月是故乡明',
        tags: ["标签1", "标签1", "标签1", "标签1"],
        src: "https://cdn.jsdelivr.net/gh/xdlumia/files/video-play/IronMan.mp4",
        details: "这里是一段关于视频的介绍，对视频的主要内容、技术亮点等进行简要阐述。"
      },
    ])
  const three = ref(
    [
      {
        title: "标题1...标题1...",
        subTitle: '月是故乡明',
        tags: ["标签1", "标签1", "标签1", "标签1"],
        src: "https://picsum.photos/512/128?random",
        details: "这里是一段关于视频的介绍，对视频的主要内容、技术亮点等进行简要阐述。"
      },
      {
        title: "标题2...标题2...",
        subTitle: '月是故乡明',
        tags: ["标签1", "标签1", "标签1", "标签1"],
        src: "https://picsum.photos/512/128?random",
        details: "这里是一段关于视频的介绍，对视频的主要内容、技术亮点等进行简要阐述。"
      },
      {
        title: "标题3...标题3...",
        subTitle: '月是故乡明',
        tags: ["标签1", "标签1", "标签1", "标签1"],
        src: "https://picsum.photos/512/128?random",
        details: "这里是一段关于视频的介绍，对视频的主要内容、技术亮点等进行简要阐述。"
      }])
  const isometric = ref(
    [
      {
        title: "标题1...标题1...",
        subTitle: '月是故乡明',
        tags: ["标签1", "标签1", "标签1", "标签1"],
        src: "https://picsum.photos/512/128?random",
        details: "这里是一段关于视频的介绍，对视频的主要内容、技术亮点等进行简要阐述。"
      },
      {
        title: "标题2...标题2...",
        subTitle: '月是故乡明',
        tags: ["标签1", "标签1", "标签1", "标签1"],
        src: "https://picsum.photos/512/128?random",
        details: "这里是一段关于视频的介绍，对视频的主要内容、技术亮点等进行简要阐述。"
      },
      {
        title: "标题3...标题3...",
        subTitle: '月是故乡明',
        tags: ["标签1", "标签1", "标签1", "标签1"],
        src: "https://picsum.photos/512/128?random",
        details: "这里是一段关于视频的介绍，对视频的主要内容、技术亮点等进行简要阐述。"
      }])
  const motion = ref([{
    title: "标题1...标题1...",
    subTitle: '月是故乡明',
    tags: ["标签1", "标签1", "标签1", "标签1"],
    src: "https://picsum.photos/512/128?random",
    details: "这里是一段关于视频的介绍，对视频的主要内容、技术亮点等进行简要阐述。"
  },
  {
    title: "标题2...标题2...",
    subTitle: '月是故乡明',
    tags: ["标签1", "标签1", "标签1", "标签1"],
    src: "https://picsum.photos/512/128?random",
    details: "这里是一段关于视频的介绍，对视频的主要内容、技术亮点等进行简要阐述。"
  },
  {
    title: "标题3...标题3...",
    subTitle: '月是故乡明',
    tags: ["标签1", "标签1", "标签1", "标签1"],
    src: "https://picsum.photos/512/128?random",
    details: "这里是一段关于视频的介绍，对视频的主要内容、技术亮点等进行简要阐述。"
  }])
  return { plane ,three , isometric , motion };
});
