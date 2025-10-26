
import { CERTIFICATIONS } from "../constants";
import { motion } from "motion/react";

const CourseCertification = () => {
	return (
		<div className="border-neutral-900 pb-4">
			<motion.h2
				whileInView={{ y: 0, opacity: 1 }}
				initial={{ y: -100, opacity: 0 }}
				transition={{ duration: 1.2 }}
				className="my-20 text-center text-4xl"
			>
				Courses & Certifications
			</motion.h2>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 justify-center items-center px-1 sm:px-2">
							{CERTIFICATIONS.map((cert, idx) => (
								<motion.div
									key={idx}
									whileInView={{ opacity: 1, y: 0 }}
									initial={{ opacity: 0, y: 40 }}
									transition={{ duration: 0.7, delay: idx * 0.2 }}
									className="bg-neutral-900 border border-neutral-800 rounded-2xl shadow-lg p-3 sm:p-6 w-full flex flex-col sm:flex-row items-center hover:shadow-xl transition-shadow"
								>
									<a href={cert.url} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 group">
										<img
											src={cert.image}
											alt={cert.title}
											className="rounded-xl w-28 h-28 sm:w-40 sm:h-40 object-cover border-2 border-neutral-800 group-hover:border-purple-500 transition mb-3 sm:mb-0"
										/>
									</a>
									<div className="flex flex-col flex-1 sm:pl-6 text-center sm:text-left">
										<a href={cert.url} target="_blank" rel="noopener noreferrer">
											<h3 className="text-base sm:text-lg font-semibold mb-2 hover:text-purple-400 transition">
												{cert.title}
											</h3>
										</a>
										<div className="text-xs sm:text-sm text-neutral-400 mb-2">
											<span className="block font-medium">{cert.issuer}</span>
											<span>{cert.date}</span>
										</div>
										<div className="flex justify-center sm:justify-start">
											<a
												href={cert.url}
												target="_blank"
												rel="noopener noreferrer"
												className="mt-2 inline-block px-3 py-2 sm:px-4 sm:py-2 bg-purple-700 text-white rounded-lg font-medium hover:bg-purple-800 transition w-max"
											>
												Verify
											</a>
										</div>
									</div>
								</motion.div>
							))}
						</div>
		</div>
	);
};

export default CourseCertification;
