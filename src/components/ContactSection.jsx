import { UserRound , Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast.success("Message Sent ✅", {
        description: "Thanks! I’ll get back to you as soon as possible.",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="px-4 pb-24 pt-20 bg-secondary/30 relative scroll-mt-20"
    >
      <div className="container mx-auto max-w-5xl">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Get In<span className="text-primary"> Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project or want to collaborate? Feel free to reach out. I'm
          always open to new opportunities.
        </p>

        {/* Content Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold"><span className="text-primary">Contact</span>{" "}Information</h3>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h4 className="font-medium">Email:</h4>
                  <a
                    href="mailto:gopikrishnagurivisetti@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    gopikrishnagurivisetti@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h4 className="font-medium">Phone:</h4>
                  <a
                    href="tel:+917288048922"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 7288048922
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h4 className="font-medium">Location:</h4>
                  <p className="text-muted-foreground">Hyderabad, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            {/* <div className="pt-6">
              <h4 className="font-medium">Connect with me</h4>
              <div className="flex space-x-5 mt-3">
                <a
                  href="#"
                  target="_blank"
                  className="p-2 rounded-full hover:bg-primary/10 transition"
                >
                  <Linkedin className="text-primary" />
                </a>
              </div>
            </div> */}
            <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <UserRound className="w-6 h-6 text-primary" />
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h4 className="font-medium">Connect with me:</h4>
                  <a
                  href="https://www.linkedin.com/in/gopikrishna-gurivisetti-software-developer"
                  target="_blank"
                  aria-label="LinkedIn"
                  className="p-2 rounded-full hover:bg-primary/10 transition"
                >
                  <Linkedin className="text-primary" />
                </a>
                </div>
              </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-card p-8 rounded-lg shadow-sm border border-border">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Gopikrishna..."
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="Gopikrishna@gmail.com"
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  required
                  placeholder="Hello, I'd like to talk about..."
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none h-28"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="
                  cosmic-button
                  w-full flex items-center justify-center gap-2
                  disabled:opacity-50
                "
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
