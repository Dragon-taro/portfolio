package infrastructure

type SlackNortifier struct {
	Token string
}

// NewSlackNotifier ... init notifier
func NewSlackNotifier(token string) *SlackNortifier {
	notifier := new(SlackNortifier)
	notifier.Token = token
	return notifier
}

// SendMessage ... send message to slack
func (notifier SlackNortifier) SendMessage(text string) error {
	return nil
}
