
import React, { useState } from 'react';
import { Upload, FileText, Globe, Database, Type } from 'lucide-react';
import { ImportSource } from '@/lib/types';
import AnimatedTransition from './AnimatedTransition';
import { cn } from '@/lib/utils';

const importSources: ImportSource[] = [
  {
    id: 'csv',
    name: 'CSV File',
    type: 'csv',
    icon: 'FileText',
    description: 'Import structured data from CSV files'
  },
  {
    id: 'api',
    name: 'API Integration',
    type: 'api',
    icon: 'Database',
    description: 'Connect to external APIs and services'
  },
  {
    id: 'url',
    name: 'Web URL',
    type: 'url',
    icon: 'Globe',
    description: 'Import content from websites and articles'
  },
  {
    id: 'file',
    name: 'Document Upload',
    type: 'file',
    icon: 'Upload',
    description: 'Upload documents, PDFs, and other files'
  },
  {
    id: 'text',
    name: 'Text Input',
    type: 'text',
    icon: 'Type',
    description: 'Directly input or paste text content'
  }
];

interface ImportSourceCardProps {
  source: ImportSource;
  onClick: () => void;
  isActive: boolean;
}

const ImportSourceCard: React.FC<ImportSourceCardProps> = ({ source, onClick, isActive }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const getIcon = () => {
    switch (source.icon) {
      case 'FileText': return <FileText size={24} />;
      case 'Database': return <Database size={24} />;
      case 'Globe': return <Globe size={24} />;
      case 'Upload': return <Upload size={24} />;
      case 'Type': return <Type size={24} />;
      default: return <FileText size={24} />;
    }
  };
  
  return (
    <div 
      className={cn(
        "glass-panel p-4 rounded-xl cursor-pointer transition-all duration-300",
        isActive ? "ring-2 ring-primary" : "",
        isHovered ? "translate-y-[-4px] shadow-md" : ""
      )}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
          {getIcon()}
        </div>
        <div>
          <h3 className="font-medium">{source.name}</h3>
          <p className="text-sm text-muted-foreground mt-1">
            {source.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export const ImportPanel: React.FC = () => {
  const [selectedSource, setSelectedSource] = useState<string | null>(null);
  
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {importSources.map(source => (
          <ImportSourceCard
            key={source.id}
            source={source}
            onClick={() => setSelectedSource(source.id)}
            isActive={selectedSource === source.id}
          />
        ))}
      </div>
      
      <AnimatedTransition
        show={!!selectedSource}
        animation="slide-up"
        className="mt-8 glass-panel p-6 rounded-xl"
      >
        {selectedSource === 'csv' && (
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Import CSV File</h3>
            <p className="text-muted-foreground">
              Upload a CSV file to import structured data into your second brain.
            </p>
            <div className="border-2 border-dashed border-border rounded-xl p-10 text-center">
              <Upload size={40} className="mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">
                Drag and drop a CSV file here, or click to browse
              </p>
              <button className="mt-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                Browse Files
              </button>
            </div>
          </div>
        )}
        
        {selectedSource === 'api' && (
          <div className="space-y-4">
            <h3 className="text-xl font-medium">API Integration</h3>
            <p className="text-muted-foreground">
              Connect to external APIs to import data into your second brain.
            </p>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium mb-1">API Endpoint URL</label>
                <input 
                  type="text" 
                  className="w-full p-2 rounded-lg border border-border bg-card"
                  placeholder="https://api.example.com/data"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Authentication Method</label>
                <select className="w-full p-2 rounded-lg border border-border bg-card">
                  <option>API Key</option>
                  <option>OAuth 2.0</option>
                  <option>Bearer Token</option>
                  <option>No Authentication</option>
                </select>
              </div>
            </div>
            <button className="mt-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
              Connect API
            </button>
          </div>
        )}
        
        {selectedSource === 'url' && (
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Import from URL</h3>
            <p className="text-muted-foreground">
              Import content from a website or article URL.
            </p>
            <div>
              <label className="block text-sm font-medium mb-1">Website URL</label>
              <input 
                type="text" 
                className="w-full p-2 rounded-lg border border-border bg-card"
                placeholder="https://example.com/article"
              />
            </div>
            <div className="flex items-center gap-2 mt-2">
              <input type="checkbox" id="extractText" />
              <label htmlFor="extractText" className="text-sm">Extract main text content</label>
            </div>
            <button className="mt-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
              Import URL
            </button>
          </div>
        )}
        
        {selectedSource === 'file' && (
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Document Upload</h3>
            <p className="text-muted-foreground">
              Upload documents, PDFs, and other files to import into your second brain.
            </p>
            <div className="border-2 border-dashed border-border rounded-xl p-10 text-center">
              <Upload size={40} className="mx-auto text-muted-foreground mb-4" />
              <p className="text-muted-foreground">
                Drag and drop files here, or click to browse
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Supported formats: PDF, DOCX, TXT, MD
              </p>
              <button className="mt-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                Browse Files
              </button>
            </div>
          </div>
        )}
        
        {selectedSource === 'text' && (
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Text Input</h3>
            <p className="text-muted-foreground">
              Directly input or paste text content.
            </p>
            <div>
              <label className="block text-sm font-medium mb-1">Title</label>
              <input 
                type="text" 
                className="w-full p-2 rounded-lg border border-border bg-card"
                placeholder="Enter a title for this content"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Content</label>
              <textarea 
                className="w-full p-2 rounded-lg border border-border bg-card min-h-32"
                placeholder="Enter or paste your content here..."
              />
            </div>
            <button className="mt-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
              Save to Brain
            </button>
          </div>
        )}
      </AnimatedTransition>
    </div>
  );
};

export default ImportPanel;
