
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
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center" >
				{CERTIFICATIONS.map((cert, idx) => (
					<motion.div
						key={idx}
						whileInView={{ opacity: 1, y: 0 }}
						initial={{ opacity: 0, y: 40 }}
						transition={{ duration: 0.7, delay: idx * 0.2 }}
						className="bg-neutral-900 border border-neutral-800 rounded-2xl shadow-lg p-6 w-4/5 flex flex-row mx-20 items-center hover:shadow-xl transition-shadow"
					>
						<a href={cert.url} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 group">
							<img
								src={cert.image}
								alt={cert.title}
								className="rounded-xl w-40 h-40 object-cover border-2 border-neutral-800 group-hover:border-purple-500 transition"
							/>
						</a>
						<div className="flex flex-col flex-1 pl-6">
							<a href={cert.url} target="_blank" rel="noopener noreferrer">
								<h3 className="text-lg font-semibold mb-2 hover:text-purple-400 transition">
									{cert.title}
								</h3>
							</a>
							<div className="text-sm text-neutral-400 mb-2">
								<span className="block font-medium">{cert.issuer}</span>
								<span>{cert.date}</span>
							</div>
							<a
								href={cert.url}
								target="_blank"
								rel="noopener noreferrer"
								className="mt-2 inline-block px-4 py-2 bg-purple-700 text-white rounded-lg font-medium hover:bg-purple-800 transition w-max"
							>
								Verify
							</a>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default CourseCertification;
