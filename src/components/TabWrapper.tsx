import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Briefcase, GraduationCap, Sparkles, WandSparkles } from "lucide-preact";
import { experience, education, skills } from "@/data/datas";



export default function TabWrapper() {
    return (
        <Tabs defaultValue="experience" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="experience">
                    <Briefcase className="mr-2" />
                    Experience
                </TabsTrigger>
                <TabsTrigger value="education">
                    <GraduationCap className="mr-2" />
                    Education
                </TabsTrigger>
                <TabsTrigger value="skills">
                    <Sparkles className="mr-2" />
                    Skills
                </TabsTrigger>
            </TabsList>
            <div className="relative mt-6 min-h-[250px]">
                <TabsContent value="experience" forceMount>
                    <div className="relative pl-6 after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-border">
                        {experience.map((item, index) => (
                            <div key={index} className="relative mb-8 grid gap-2">
                                <div className="absolute -left-[30px] mt-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background"></div>
                                <h3 className="font-bold">
                                    {item.role} at {item.company}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    {item.period}
                                </p>
                                {item.descriptions.map((description) => (
                                    <div className="flex items-center gap-2 mb-2">
                                        <WandSparkles class="w-4 h-4 text-primary" />
                                        <p className="text-sm text-amber-950">
                                            {description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </TabsContent>
                <TabsContent value="education" forceMount>
                    {education.map((item, index) => (
                        <div key={index} className="mb-6">
                            <h3 className="font-bold">{item.degree}</h3>
                            <p className="text-sm text-muted-foreground">
                                {item.institution} ({item.period})
                            </p>
                        </div>
                    ))}
                </TabsContent>
                <TabsContent value="skills" forceMount>
                    <div className="flex flex-wrap gap-2">
                        {skills.map((skill) => (
                            <Badge key={skill} variant="default">
                                {skill}
                            </Badge>
                        ))}
                    </div>
                </TabsContent>
            </div>
        </Tabs>
    );
}