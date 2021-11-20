
import styled, { createGlobalStyle } from 'styled-components';
// import ImgCopy 			from '../images/copy.png';
// import ImgCopyActive 	from '../images/copy-active.png';

export default createGlobalStyle `
	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: content-box;
		/* user-select: none; */
		font-family: 'Poppins', sans-serif;
	}

	body {
		background: #f3f3f3;
		-webkit-font-smoothing: antialiased;
	}

	.none { display: none; }

	.title {
		font-weight: 200;
		font-size: 40px;
		color: #000;
		margin: 0px auto 0px auto;
	}
`

// TOP BAR
export const TopBar = styled.div `
	position: fixed;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100px;
	margin: 0;
	background-image: linear-gradient(to bottom, #dfe9f3 0%, white 100%);
	z-index: 1;

	@media (max-width: 500px) {
		width: 100%;
		flex-wrap: nowrap;

		img {
			width: 70%;
		}
	}
`

// NAVIGATION
export const Nav = styled.div `
	position: fixed;
	top: 100px;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	background-color: #007F00;
	z-index: 1;

	a {
		font-weight: 400;
		font-size: 16px;
		color: #fff;
		text-decoration: none;
		margin: 0 15px;
		line-height: 60px;
	}

	@media (max-width: 600px) {
		display: grid;
		grid-template-rows: auto;
		height: auto;

		a {
			display: block;
			width: 100%;
			text-align: center;
			margin: 0;
			line-height: 30px;
		}
	}

	.nami {
		position: absolute;
		left: calc(100vw - 150px);
	}

	.pointer {
		cursor: pointer;
	}
`

// MAIN HEADER
export const Header = styled.div `
	position: relative;
	display: table;
	width: 100%;
	height: auto;
	background-color: #7F00FF;
	margin: 160px 0 0 0;

	> .container {
		display: block;
		position: relative;
		width: 1140px;
		height: 100%;
		margin: 0 auto;

		.title {
			margin: 20px 0;
			text-align: center;
			color: #fff;
		}

		.box {
			display: block;
			position: relative;
			width: 80%;
			height: auto;
			margin: 0 auto 20px auto;
			padding: 0 30px;
			color: #fff;

			&:nth-child(5) { margin: 0 auto 40px auto; }

			p {
				font-size: 18px;
				font-weight: 400;
				line-height: 2.5rem;
			}
		}
	}

	@media (max-width: 1140px) {
		height: auto;

		> .container {
			width: 100%;
			flex-wrap: nowrap;

			.title { font-size: 4vw; }
		}
	}

	@media (max-width: 600px) {
		margin: 280px auto;
	}
`

// SALES INFO
export const SalesInfo = styled.div `
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: auto auto auto;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: auto;
	margin: 0 auto 100px auto;

	.title {
		display: block;
		text-align: center;
		margin: 20px 0 20px 0;
		color: #7F00FF;
	}

	.sales {
		width: 1140px;
		margin: auto;
		padding: 0;

		.question {
			display: flex;
			align-items: center;
			width: calc(80% - 20px);
			height: 60px;
			margin: auto;
			padding: 0 0 0 20px;
			font-size: 25px;
			color: #fff;
			background-color: #007F00;
		}

		.answer {
			display: flex;
			width: calc(80% - 20px);
			margin: auto;
			padding: 20px 0 20px 20px;
			font-size: 20px;
			font-weight: 400;
			color: #7F00FF;
		}
	}

	@media (max-width: 1140px) {
		.title {
			font-size: 4vw;
		}

		.sales {
			width: 100%;

			.minibox-container {
				grid-template-columns: 1fr;

				.minibox {
					.subtitle, .text {
						font-size: 3vw;
					}
				}
			}
		}
	}
`

// TEXT + IMAGE
export const TextImage = styled.div `
	display: table;
	width: 100%;
	height: calc(100vh - 280px);
	margin: 160px 0 0 0;
	background-color: #F4F4F2;

	.content {
		width: 1140px;
		height: auto;
		margin: 0 auto;

		.text-image {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			width: 100%;
			margin: 0 auto;
		}

		.title { margin: 25px 0 15px 0; }

		p {
			font-weight: 200;
			margin: 0 0 20px 0;
			line-height: 2rem;
		}

		.img {
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 0 20px;

			img {
				width: 100%;
			}
		}
	}

	@media (max-width: 1140px) {
		> .content {
			width: auto;

			.text-image {
				grid-template-columns: 1fr;
				width: 100%;

				.title, p {
					padding: 0 80px;
				}
			}

			.img {
				margin: 20px 0;
			}
		}
	}

	@media (max-width: 600px) {
		margin: 280px auto 0 auto;
	}
`

// SAMPLES
export const Samples = styled.div `
	display: table;
	width: 100%;
	height: calc(100vh - 280px);
	margin: 160px 0 0 0;

	.content {
		width: 1140px;
		height: auto;
		margin: 0 auto;

		.title { margin: 25px 0 15px 0; }

		.gallery {
			width: 100%;
			display: grid;
			grid-template-columns: repeat(auto-fill, 250px);
			grid-template-rows: auto;
			gap: 20px;
			justify-content: center;
			margin: 20px 0 40px 0;

			div {
				img {
					width: 100%;
				}

				.description {
					width: 100%;
					font-size: 13px;
					font-weight: 200;
				}
			}
		}
	}

	@media (max-width: 1140px) {
		.content {
			width: 100%;

			.title {
				padding: 0 80px;
			}
		}
	}

	@media (max-width: 600px) {
		margin: 280px auto 0 auto;
	}
`

