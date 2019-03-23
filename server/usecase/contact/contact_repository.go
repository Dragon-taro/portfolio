package contact

// ContactRepository ...
type ContactRepository interface {
	Notify(string) error
}
