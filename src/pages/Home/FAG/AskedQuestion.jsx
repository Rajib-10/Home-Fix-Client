

const AskedQuestion = () => {
    return (
        <div>
            <section className="bg-base-200 text-black">
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
		<h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
		<p className="mt-4 mb-8 ">Home-Fix is your trusted partner for all your home improvement and repair needs.</p>
		<div className="space-y-4">
			<details className="w-full border border-black rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ri">What types of services does Home-Fix offer?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 ">Home-Fix offers a wide range of home improvement and repair services, including plumbing, electrical work, carpentry, painting, appliance repair, and more. You can explore our service categories to find the specific service that meets your needs. </p>
			</details>
			<details className="w-full border border-black rounded-lg">
				<summary className="px-4 py-6 focus:outline-none focus-visible:ri"> What if I am not satisfied with the service provided?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 ">Customer satisfaction is our priority. If you are not completely satisfied with the service, please reach out to our customer support team. We will work with you and the service provider to address any concerns and ensure your satisfaction. </p>
			</details>
			<details className="w-full border border-black rounded-lg" open="">
				<summary className="px-4 py-6 ">How do I request a service from Home-Fix?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 ">To request a service, simply browse our service categories, select the one that suits your needs, and follow the easy booking process. You can also contact our customer support team for assistance. </p>
			</details>
		</div>
	</div>
</section>
        </div>
    );
};

export default AskedQuestion;