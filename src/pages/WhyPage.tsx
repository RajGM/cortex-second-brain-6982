
import { useState, useEffect } from 'react';
import { useAnimateIn } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { ExternalLink, Heart, Lightbulb, RefreshCw, Stars, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhySection = ({ 
  title, 
  content, 
  icon, 
  id 
}: { 
  title: string, 
  content: React.ReactNode, 
  icon: React.ReactNode,
  id: string 
}) => {
  return (
    <div id={id} className="mb-20 max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10">
          {icon}
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-primary">{title}</h2>
      </div>
      <div className="text-foreground/80 space-y-4">
        {content}
      </div>
    </div>
  );
};

const WhyPage = () => {
  const [loading, setLoading] = useState(true);
  const showContent = useAnimateIn(false, 300);
  
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-primary/5 to-transparent -z-10"></div>
      <div className="absolute top-1/3 right-0 w-[300px] h-[300px] rounded-full bg-primary/5 blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 left-0 w-[250px] h-[250px] rounded-full bg-accent/5 blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
        <div className="flex flex-col items-center text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-foreground bg-clip-text">
            Why?
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything we do starts with this question.
          </p>
          
          <div className="mt-10 glass-panel p-8 md:p-10 rounded-lg max-w-3xl mx-auto shadow-lg border-2 border-primary/20">
            <p className="text-xl md:text-2xl text-foreground/90">
              Why should Cortex exist? Why should anyone care to use it? Why is privacy so important to us?
            </p>
            <p className="text-xl md:text-2xl text-foreground/90 mt-6">
              Eventually, the "why" led us here.
            </p>
          </div>
        </div>
        
        <WhySection
          id="why-1"
          icon={<Lightbulb className="w-6 h-6 text-primary" />}
          title="Because why not do something different?"
          content={
            <>
              <p>
                We've always approached product design this way. We look at our current tools and ask ourselves why it's done the way it is. Why do bookmarking tools have social features? Why do we use folders? Dropdowns? Are these outdated UI patterns still useful or are they just clutter? What if we do it better? Or just different?
              </p>
              <p>
                With Cortex we ultimately asked ourselves, why not? Why not find a different way to save what we care about? Why not remove all the other stuff that just gets in the way? Forget how it's usually done. Why not make it better?
              </p>
              <div className="mt-6">
                <Button variant="outline" className="gap-2" asChild>
                  <Link to="/how">
                    MORE ON HOW WE THINK
                    <ExternalLink size={16} />
                  </Link>
                </Button>
              </div>
              <div className="mt-4 text-sm text-muted-foreground">
                <p className="font-medium">The beginning — How did we end up creating Cortex?</p>
                <p className="mt-2 font-medium">A letter — How can we build an extension of your mind?﻿</p>
              </div>
            </>
          }
        />
        
        <WhySection
          id="why-2"
          icon={<Heart className="w-6 h-6 text-primary" />}
          title="Because we need better relationships with technology."
          content={
            <>
              <p>
                There was a time when our tools were just tools. We picked up a hammer to build something, then put it back on the shelf when we were finished. It was a tool made for one simple purpose. It had no ulterior motives.
              </p>
              <p>
                Fast forward to today, and our tools have evolved. They've become smarter. They have algorithms, feeds, notifications. They are designed to make us spend as much time with them as possible. We must feed them, manage them, clean them, engage with them. Our tools no longer serve our purpose. We serve theirs.
              </p>
              <p>
                Could we not use the magic of technology to build something better? Something that truly benefits us, rather than taking from us. Something designed in a way that fosters a special relationship with our tools once again. Something that serves a simple, necessary purpose.
              </p>
              <p>
                We decided we could.
              </p>
              <div className="mt-6">
                <Button variant="outline" className="gap-2" asChild>
                  <Link to="/how">
                    HOW WE MAKE OUR DECISIONS
                    <ExternalLink size={16} />
                  </Link>
                </Button>
              </div>
              <div className="mt-4 text-sm text-muted-foreground">
                <p className="font-medium">Our promise from us to you</p>
                <p className="mt-2 font-medium">A thought from Cortex on social features﻿</p>
                <p className="mt-2 font-medium">A tool that works with your brain, not against it</p>
              </div>
            </>
          }
        />
        
        <WhySection
          id="why-3"
          icon={<RefreshCw className="w-6 h-6 text-primary" />}
          title="Because new beginnings are beautiful."
          content={
            <>
              <p>
                There's a reason we don't have an import feature. We like the idea of starting from scratch. Not only because humanity revolves around fresh starts, but this also requires you to reevaluate your relationship with data. It inspires you to be more conscious, more meticulous, more mindful of the things you save and collect.
              </p>
              <p>
                Digital clutter and information fatigue affect our real minds, whether we're aware of it or not. We want your new mind to be a break from that. It's a clean slate where you can deliberately choose what to save and consume. A mental sigh of relief.
              </p>
            </>
          }
        />
        
        <WhySection
          id="why-4"
          icon={<Zap className="w-6 h-6 text-primary" />}
          title="Because a tool is just the means to an end, not the end in itself."
          content={
            <>
              <p>
                We built Cortex for doers and makers. For people who are busy doing other things and simply need a place to collect and remember what they care about.
              </p>
              <p>
                Cortex doesn't interfere, doesn't bother and doesn't ask to be maintained. It's meant to serve you, as an extension of your mind. So you can think about anything and everything except the tool itself.
              </p>
              <p>
                Because that's all it is: A tool meant to help you achieve something else. Those who like to procrastinate with folders and unmaintainable systems will find plenty of other apps to keep them busy. Cortex is for those who would rather draw and write and build and dance and sing.
              </p>
            </>
          }
        />
        
        <div className="mt-16 text-center">
          <Button size="lg" className="gap-2" asChild>
            <Link to="/">
              Start Your Journey
              <Stars size={18} />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WhyPage;
