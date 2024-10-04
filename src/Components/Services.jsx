import React from 'react';

const Services = () => {
	// Array of services
	const services = [
		{
			title: 'Search Engine Optimization',
			description: 'We help improve your website’s visibility on search engines to drive more traffic and increase your online presence.',
		},
		{
			title: 'Social Media Marketing',
			description: 'Leverage social platforms to boost your brand awareness and engage with your audience effectively.',
		},
		{
			title: 'Content Creation',
			description: 'We create compelling content that resonates with your target audience, driving engagement and conversions.',
		},
		{
			title: 'Paid Advertising',
			description: 'Maximize your ROI with our data-driven paid advertising strategies across multiple platforms.',
		},
		{
			title: 'Tech Consulting',
			description: 'Our expert consultants provide tailored solutions to address your tech challenges and improve your operations.',
		},
		{
			title: 'Pipedrive',
			description: 'We optimize your Pipedrive CRM setup, enabling seamless sales management and business growth.',
		},
	];

	return (
		<section>
			{/* Container */}
			<div className="lg:w-11/12 w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
				{/* Title */}
				<div className="flex items-start flex-col gap-4 pb-14">
					<p className="text-[#636262] text-[16px] lg:text-[20px] tracking-[0.4px]">
						WHAT WE OFFER
					</p>
					<h2 className="max-w-2xl text-3xl font-bold md:text-5xl">
						What We’re Offering Creative Digital Service
					</h2>
				</div>
				{/* Content */}
				<div className="grid gap-0 sm:grid-cols-2 md:grid-cols-3">
					{/* Map through services array */}
					{services.map((service, index) => (
						<a
							key={index}
							href="#"
							className="flex-col flex items-start justify-between border border-gray-300 p-10 h-72 hover:bg-black hover:text-white transition"
						>
							<div className="flex w-full items-center justify-between">
								<h5 className="text-xl font-bold">{service.title}</h5>
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									aria-label="Right Arrow"
								>
									<path
										d="M6 18L18 6"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									></path>
									<path
										d="M8.25 6H18V15.75"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									></path>
								</svg>
							</div>
							<div>
								<p>{service.description}</p>
							</div>
						</a>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services