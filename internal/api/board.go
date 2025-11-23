package api

import "github.com/RoboCup-SSL/ssl-status-board/pkg/board"

type Board interface {
	RefereeData() []byte
	RefereeConfig() board.RefereeConfig
	Start()
	Stop()
}
