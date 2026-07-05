import type { MusicPlayerConfig } from "../types/musicConfig";

// 音乐播放器配置
export const musicPlayerConfig: MusicPlayerConfig = {
	// 是否在导航栏显示音乐播放器入口
	showInNavbar: true,

	// 使用方式："meting" 使用 Meting API，"local" 使用本地音乐列表
	mode: "local",

	// 默认音量 (0-1)
	volume: 0.7,

	// 播放模式：'list'=列表循环, 'one'=单曲循环, 'random'=随机播放
	playMode: "random",

	// 是否显启用歌词
	showLyrics: false,

	// Meting API 配置
	meting: {
		api: "https://api.i-meto.com/meting/api?server=:server&type=:type&id=:id&r=:r",
		server: "netease",
		type: "playlist",
		id: "10046455237",
		auth: "",
		fallbackApis: [
			"https://api.injahow.cn/meting/?server=:server&type=:type&id=:id",
			"https://api.moeyao.cn/meting/?server=:server&type=:type&id=:id",
		],
	},

	// 本地音乐配置（当 mode 为 'local' 时使用）
	local: {
		playlist: [
			{
				name: "Cruel Summer",
				artist: "Taylor Swift",
				url: "/assets/music/Cruel Summer - Taylor Swift.mp3",
				cover: "/assets/music/cover/Cruel Summer.jpg",
				lrc: "",
			},
			{
				name: "Insomnia",
				artist: "辉星",
				url: "/assets/music/Insomnia (불면증) - 辉星.mp3",
				cover: "/assets/music/cover/Insomnia (불면증).jpg",
				lrc: "",
			},
			{
				name: "Lover",
				artist: "Taylor Swift",
				url: "/assets/music/Lover - Taylor Swift.mp3",
				cover: "/assets/music/cover/Lover.jpg",
				lrc: "",
			},
			{
				name: "One Last Kiss",
				artist: "宇多田ヒカル",
				url: "/assets/music/One Last Kiss - 宇多田ヒカル.mp3",
				cover: "/assets/music/cover/One Last Kiss.jpg",
				lrc: "",
			},
			{
				name: "Pink Flavor",
				artist: "ChiliChill乐团",
				url: "/assets/music/Pink Flavor - ChiliChill乐团.mp3",
				cover: "/assets/music/cover/Pink Flavor.jpg",
				lrc: "",
			},
			{
				name: "Precious You☆",
				artist: "宮本侑芽、小澤亜李、藤田茜",
				url: "/assets/music/Precious You☆ - 宮本侑芽、小澤亜李、藤田茜.mp3",
				cover: "/assets/music/cover/Precious You☆.jpg",
				lrc: "",
			},
			{
				name: "TruE",
				artist: "黄龄、HOYO-MiX",
				url: "/assets/music/TruE - 黄龄、HOYO-MiX.mp3",
				cover: "/assets/music/cover/TruE.jpg",
				lrc: "",
			},
			{
				name: "Yuri on ICE",
				artist: "梅林太郎",
				url: "/assets/music/Yuri on ICE - 梅林太郎.mp3",
				cover: "/assets/music/cover/Yuri on ICE.jpg",
				lrc: "",
			},
			{
				name: "us.",
				artist: "Gracie Abrams、Taylor Swift",
				url: "/assets/music/us. - Gracie Abrams、Taylor Swift.mp3",
				cover: "/assets/music/cover/us.jpg",
				lrc: "",
			},
		],
	},
};
