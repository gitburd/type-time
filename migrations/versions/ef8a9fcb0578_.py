"""empty message

Revision ID: ef8a9fcb0578
Revises: 16af7230c4bd
Create Date: 2021-07-21 19:42:53.112247

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ef8a9fcb0578'
down_revision = '16af7230c4bd'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('test', sa.Column('completed_at', sa.DateTime(), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('test', 'completed_at')
    # ### end Alembic commands ###
