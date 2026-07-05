import type { AnnouncementConfig } from "../types/announcementConfig";

export const announcementConfig: AnnouncementConfig = {
	// 公告标题
	title: "🩷 爱莉的公告",

	// 公告内容
	content: "欢迎来到粉色妖精小姐的博客！这里是我的小天地，记录着关于崩坏3和日常生活的一切~",

	// 是否允许用户关闭公告
	closable: true,

	link: {
		// 启用链接
		enable: true,
		// 链接文本
		text: "了解更多",
		// 链接 URL
		url: "/about/",
		// 内部链接
		external: false,
	},
};
