export default {
  'step': 'Step {step}',
  'Steps': {
    'SessionName': 'Spill Navn',
    'GameSelection': 'Spill Velger',
    'SetupEmulator': 'Sett Opp Emulator',
    'ConnectionDetails': 'Tilkoblings Detaljer'
  },
  'Welcome': {
    'username': 'Brukernavn'
  },
  'Details': {
    'GameTypes': {
      'solo': {
        'description': 'Du spiller alene og trenger ikke å koble til andre',
        'title': 'Individuell Spilling'
      },
      'multi': {
        'description': 'Du spiller med 1 eller flere andre spillere',
        'title': 'Flerspillere'
      },
      'multi_soullink': {
        'description': 'Du spiller en Soul Link med 1 eller flere spillere',
        'title': 'Soul Link Flerspillere'
      },
      'multi_vs': {
        'description': 'Du spiller et VS spill med 1 eller flere spillere',
        'title': 'VS Flerspillere'
      }
    }
  },
  'SessionDetails': {
    'SessionName': 'Spill Navn',
    'Save': 'Fortsett med samme spill oppsett',
    'Validation': {
      'SessionNameAndGameOptions': 'Du må sette opp et spill navn før du kan fortsette'
    }
  },

  'GameSelection': {
    'DetectionTypes': {
      'automatic': {
        'description': 'Dersom PokéLink støtter valgt spill så blir dataen lest direkte fra emulatoren din',
        'title': 'Automatisk Lag Kontroll'
      },
      'manual': {
        'description': 'Du kan manuelt endre laget ditt ved hjelp av applikasjonens enkle interaktive system',
        'title': 'Manuel Lag Kontroll'
      }
    }
  },

  'Emulator': {
    'Subtitle': 'La oss se om prosessen er fullført',
    'AttemptingToConnect': 'Forsøker å koble til Emulator... ',
    'RunEmulatorAndOpenGame': 'Vennligst start Emulatoren din og åpne spillet i den',
    'CurrentlySupportedEmulators': '(Bare DeSmuME, VBA, Bizhawk & Citra er støttet per nå)',
    'CheckForX64': 'Sjekk at Emulatoren din er "x64" og ikke "x86" eller spør på Discord',
    'MultipleEmulatorsDetected': 'Flere Emulatorer er funnet åpne',
    'NoEmulatorsFound': 'Ingen Emulatorer er funnet, trykk her for å prøve igjen?',
    'EmulatorFound': 'Emulator Funnet! (bruker {emulator})',
    'SelectADetectedEmulatorLong': 'Vennligst velg én av Emulatorene som vi fant gående:',
    'SelectADetectedEmulatorShort': 'Velg en Emulator',
    'DoesNotSupportGeneration': '{emulator} (støtter ikke Gen {generation})',
    'DetectionIsPaused': 'Emulator tilkobling pauset',
    'WaitingForGameData': 'Avventer Spill data...',
    'ConnectingToEmulator': 'Forsøker å koble automatisk til {emulator}',
    'LoadLuaScriptIntoEmulator': 'Last opp "Lua Script" i din Emulator',
    'Instructions': {
      'VBA-RR': 'Dette kan bli gjort ved å åpne <em>Tools</em> » <em>Lua Script Window</em> » <em>New Lua Script Window</em> inni VBA-ReRecording <em>(Sørg for å ikke lukke det nye Script vinduet, men du kan minimere den)</em',
      'DeSmuME': 'Dette kan bli gjort ved å åpne <em>Tools</em> » <em>Lua Scripting</em> » <em>New Lua Script Window</em> inni <em>DeSmuME</strong> <em>(Sørg for å ikke lukke det nye Script vinduet, men du kan minimere den)</em>',
      'Bizhawk': 'Pokélink automatically generated a lua script for your session. We closed Bizhawk, and launched it again with the lua script injected for you!'
    },
    'Errors': {
      'Bizhawk': {
        'EmulatorClosedUnexpectedly': {
          'Title': 'Bizhawk Close Detected',
          'Message': 'Pokelink detected that Bizhawk was unexpectedly closed. If you did not intend to close Bizhawk, please end this session, close Pokélink, re-open Pokélink and resume this session to continue.'
        },
        'RomRequired': {
          'Message': 'ROM needs to be dropped in the previous step to use Bizhwk'
        }
      }
    }
  },

  'ConnectionDetails': {
    'ConnectionTypes': {
      'host': {
        'description': 'Du har åpnet en kanal på din ruter/modem eller koblet til dem på en annen måte.',
        'title': 'Start en server'
      },
      'client': {
        'description': 'Noen andre har konfigurert nettverket sitt, og jeg kobler meg til deres Pokélink app.',
        'title': 'Koble til en annen spiller'
      }
    }
  }
}
