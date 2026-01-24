'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const playAudio = async () => {
      try {
        if (audioRef.current && !hasError) {
          audioRef.current.volume = 0.4;
          await audioRef.current.play();
          setIsPlaying(true);
        }
      } catch (err) {
        // Autoplay failed or file not found - silent fail
        setIsPlaying(false);
      }
    };

    if (!hasError) {
      playAudio();
    }
  }, [hasError]);

  const togglePlay = () => {
    if (!audioRef.current || hasError) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(() => {
        // Catch interaction errors
        setIsPlaying(false);
      });
      setIsPlaying(true);
    }
    setHasInteracted(true);
  };

  useEffect(() => {
    const handleInteraction = () => {
        if(!hasInteracted && !isPlaying && audioRef.current && !hasError){
             audioRef.current.play().then(() => {
                 setIsPlaying(true);
                 setHasInteracted(true);
             }).catch(() => {});
        }
    }

    window.addEventListener('click', handleInteraction);
    window.addEventListener('scroll', handleInteraction, { once: true });
    
    return () => {
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('scroll', handleInteraction);
    };
  }, [hasInteracted, isPlaying, hasError]);

  if (hasError) return null; // Hide component if music file is missing

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        variant="outline"
        size="icon"
        className="rounded-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg hover:scale-110 transition-transform duration-300 w-12 h-12 border-primary/20"
        onClick={togglePlay}
      >
        {isPlaying ? (
          <Volume2 className="w-5 h-5 text-primary animate-pulse" />
        ) : (
          <VolumeX className="w-5 h-5 text-slate-500" />
        )}
      </Button>
      <audio 
        ref={audioRef} 
        src="/background.mp3" 
        loop 
        className="hidden"
        onError={() => {
            console.warn("Background music file not found at /audio/background.mp3. Please add an MP3 file to enable music.");
            setHasError(true);
        }}
      />
    </div>
  );
};

export default BackgroundMusic;
