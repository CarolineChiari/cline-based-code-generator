export type HaiBuildContextOptions = {
	useIndex: boolean
	useContext: boolean
	appContext?: string
	excludeFolders?: string
	useSyncWithApi: boolean
	useSecretScanning: boolean
	secretFilesPatternToIgnore?: string[]
	systemPromptVersion?: string
}
