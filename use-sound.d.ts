declare module 'use-sound' {
    type SoundOptions = {
      volume: number;
      onplay?: () => void;
      onend?: () => void;
      onpause?: () => void;
      format: string[];
      
    };
  
    type UseSoundReturnType = [
      () => void,
      {
        pause: () => void;
        sound: any; 
      }
    ];
  
    function useSound(url: string, options: SoundOptions): UseSoundReturnType;
  
    export default useSound;
  }