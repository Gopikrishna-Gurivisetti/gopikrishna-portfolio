import { Linkedin, Mail, MapPin, Phone, Send, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast.success("Message Sent ✅", {
        description: "Thanks! I'll get back to you as soon as possible.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "gopikrishnagurivisetti@gmail.com",
      href: "mailto:gopikrishnagurivisetti@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7288048922",
      href: "tel:+917288048922",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hyderabad, India",
      href: "#",
      color: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <section id="contact" className="section-spacing bg-gradient-to-b from-transparent via-primary/5 to-transparent relative scroll-mt-20">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="space-y-4 text-center mb-12 animation-fade-in">
          <div className="inline-block badge-primary mb-4">
            <MessageCircle className="inline mr-2" size={16} />
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Let's <span className="text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">Collaborate</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you!
          </p>
        </div>

        {/* Content Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left Side - Contact Info */}
          <div className="animation-slide-in space-y-8">
            <h3 className="text-2xl font-bold">
              <span className="text-transparent bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text">Contact</span> Information
            </h3>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <a
                    key={index}
                    href={info.href}
                    className="group card-elevated p-6 border border-border hover:border-primary/50 transition-all duration-300 block"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${info.color} text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">
                          {info.label}
                        </h4>
                        <p className="text-foreground font-medium mt-1 group-hover:text-primary transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="pt-4 border-t border-border">
              <h4 className="font-semibold mb-4">Connect with me</h4>
              <a
                href="https://www.linkedin.com/in/gopikrishna-gurivisetti-software-developer"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-primary/10 text-primary font-medium hover:bg-primary/20 transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                LinkedIn Profile
              </a>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="card-elevated border border-border overflow-hidden animation-scale-in">
            <div className="p-8 bg-gradient-to-br from-card to-card/50">
              <h3 className="text-2xl font-bold mb-2">Send a Message</h3>
              <p className="text-muted-foreground mb-6">I'll get back to you within 24 hours</p>

              <form className="space-y-5" onSubmit={handleSubmit}>
                {/* Name Input */}
                <div>
                  <label className="block text-sm font-semibold mb-2.5 text-foreground">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Gopikrishna..."
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 placeholder:text-muted-foreground"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-sm font-semibold mb-2.5 text-foreground">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 placeholder:text-muted-foreground"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-sm font-semibold mb-2.5 text-foreground">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project or opportunity..."
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 resize-none h-32 placeholder:text-muted-foreground"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="cosmic-button w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin">⏳</span>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
