"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";

export default function ResumeEditor() {
  const router = useRouter();

  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [summary, setSummary] = useState("");
  const [experience, setExperience] = useState([{ company: "", role: "", duration: "" }]);
  const [education, setEducation] = useState([{ institution: "", degree: "", duration: "" }]);
  const [skills, setSkills] = useState([""]);

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSummaryChange = (e) => setSummary(e.target.value);

  const handleExperienceChange = (index, field, value) => {
    const newExperience = [...experience];
    newExperience[index][field] = value;
    setExperience(newExperience);
  };

  const handleEducationChange = (index, field, value) => {
    const newEducation = [...education];
    newEducation[index][field] = value;
    setEducation(newEducation);
  };

  const handleSkillsChange = (index, value) => {
    const newSkills = [...skills];
    newSkills[index] = value;
    setSkills(newSkills);
  };

  const handleAddExperience = () => setExperience([...experience, { company: "", role: "", duration: "" }]);
  const handleAddEducation = () => setEducation([...education, { institution: "", degree: "", duration: "" }]);
  const handleAddSkill = () => setSkills([...skills, ""]);

  const handleSave = () => {
    // Save logic here
  };

  const handleShare = () => {
    // Share logic here
  };

  const handleDownload = () => {
    // Download logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Resume Editor</h1>
          <div className="flex space-x-4">
            <Button onClick={handleSave}>Save</Button>
            <Button onClick={handleShare}>Share</Button>
            <Button onClick={handleDownload}>Download</Button>
          </div>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Form Builder */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Input
                name="name"
                placeholder="Name"
                value={personalInfo.name}
                onChange={handlePersonalInfoChange}
              />
              <Input
                name="email"
                placeholder="Email"
                value={personalInfo.email}
                onChange={handlePersonalInfoChange}
              />
              <Input
                name="phone"
                placeholder="Phone"
                value={personalInfo.phone}
                onChange={handlePersonalInfoChange}
              />
              <Input
                name="address"
                placeholder="Address"
                value={personalInfo.address}
                onChange={handlePersonalInfoChange}
              />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Summary"
                value={summary}
                onChange={handleSummaryChange}
              />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Experience</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {experience.map((exp, index) => (
                <div key={index} className="space-y-2">
                  <Input
                    placeholder="Company"
                    value={exp.company}
                    onChange={(e) => handleExperienceChange(index, "company", e.target.value)}
                  />
                  <Input
                    placeholder="Role"
                    value={exp.role}
                    onChange={(e) => handleExperienceChange(index, "role", e.target.value)}
                  />
                  <Input
                    placeholder="Duration"
                    value={exp.duration}
                    onChange={(e) => handleExperienceChange(index, "duration", e.target.value)}
                  />
                </div>
              ))}
              <Button onClick={handleAddExperience}>Add Experience</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="space-y-2">
                  <Input
                    placeholder="Institution"
                    value={edu.institution}
                    onChange={(e) => handleEducationChange(index, "institution", e.target.value)}
                  />
                  <Input
                    placeholder="Degree"
                    value={edu.degree}
                    onChange={(e) => handleEducationChange(index, "degree", e.target.value)}
                  />
                  <Input
                    placeholder="Duration"
                    value={edu.duration}
                    onChange={(e) => handleEducationChange(index, "duration", e.target.value)}
                  />
                </div>
              ))}
              <Button onClick={handleAddEducation}>Add Education</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {skills.map((skill, index) => (
                <Input
                  key={index}
                  placeholder="Skill"
                  value={skill}
                  onChange={(e) => handleSkillsChange(index, e.target.value)}
                />
              ))}
              <Button onClick={handleAddSkill}>Add Skill</Button>
            </CardContent>
          </Card>
        </div>

        {/* Resume Preview */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h2 className="text-xl font-bold mb-4">Resume Preview</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">{personalInfo.name}</h3>
              <p>{personalInfo.email}</p>
              <p>{personalInfo.phone}</p>
              <p>{personalInfo.address}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Summary</h3>
              <p>{summary}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Experience</h3>
              {experience.map((exp, index) => (
                <div key={index}>
                  <p className="font-semibold">{exp.company}</p>
                  <p>{exp.role}</p>
                  <p>{exp.duration}</p>
                </div>
              ))}
            </div>
            <div>
              <h3 className="text-lg font-semibold">Education</h3>
              {education.map((edu, index) => (
                <div key={index}>
                  <p className="font-semibold">{edu.institution}</p>
                  <p>{edu.degree}</p>
                  <p>{edu.duration}</p>
                </div>
              ))}
            </div>
            <div>
              <h3 className="text-lg font-semibold">Skills</h3>
              <ul className="list-disc list-inside">
                {skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Styling Settings */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Styling Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Add styling settings here */}
              <p>Alignment, Font, Color, Spacing, Shadow, etc.</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}