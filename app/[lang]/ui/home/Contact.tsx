export default function Contact({ locale }: any) {
    return (
        <section id="contact" className="pt-36 pb-32 sembunyi">
            <div className="container mx-auto">
                <div className="w-full px-4">
                    <div className="max-w-xl mx-auto text-center mb-16">
                        <h4 className="font-semibold text-lg text-primary mb-2"> {locale.client}</h4>
                        <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">{locale.contact_me}</h2>
                        <p className="font-medium text-md text-secondary md:text-lg">{locale.contact_me_sub}</p>
                    </div>
                </div>
                <form action="formData.php" method="post">
                    <div className="w-full lg:w-2/3 lg:mx-auto">
                        <div className="w-full px-4 mb-8">
                            <label htmlFor="name" className="text-base font-bold text-primary">{locale.inputName}</label>
                            <input max="100px" min="10px" type="text" name="name" id="name_contact" className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
                        </div>
                        <div className="w-full px-4 mb-8">
                            <label htmlFor="name" className="text-base font-bold text-primary">{locale.inputEmail}</label>
                            <input max="100px" min="10px" type="text" name="email" id="email_contact" className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" />
                        </div>
                        <div className="w-full px-4 mb-8">
                            <label htmlFor="name" className="text-base font-bold text-primary">{locale.inputMessage}</label>
                            <textarea name="note" readOnly id="note_contact" className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary h-32" placeholder="mencoba" />
                        </div>
                        <div className="w-full">
                            <button name="submit" className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500">{locale.send}</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}