// BUY
export const Buy = styled.div `
	.content {
		display: table;
		width: 1140px;
		height: calc(100vh - 300px);
		margin: 180px auto 0 auto;

		.sold-out {
			margin: 100px 0 0 0;
			font-size: 35px;
			font-weight: 600;
			text-align: center;
		}

		.sales-stats {
			display: block;
			float: left;
			width: 660px;

			> .title {
				margin: 0 0 20px 0;
				font-size: 35px;
				font-weight: 300;
			}

			.stats {				
				> div {
					display: table;
					width: 100%;
					margin: 10px 0;
					
					&:nth-child(1) { 
						margin: 0 0 15px 0;
					}
				}

				.label {
					display: block;
					float: left;
					margin: 3px 10px 0 10px;
					font-weight: 300;
					font-size: 15px;
					text-align: right;

					&.small {
						width: 45px;
						margin: 3px 10px 0 0;
					}
				}

				span {
					display: flex;
					align-items: center;
					justify-content: center;
					float: left;
					width: 70px;
					height: 30px;
					font-weight: 600;
					background-color: #fff;
					border: 1px solid;
				}

				button {
					display: flex;
					align-items: center;
					justify-content: center;
					width: 288px;
					height: 45px;
					margin: 20px 0 30px 0;
					background-color: #007F00;
					border: 1px solid transparent;
					color: #fff;
					font-weight: 400;
					font-size: 16px;
					transition: .3s;
					cursor: pointer;

					&:hover, &:active {
						background-color: #7F00FF;
					}
				}
			}

			.label-payment {
				display: block;
				padding: 0;
				font-weight: 300;
				font-size: 15px;
			}

			.row {
				display: flex;
				align-items: center;
				width: 535px;
				height: 32px;
				margin: 10px 0;
			}

			input {
				width: 495px;
				height: 30px;
				padding: 0 0 0 5px;
				font-weight: 600;
				color: #000;
				background-color: #fff;
				border: 1px solid;
			}

			.img-copy {
				margin: 4px 0 0 5px;
			}

			.btn-copy {
				width: 26px;
				height: 30px;
				margin: 0 0 0 5px;
				background-size: 16px;
				background-position: center;
				background-repeat: no-repeat;
				transition: .3s;
				cursor: pointer;

				&:hover {
				}
			}
		}

		.sales-image {
			display: grid;
			grid-template-columns: 480px;
			grid-template-rows: 480px auto;
			float: left;
			width: 480px;
			margin: 0 0 0 0;

			> div {
				&:nth-child(1) {
					position: relative;
					display: flex;
					align-items: center;
					justify-content: center;
					width: 480px;
					height: 480px;

					&.preview {
						&:before {
							content: "Your NFT will be revealed here...";
							display: block;
							width: auto;
							height: auto;
							padding: 10px;
							font-weight: 600;
							background-color: #fff;
							border: 1px solid #000;
							z-index: 2;
						}
					}
				}

				&:nth-child(2) {

					button {
						display: flex;
						align-items: center;
						justify-content: center;
						width: 268px;
						height: 45px;
						margin: 20px 0 0 0;
						background-color: #007F00;
						border: 1px solid transparent;
						color: #fff;
						font-weight: 400;
						font-size: 16px;
						transition: .3s;
						cursor: pointer;

						&:hover, &:active {
							background-color: #7F00FF;
						}
					}
				}
			}

			img {
				position: absolute;
				top: 0;
				left: 0;
				width: 480px;
				height: 480px;
			}
			
			span {
				display: block;
				width: 100%;
				margin: 15px 0 0 0;
				font-weight: 400;
				font-size: 16px;
				text-align: left;
			}
		}
	}

	@media (max-width: 1140px) {
		.content {
			width: calc(100% - 40px);
			padding: 0 20px;

			.sales-stats {
				display: table;
				width: 100%;

				.title {
					font-size: 4vw;
				}
			}

			.sales-image {
				width: 100%;
			}
		}
	}

	@media (max-width: 600px) {
		margin: 300px auto 0 auto;
	}
`

// RARITY
export const Rarity = styled.div `
	.content {
		display: table;
		width: 1140px;
		height: calc(100vh - 280px);
		margin: 160px auto 0 auto;

		iframe {
			display: block;
			width: 390px;
			height: 280px;
			margin: 30px auto 0 auto;
			text-align: center;
		}

		.title { 
			margin: 25px auto 15px auto;
			text-align: center;
		}

		p {
			font-weight: 600;
			text-align: center;
			margin: 20px 0;

			span {
				font-size: 20px;
			}
		}

		img {
			width: 100%;
		}
	}

	@media (max-width: 1140px) {
		.content {
			width: 100%;
		}
	}

	@media (max-width: 600px) {
		margin: 280px auto 0 auto;
	}
`

// FOOTER
export const Footer = styled.div`
	display: grid;
	grid-template-columns: auto;
	grid-template-rows: repeat(2, 40px);
	width: 100%;
	height: calc(120px - 20px);
	padding: 20px 0 0 0;
	background-color: #000;
	color: #fff;

	div {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 13px;
	}

	img:nth-child(1) {
		margin: 0 20px 0 0;
	}
`
