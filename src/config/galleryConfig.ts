import type { GalleryConfig } from "@/types/galleryConfig";

// 相册配置
export const galleryConfig: GalleryConfig = {
	// 相册列表
	albums: [
		{
			id: "elysia",
			name: "爱莉希雅",
			description: "粉色妖精小姐的美丽瞬间",
			location: "崩坏3",
			date: "2026-07-05",
			tags: ["崩坏3", "爱莉希雅", "壁纸"],
		},
	],

	// 瀑布流最小列宽(px)，浏览器根据容器宽度自动计算列数，默认 240
	// 值越小列数越多，值越大列数越少
	columnWidth: 240,
};
